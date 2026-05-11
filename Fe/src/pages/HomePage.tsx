import { Link } from "react-router-dom";
import heroImage from "../assets/hero_blackboard.png";

// ─── Types ────────────────────────────────────────────────────────────────────

type BenefitTone = "light" | "warm" | "cool";
type IconType = "grade" | "essay" | "auto" | "trophy";

interface Benefit {
  title: string;
  description: string;
  tone: BenefitTone;
  iconType: IconType;
  iconAlt: string;
  iconClassName: string;
}

interface Grade {
  grade: string;
  title: string;
  description: string;
  accent: string;
}

interface Step {
  step: string;
  title: string;
  description: string;
}

interface Stat {
  value: string;
  label: string;
}

interface BenefitIconProps {
  type: IconType;
  className?: string;
  "aria-label"?: string;
}

function BenefitIcon({ type, className, ...props }: BenefitIconProps) {
  if (type === "grade") {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
        <path d="M4 11.2V16a8 8 0 0 0 16 0v-4.8" />
        <polygon points="12 4 22 9 12 14 2 9 12 4" />
      </svg>
    );
  }
  if (type === "essay") {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
        <path d="M4 6h16" />
        <path d="M4 12h10" />
        <path d="M4 18h6" />
        <path d="M18.8 9.2l1 1-6.5 6.5-2.5.5.5-2.5 7.5-7.5z" />
      </svg>
    );
  }
  if (type === "auto") {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
      </svg>
    );
  }
  if (type === "trophy") {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
        <path d="M8 21h8" />
        <path d="M12 17v4" />
        <path d="M7 4h10" />
        <path d="M6 4h12c1 0 2 .8 2 2v2c0 3-3 4-5 5-1 1-2 2-3 4-1-2-2-3-3-4-2-1-5-2-5-5V6c0-1.2 1-2 2-2z" />
        <path d="M4 6h2" />
        <path d="M18 6h2" />
      </svg>
    );
  }
  return null;
}

const benefits: Benefit[] = [
  {
    title: "Luyện tập theo lớp",
    description:
      "Chương trình được thiết kế tập trung vào các chuẩn kiến thức trọng tâm cho lớp 6 đến lớp 9.",
    tone: "light",
    iconType: "grade",
    iconAlt: "Biểu tượng hộp học tập",
    iconClassName: "benefit-icon-grade",
  },
  {
    title: "Trả lời tự luận",
    description:
      "Giải thích logic của bạn và nhận phản hồi AI về tư duy toán học của mình.",
    tone: "warm",
    iconType: "essay",
    iconAlt: "Biểu tượng bút viết",
    iconClassName: "benefit-icon-essay",
  },
  {
    title: "Chấm điểm tự động",
    description:
      "Học từ sai lầm ngay khi chúng xuất hiện với phản hồi tức thì và rõ ràng.",
    tone: "cool",
    iconType: "auto",
    iconAlt: "Biểu tượng tia sét",
    iconClassName: "benefit-icon-auto",
  },
];

const grades: Grade[] = [
  {
    grade: "6",
    title: "Lớp 6",
    description: "Tỷ số, hệ thống số và các biểu thức đại số cơ bản.",
    accent: "blue",
  },
  {
    grade: "7",
    title: "Lớp 7",
    description: "Tỷ lệ thuận, hình học và các nền tảng xác suất.",
    accent: "orange",
  },
  {
    grade: "8",
    title: "Lớp 8",
    description: "Phương trình tuyến tính, hàm số và định lý Pytago.",
    accent: "green",
  },
  {
    grade: "9",
    title: "Lớp 9",
    description: "Đại số I, hàm số bậc hai và phân tích dữ liệu nâng cao.",
    accent: "red",
  },
];

const steps: Step[] = [
  {
    step: "1",
    title: "Chọn lớp",
    description:
      "Chọn cấp độ hiện tại hoặc thử thách bản thân với lớp học cao hơn.",
  },
  {
    step: "2",
    title: "Luyện tập & Kiểm tra",
    description:
      "Tham gia các bài toán động thích ứng với kỹ năng của bạn trong thời gian thực.",
  },
  {
    step: "3",
    title: "Theo dõi tiến độ",
    description:
      "Xem điểm số thành thạo tăng dần và xác định điểm cần cải thiện.",
  },
];

