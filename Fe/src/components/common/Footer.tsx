import { Link } from "react-router-dom";

const SOCIAL_GLOBE =
  "https://www.figma.com/api/mcp/asset/d51a5910-d7e0-4a07-993b-31300bf42a27";
const SOCIAL_PLAY =
  "https://www.figma.com/api/mcp/asset/aadf0997-9664-4d70-b572-bc14f213ee55";
const SOCIAL_MESSAGE =
  "https://www.figma.com/api/mcp/asset/db7d7e43-f148-4e3e-9819-57b71eb784ce";

const footerColumns = [
  {
    title: "Nền tảng",
    links: [
      { label: "Giới thiệu", to: "/" },
      { label: "Chương trình học", to: "/explore" },
      { label: "Bảng xếp hạng", to: "/explore" },
    ],
  },
  {
    title: "Hỗ trợ",
    links: [
      { label: "Trung tâm hỗ trợ", to: "/" },
      { label: "Liên hệ", to: "/" },
      { label: "Hướng dẫn cho phụ huynh", to: "/explore" },
    ],
  },
  {
    title: "Pháp lý",
    links: [
      { label: "Điều khoản", to: "/" },
      { label: "Bảo mật", to: "/" },
    ],
  },
];

const socialLinks = [
  { icon: SOCIAL_GLOBE, label: "Website", to: "/" },
  { icon: SOCIAL_PLAY, label: "Video", to: "/explore" },
  { icon: SOCIAL_MESSAGE, label: "Tin nhắn", to: "/" },
];

function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-footer-grid container">
        <div className="site-footer-brand">
          <strong>MATHX</strong>
          <p>
            © 2026 MathX nền tảng học toán
            <br />
            sáng tạo.
          </p>
          <p>Chính xác trong từng phương trình.</p>

          <div className="site-footer-socials" aria-label="Kênh xã hội">
            {socialLinks.map((item) => (
              <Link
                className="site-footer-social"
                to={item.to}
                key={item.label}
                aria-label={item.label}
              >
                <img src={item.icon} alt="" />
              </Link>
            ))}
          </div>
        </div>

        {footerColumns.map((column) => (
          <div className="site-footer-column" key={column.title}>
            <h3>{column.title}</h3>
            <div className="site-footer-links">
              {column.links.map((link) => (
                <Link to={link.to} key={link.label}>
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>
    </footer>
  );
}

export default Footer;
