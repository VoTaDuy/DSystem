import { Link } from "react-router-dom";
import aboutCrateImage from "../assets/Screenshot 2026-04-23 215434.png";
import aboutPhotoImage from "../assets/Screenshot 2026-04-23 215443.png";

const milestones = [
  {
    year: "2022",
    title: "Gieo mầm ý tưởng",
    description:
      "MathX ra đời trong lúc nhận thấy cơ hội để đổi mới cách học, với khát khao mang đến giải pháp học tập trực quan và chạm đến từng học sinh.",
    side: "left",
    visual: "crate",
  },
  {
    year: "2024",
    title: "Sự bùng nổ",
    description:
      "Bắt đầu mở rộng cộng đồng người dùng tích cực. Chúng tôi hình dung cách phân tích lộ trình học tập cho giáo viên và việc cá thể hóa việc học cho học sinh.",
    side: "right",
    visual: "photo",
  },
  {
    year: "2026",
    title: "Cá nhân hóa bằng AI",
    description:
      "Ra mắt hệ thống Adaptive Learning giúp mỗi học sinh có một lộ trình học tập riêng biệt, tối ưu theo điểm mạnh và điểm cần cải thiện.",
    side: "left",
    visual: "ai",
  },
];

const values = [
  {
    title: "Sáng tạo không biên giới",
    description:
      "Chúng tôi tin rằng Toán học là nghệ thuật của tư duy. Mỗi bài toán là một câu đố đầy màu sắc chờ được giải mã bằng những cách tiếp cận độc đáo.",
    accent: "blue",
    icon: "idea",
  },
  {
    title: "Hiệu quả thực chất",
    description:
      "Không chạy theo thành tích ảo. Chúng tôi tập trung vào việc hiểu bản chất, giúp học sinh nắm vững kiến thức nền tảng một cách vững chắc nhất.",
    accent: "green",
    icon: "rocket",
  },
  {
    title: "Đồng hành tin cậy",
    description:
      "Chúng tôi luôn ở bên cạnh, lắng nghe và thấu hiểu những khó khăn của học sinh, phụ huynh để điều chỉnh chương trình phù hợp nhất.",
    accent: "amber",
    icon: "people",
  },
];

const mentors = [
  {
    name: "TS. Trần Thanh Vinh",
    role: "Dev",
    accent: "slate",
  },
  {
    name: "ThS. Võ Tá Duy",
    role: "Dev",
    accent: "forest",
  },

];

function ValueIcon({ type }: { type: string }) {
  if (type === "idea") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <circle
          cx="12"
          cy="10"
          r="5.5"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
        />
        <path
          d="M9.5 16.5h5M10 19h4"
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeWidth="1.8"
        />
        <circle cx="12" cy="10" r="1.4" fill="currentColor" />
      </svg>
    );
  }

  if (type === "rocket") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path
          d="M12 4c3.2 1.4 5.1 4.2 5.7 8.6l-3.3 1.8-3.1-3.2 1.7-3.1C13.2 6.8 12.8 5.5 12 4Z"
          fill="none"
          stroke="currentColor"
          strokeLinejoin="round"
          strokeWidth="1.8"
        />
        <path
          d="M11 11 7.5 14.5M9 18H6.2l.8-2.8"
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.8"
        />
        <circle cx="13.7" cy="9.3" r="1.1" fill="currentColor" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <circle
        cx="12"
        cy="8"
        r="2.2"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
      />
      <circle
        cx="7.2"
        cy="10.2"
        r="1.8"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
      />
      <circle
        cx="16.8"
        cy="10.2"
        r="1.8"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
      />
      <path
        d="M5 17.2c.7-1.9 2-2.9 3.9-2.9 1.3 0 2.3.4 3.1 1.2.8-.8 1.8-1.2 3.1-1.2 1.9 0 3.2 1 3.9 2.9"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="1.8"
      />
    </svg>
  );
}