const stats: Stat[] = [
  { value: "10,000+", label: "Bài tập" },
  { value: "50k+", label: "Học sinh" },
  { value: "1M+", label: "Bài kiểm tra đã hoàn thành" },
];

const HomePage: React.FC = () => {
  return (
    <div className="landing-page">
      <section className="hero-section">
        <div className="hero-grid container">
          <div className="hero-copy">
            <span className="hero-kicker">Học tập cá nhân hóa lớp 6-9</span>
            <h1>
              Làm chủ môn Toán
              <br />
              với <em>sự Tự tin</em> &amp; Niềm vui
            </h1>
            <p>
              Luyện tập tương tác, bài kiểm tra thông minh và chấm điểm tức thì
              dành cho thế hệ giải quyết vấn đề tiếp theo.
            </p>
            <div className="hero-actions">
              <Link className="button button-primary" to="/login">
                Bắt đầu học
              </Link>
              <Link className="button button-secondary" to="/explore">
                Khám phá chương trình học
              </Link>
            </div>
          </div>

          <div className="hero-visual">
            <div className="hero-glow" />
            <div className="hero-card">
              <img
                src={heroImage}
                alt="Bảng đen với hình minh họa toán học"
              />
            </div>
            <div className="hero-badge">
              <span>Thành tựu gần đây</span>
              <strong>Bậc thầy Đại số</strong>
            </div>
          </div>
        </div>
      </section>

      <section className="benefits-section" id="benefits">
        <div className="container">
          <div className="section-heading section-heading-centered">
            <h2>Tại sao MathX hiệu quả</h2>
            <p>
              Chúng tôi đã tái hiện việc học toán theo cách hấp dẫn như trò chơi
              yêu thích của bạn trong khi vẫn duy trì tính học thuật chuẩn mực.
            </p>
          </div>

          <div className="benefits-grid">
            {benefits.map((benefit) => (
              <article
                className={`benefit-card benefit-card-${benefit.tone}`}
                key={benefit.title}
              >
                <BenefitIcon
                  type={benefit.iconType}
                  className={`benefit-icon ${benefit.iconClassName}`}
                  aria-label={benefit.iconAlt}
                />
                <h3>{benefit.title}</h3>
                <p>{benefit.description}</p>
              </article>
            ))}

            <article className="leaderboard-card">
              <div>
                <h3>Bảng xếp hạng &amp; Trò chơi</h3>
                <p>
                  Cạnh tranh với bạn bè và nhận huy hiệu khi giải quyết các câu
                  đố logic phức tạp.
                </p>
              </div>
              <BenefitIcon
                type="trophy"
                className="leaderboard-mark"
                aria-label="Biểu tượng cúp"
              />
            </article>
          </div>
        </div>
      </section>

      <section className="curriculum-section container" id="curriculum">
        <div className="section-heading">
          <h2>Chọn lộ trình của bạn</h2>
        </div>
        <div className="grade-grid">
          {grades.map((item) => (
            <article className="grade-card" key={item.grade}>
              <div className={`grade-icon grade-icon-${item.accent}`}>
                {item.grade}
              </div>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              <Link to="#cta">Tìm hiểu thêm</Link>
            </article>
          ))}
        </div>
      </section>

      <section className="steps-section">
        <div className="container">
          <div className="section-heading section-heading-centered">
            <h2>Các bước đơn giản để thành công</h2>
          </div>
          <div className="steps-line" />
          <div className="steps-grid">
            {steps.map((item) => (
              <article className="step-card" key={item.step}>
                <div className="step-number">{item.step}</div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="stats-section">
        <div className="stats-grid container">
          {stats.map((item) => (
            <article className="stat-item" key={item.label}>
              <strong>{item.value}</strong>
              <span>{item.label}</span>
            </article>
          ))}
        </div>
      </section>

      <section className="cta-section" id="cta">
        <div className="cta-glow cta-glow-blue" />
        <div className="cta-glow cta-glow-orange" />
        <div className="section-heading section-heading-centered cta-content">
          <h2>Sẵn sàng nâng tầm kỹ năng Toán học?</h2>
          <p>
            Tham gia cùng hàng ngàn học sinh, những người đã khám phá ra rằng
            học toán không cần phải là một sự khó khăn.
          </p>
          <Link className="button button-primary button-large" to="/register">
            Tạo tài khoản miễn phí
          </Link>
        </div>
      </section>
    </div>
  );
}

export default HomePage;
