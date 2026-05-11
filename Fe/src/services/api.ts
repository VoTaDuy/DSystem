import { API_BASE_URL } from "../utils/constants";

// ─── Interfaces ──────────────────────────────────────────────────────────────

/** Lỗi chuẩn trả về từ API server */
export interface ApiError {
  status: number;
  message: string;
}

/** Tùy chọn cho hàm request nội bộ */
type RequestOptions = Omit<RequestInit, "headers"> & {
  headers?: Record<string, string>;
};

// ─── Base fetch wrapper ───────────────────────────────────────────────────────

/**
 * Base fetch wrapper — tự thêm Content-Type, gắn JWT, xử lý lỗi chuẩn.
 * Generic `T` là kiểu dữ liệu kỳ vọng từ response body.
 *
 * @param endpoint  - đường dẫn API, vd: "/api/courses"
 * @param options   - fetch options (method, body, signal...)
 */
async function request<T>(
  endpoint: string,
  options: RequestOptions = {}
): Promise<T> {
  const url = `${API_BASE_URL}${endpoint}`;

  const headers: Record<string, string> = {
    "Content-Type": "application/json",
    ...options.headers,
  };

  // Gắn JWT token nếu có
  const token = localStorage.getItem("token");
  if (token) {
    headers["Authorization"] = `Bearer ${token}`;
  }

  const response = await fetch(url, { ...options, headers });

  if (!response.ok) {
    const text = await response.text().catch(() => "");
    throw new Error(
      `API ${options.method ?? "GET"} ${endpoint} thất bại: ${response.status}${
        text ? " – " + text : ""
      }`
    );
  }

  // 204 No Content — không có body để parse
  if (response.status === 204) return null as T;

  return response.json() as Promise<T>;
}

// ─── Public API functions ─────────────────────────────────────────────────────

/** GET — lấy dữ liệu từ endpoint */
export function getData<T>(endpoint: string, signal?: AbortSignal): Promise<T> {
  return request<T>(endpoint, { signal });
}

/** POST — gửi dữ liệu lên endpoint */
export function postData<T>(
  endpoint: string,
  body: unknown,
  signal?: AbortSignal
): Promise<T> {
  return request<T>(endpoint, {
    method: "POST",
    body: JSON.stringify(body),
    signal,
  });
}

/** PUT — cập nhật toàn bộ resource */
export function putData<T>(
  endpoint: string,
  body: unknown,
  signal?: AbortSignal
): Promise<T> {
  return request<T>(endpoint, {
    method: "PUT",
    body: JSON.stringify(body),
    signal,
  });
}

/** DELETE — xóa resource */
export function deleteData<T>(
  endpoint: string,
  signal?: AbortSignal
): Promise<T> {
  return request<T>(endpoint, { method: "DELETE", signal });
}
