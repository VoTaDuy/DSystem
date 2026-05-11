import React, { useState } from "react";
import { Link } from "react-router-dom";
import { AuthLayout } from "../layouts/AuthLayout";

/* ─── Inline SVG Icons ──────────────────────────────────────────────────── */
const UserIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
    <circle cx="12" cy="7" r="4" />
  </svg>
);
const LockIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
    <path d="M7 11V7a5 5 0 0 1 10 0v4" />
  </svg>
);
const EyeOffIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94" />
    <path d="M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19" />
    <line x1="1" y1="1" x2="23" y2="23" />
  </svg>
);
const EyeOnIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
    <circle cx="12" cy="12" r="3" />
  </svg>
);

const LoginPage: React.FC = () => {
  const [showPw, setShowPw] = useState(false);

  return (
    <AuthLayout>
      {/* Logo */}
      <Link to="/" className="auth-logo">
        <div className="auth-logo-icon">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
          </svg>
        </div>
        <span className="auth-logo-text">MathX</span>
      </Link>

      <h2 className="auth-heading">Chào mừng trở lại!</h2>
      <p className="auth-subheading">Tiếp tục hành trình khám phá tri thức của bạn ngay hôm nay.</p>

      <form>
        {/* Email */}
        <div className="auth-field">
          <label className="auth-label">Tên đăng nhập hoặc Email</label>
          <div className="auth-input-wrap">
            <span className="auth-input-icon"><UserIcon /></span>
            <input className="auth-input" type="text" placeholder="Nhập email của bạn" />
          </div>
        </div>

        {/* Password */}
        <div className="auth-field">
          <div className="auth-field-label-row">
            <label className="auth-label">Mật khẩu</label>
            <a href="#" className="auth-forgot">Quên mật khẩu?</a>
          </div>
          <div className="auth-input-wrap">
            <span className="auth-input-icon"><LockIcon /></span>
            <input className="auth-input" type={showPw ? "text" : "password"} placeholder="••••••••" />
            <button type="button" className="auth-input-eye" onClick={() => setShowPw(!showPw)}>
              {showPw ? <EyeOnIcon /> : <EyeOffIcon />}
            </button>
          </div>
        </div>

        {/* Remember me */}
        <div className="auth-remember">
          <input type="checkbox" id="remember" />
          <label htmlFor="remember">Ghi nhớ đăng nhập</label>
        </div>

        <button type="button" className="auth-btn">Đăng nhập</button>
      </form>

      {/* Divider */}
      <div className="auth-divider">
        <div className="auth-divider-line" />
        <span className="auth-divider-text">Hoặc đăng nhập với</span>
        <div className="auth-divider-line" />
      </div>

      {/* Social */}
      <div className="auth-social-row">
        <button className="auth-social-btn">
          <svg viewBox="0 0 24 24">
            <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
            <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.16v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
            <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.16C1.43 8.55 1 10.22 1 12s.43 3.45 1.16 4.93l3.68-2.84z" fill="#FBBC05" />
            <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.16 7.07l3.68 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
          </svg>
          Google
        </button>
        <button className="auth-social-btn">
          <svg viewBox="0 0 24 24" fill="#1877F2">
            <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.469h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.469h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
          </svg>
          Facebook
        </button>
      </div>

      <p className="auth-footer-link">
        Chưa có tài khoản?{" "}
        <Link to="/register">Đăng ký ngay</Link>
      </p>
    </AuthLayout>
  );
};

export default LoginPage;