function AboutPage() {
  return (
    <main className="about-page">
      <section className="about-hero">
        <div className="container about-hero-content">
          <span className="about-kicker">Hơn 100,000 học sinh tin dùng</span>
          <h1>
            Khơi nguồn đam mê,
            <br />
            <em>Chinh phục</em> tri thức
          </h1>
          <p>
            Chúng tôi không chỉ dạy Toán. Chúng tôi kiến tạo niềm vui và khát
            khao khám phá trong mỗi tiết học, giúp mỗi học sinh trở thành phiên
            bản tốt nhất của chính mình.
          </p>
          <div className="about-hero-actions">
            <Link className="button button-primary" to="#about-journey">
              Bắt đầu hành trình
            </Link>
            <Link className="button button-secondary" to="#about-journey">
              Tìm hiểu thêm
            </Link>
          </div>

          <div className="about-hero-mark about-hero-mark-left" aria-hidden="true">
            √
          </div>
          <div className="about-hero-mark about-hero-mark-right" aria-hidden="true">
            Σ
          </div>
          <div className="about-hero-glow" aria-hidden="true" />
        </div>
      </section>

      <section className="about-journey" id="about-journey">
        <div className="container">
          <div className="about-section-head">
            <h2>
              Hành trình <em>MathX</em>
            </h2>
            <p>
              Từ những ý tưởng sơ khai đến nền tảng học tập trực tuyến đầy khác
              biệt.
            </p>
          </div>

          <div className="about-timeline">
            <div className="about-timeline-line" aria-hidden="true" />

            {milestones.map((item, index) => (
              <article
                className={`about-timeline-row about-timeline-row-${item.side}`}
                key={item.year}
              >
                <div
                  className={`about-timeline-copy about-timeline-copy-${item.side}`}
                >
                  <span className="about-year">{item.year}</span>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>

                <div className="about-timeline-node" aria-hidden="true">
                  <span className={`about-node about-node-${index + 1}`} />
                </div>

                <div
                  className={`about-timeline-visual about-timeline-visual-${item.side}`}
                >
                  <div className={`about-visual-card about-visual-${item.visual}`}>
                    {item.visual === "crate" ? (
                      <img
                        className="about-visual-image"
                        src={aboutCrateImage}
                        alt="Phác thảo khối hộp toán học"
                      />
                    ) : null}

                    {item.visual === "photo" ? (
                      <img
                        className="about-visual-image"
                        src={aboutPhotoImage}
                        alt="Học sinh tương tác với màn hình laptop"
                      />
                    ) : null}

                    {item.visual === "ai" ? (
                      <div className="about-ai-scene">
                        <div className="about-ai-beam" />
                        <strong>AI</strong>
                      </div>
                    ) : null}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="about-values">
        <div className="container">
          <div className="about-section-head about-section-head-compact">
            <h2>Giá trị chúng tôi theo đuổi</h2>
            <div className="about-head-underline" aria-hidden="true" />
          </div>

          <div className="about-values-grid">
            {values.map((item) => (
              <article className="about-value-card" key={item.title}>
                <div className={`about-value-icon about-value-icon-${item.accent}`}>
                  <ValueIcon type={item.icon} />
                </div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="about-team">
        <div className="container">
          <div className="about-team-head">
            <div>
              <h2>Những người kiến tạo</h2>
              <p>
                Hình tụ những tâm hồn đầy đam mê từ giáo dục, công nghệ và tâm
                lý học.
              </p>
            </div>
            <Link className="about-team-link" to="/">
              Khám phá đội ngũ của chúng tôi
            </Link>
          </div>

          <div className="about-team-grid">
            {mentors.map((item) => (
              <article className="about-mentor-card" key={item.name}>
                <div
                  className={`about-mentor-portrait about-mentor-portrait-${item.accent}`}
                >
                  <div className="about-mentor-face" />
                  <div className="about-mentor-body" />
                </div>
                <div className="about-mentor-copy">
                  <h3>{item.name}</h3>
                  <p>{item.role}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="about-cta">
        <div className="container">
          <div className="about-cta-banner">
            <div className="about-cta-mark about-cta-mark-left" aria-hidden="true">
              ∿
            </div>
            <div className="about-cta-mark about-cta-mark-right" aria-hidden="true">
              ∞
            </div>

            <div className="about-cta-content">
              <h2>
                <span>Viết tiếp câu chuyện thành công</span>
                <span>của bạn?</span>
              </h2>
              <p>
                Gia nhập cộng đồng MathX để khám phá thế giới toán học đầy cảm
                hứng ngay hôm nay.
              </p>
              <div className="about-cta-actions">
                <Link className="button about-cta-button-primary" to="/">
                  Gia nhập ngay
                </Link>
                <Link className="button about-cta-button-secondary" to="/">
                  Đặt lịch tư vấn
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default AboutPage;
