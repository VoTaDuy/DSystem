import React from "react";
import "../styles/auth.css";
import authStudentImg from "../assets/auth_student.png";

export const AuthLayout: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <div className="auth-page">
      <div className="auth-wrapper">

        {/* ── Cột Trái ──────────────────────────────────────────────── */}
        <div className="auth-left">
          <span className="auth-left-kicker">Hành trình khám phá</span>
          <h1>
            Chinh phục Toán<br />
            học theo cách của<br />
            riêng bạn.
          </h1>
          <p className="auth-left-desc">
            Giao diện trực quan, bài giảng sinh động và lộ trình cá nhân hóa
            đang chờ đón bạn tại MathX.
          </p>

          <div className="auth-left-image-wrap">
            <div className="auth-left-photo-bg">
              <img src={authStudentImg} alt="Học sinh đang học" />
            </div>

            <div className="auth-left-badge">
              <div className="auth-left-badge-header">
                <div className="auth-left-badge-icon">
                  <svg viewBox="0 0 20 20" fill="currentColor">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                </div>
                <span className="auth-left-badge-title">Thành tích mới</span>
              </div>
              <p>Trải nghiệm học tập cho những ai cơ bản đang được khơi gợi.</p>
            </div>
          </div>
        </div>

        {/* ── Cột Phải (Slot cho Form) ───────────────────────────────── */}
        <div className="auth-right">
          {children}
        </div>
      </div>

      {/* ── Footer ────────────────────────────────────────────────────── */}
      <footer className="auth-page-footer">
        <div className="auth-page-footer-brand">
          <strong>MathX</strong>
          <p>© 2026 MathX nền tảng học toán sáng tạo.</p>
        </div>
        <nav className="auth-page-footer-links">
          <a href="#">Điều khoản</a>
          <a href="#">Bảo mật</a>
          <a href="#">Trợ giúp</a>
        </nav>
      </footer>
    </div>
  );
};
