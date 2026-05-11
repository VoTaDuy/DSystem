import { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";

const navLinks = [
  { to: "/", label: "Trang chủ" },
  { to: "/explore", label: "Khám phá" },
  { to: "/about", label: "Về phía chúng tôi" }
];

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const headerRef = useRef<HTMLElement | null>(null);

  // Close menu on route change
  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  // Close menu when clicking outside
  useEffect(() => {
    if (!menuOpen) return;
    function handleOutside(e: MouseEvent) {
      if (headerRef.current && !headerRef.current.contains(e.target as Node)) {
        setMenuOpen(false);
      }
    }
    document.addEventListener("mousedown", handleOutside);
    return () => document.removeEventListener("mousedown", handleOutside);
  }, [menuOpen]);

  // Lock body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <header className="site-header" ref={headerRef}>
      <div className="site-header-inner container">
        <Link className="site-brand" to="/">
          <strong>MATHX</strong>
        </Link>

        {/* Desktop nav */}
        <nav className="site-nav" aria-label="Điều hướng chính">
          {navLinks.map((item) => (
            <Link
              to={item.to}
              key={item.label}
              className={location.pathname === item.to ? "is-active" : ""}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Desktop actions */}
        <div className="site-header-actions">
          <Link className="header-login" to="/login">
            {"Đăng nhập"}
          </Link>
          <Link className="header-cta" to="/register">
            {"Đăng ký"}
          </Link>
        </div>

        {/* Hamburger — mobile only */}
        <button
          className={"hamburger" + (menuOpen ? " hamburger--open" : "")}
          aria-label={menuOpen ? "Đóng menu" : "Mở menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((v) => !v)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      {/* Mobile drawer */}
      <div
        className={"mobile-nav" + (menuOpen ? " mobile-nav--open" : "")}
        aria-hidden={!menuOpen}
      >
        <nav aria-label="Điều hướng di động">
          {navLinks.map((item) => (
            <Link
              className={
                "mobile-nav-link" +
                (location.pathname === item.to ? " is-active" : "")
              }
              to={item.to}
              key={item.label}
              tabIndex={menuOpen ? 0 : -1}
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="mobile-nav-actions">
          <Link
            className="mobile-nav-login"
            to="/login"
            tabIndex={menuOpen ? 0 : -1}
          >
            {"Đăng nhập"}
          </Link>
          <Link
            className="header-cta mobile-nav-cta"
            to="/register"
            tabIndex={menuOpen ? 0 : -1}
          >
            {"Đăng ký"}
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Header;


