import { Link } from "react-router-dom";

function NotFoundPage() {
  return (
    <main className="notfound-page">
      <div className="container notfound-content">
        <div className="notfound-code" aria-hidden="true">404</div>
        <h1>Trang không tồn tại</h1>
        <p>
          Trang bạn đang tìm kiếm có thể đã bị xóa, đổi tên, hoặc tạm thời
          không truy cập được.
        </p>
        <div className="notfound-actions">
          <Link className="button button-primary" to="/">
            Về trang chủ
          </Link>
          <Link className="button button-secondary" to="/explore">
            Khám phá chương trình học
          </Link>
        </div>
      </div>
    </main>
  );
}

export default NotFoundPage;


