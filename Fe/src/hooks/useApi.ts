import { useCallback, useEffect, useRef, useState } from 'react';
import { getData } from '../services/api';

/**
 * Hook để gọi API GET với loading/error/data state.
 * Tự hủy request khi component unmount.
 *
 * @param {string|null} endpoint - null để không gọi ngay
 * @returns {{ data, loading, error, refetch }}
 */
export function useApi<T = any>(endpoint: string | null) {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState<boolean>(Boolean(endpoint));
  const [error, setError] = useState<string | null>(null);
  const abortRef = useRef<AbortController | null>(null);

  const fetchData = useCallback(async (ep: string | null) => {
    if (!ep) return;

    // Hủy request cũ nếu đang chạy
    if (abortRef.current) abortRef.current.abort();
    abortRef.current = new AbortController();

    setLoading(true);
    setError(null);

    try {
      const result = await getData<T>(ep, abortRef.current.signal);
      setData(result);
    } catch (err: any) {
      if (err.name !== 'AbortError') {
        setError(err.message ?? 'Lỗi không xác định');
      }
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchData(endpoint);
    return () => {
      if (abortRef.current) abortRef.current.abort();
    };
  }, [endpoint, fetchData]);

  const refetch = useCallback(() => fetchData(endpoint), [endpoint, fetchData]);

  return { data, loading, error, refetch };
}
