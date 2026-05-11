import { Link } from "react-router-dom";

const exploreGrades = [
  {
    grade: "Lớp 6",
    description: "Làm quen với số học, hình học trực quan và xác suất cơ bản.",
    count: "1.2K học viên",
    accent: "blue",
    symbol: "✦",
  },
  {
    grade: "Lớp 7",
    description: "Chinh phục số hữu tỉ, đại lượng tỉ lệ và hình học phẳng.",
    count: "950 học viên",
    accent: "amber",
    symbol: "λ",
  },
  {
    grade: "Lớp 8",
    description: "Đa thức, hằng đẳng thức và các định lý hình học quan trọng.",
    count: "1.1K học viên",
    accent: "green",
    symbol: "Σ",
  },
  {
    grade: "Lớp 9",
    description: "Ôn luyện thi vào 10 với căn thức, hàm số và đường tròn.",
    count: "2.4K học viên",
    accent: "rose",
    symbol: "✣",
  },
];

const exploreActivities = [
  {
    title: "Đua trí Sudoku",
    description:
      "Rèn luyện tư duy logic và khả năng quan sát qua các bảng số.",
    accent: "blue",
    symbol: "✩",
  },
  {
    title: "Tangram Master",
    description:
      "Xây dựng thế giới của các mảnh ghép hình học sáng tạo.",
    accent: "green",
    symbol: "⬡",
  },
  {
    title: "Pháp sư Số học",
    description:
      "Sử dụng phép tính để đánh bại quái vật trong mê cung.",
    accent: "amber",
    symbol: "⌘",
  },
];

function ExplorePage() {
  return (
    <main className="explore-page">
      <section className="explore-hero">
        <div className="container explore-hero-grid">
          <div className="explore-hero-copy">
            <span className="explore-badge">Trải nghiệm mới</span>
            <h1>
              Khám phá thế giới
              <br />
              <em>Toán học</em> sống động
            </h1>
            <p>
              Vượt xa những con số khô khan. Trải nghiệm hành trình chinh phục
              tư duy thông qua hình ảnh trực quan và thử thách đầy cảm hứng.
            </p>
            <div className="explore-actions">
              <Link className="button button-primary" to="#explore-levels">
                Bắt đầu hành trình
              </Link>
              <Link className="button button-secondary" to="#explore-levels">
                Xem video
              </Link>
            </div>
          </div>

          <div className="explore-hero-visual" aria-hidden="true">
            <div className="explore-visual-glow" />
            <div className="explore-visual-card">
              <div className="explore-visual-grid" />
              <div className="explore-visual-orbit explore-visual-orbit-a" />
              <div className="explore-visual-orbit explore-visual-orbit-b" />
              <div className="explore-visual-orbit explore-visual-orbit-c" />
              <div className="explore-visual-core" />
            </div>
          </div>
        </div>
      </section>

      <section className="explore-levels" id="explore-levels">
        <div className="container">
          <div className="explore-section-head">
            <div>
              <h2>Luyện tập theo khối lớp</h2>
              <p>
                Lộ trình được thiết kế chuẩn trọng tâm chương trình phổ thông.
              </p>
            </div>
            <Link className="explore-view-all" to="/">
              Xem tất cả
            </Link>
          </div>

          <div className="explore-level-grid">
            {exploreGrades.map((item) => (
              <article className="explore-level-card" key={item.grade}>
                <div
                  className={`explore-level-icon explore-level-icon-${item.accent}`}
                >
                  <span>{item.symbol}</span>
                </div>
                <h3>{item.grade}</h3>
                <p>{item.description}</p>
                <div className="explore-level-meta">
                  <span>{item.count}</span>
                  <Link to="/">›</Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="explore-activities">
        <div className="container">
          <div className="explore-activities-heading">
            <h2>Hoạt động bùng nổ hôm nay</h2>
          </div>

          <div className="explore-feature-grid">
            <article className="explore-feature-card">
              <div className="explore-feature-visual" aria-hidden="true">
                <div className="explore-feature-flap explore-feature-flap-left" />
                <div className="explore-feature-flap explore-feature-flap-right" />
                <div className="explore-feature-box" />
              </div>

              <div className="explore-feature-copy">
                <span className="explore-feature-tag">Thử thách mới mỗi ngày</span>
                <h3>Hộp quà bí ẩn: Mystery Box</h3>
                <p>
                  Giải 3 bài toán logic để mở khóa huy hiệu hiếm và điểm thưởng
                  XP. Bạn đã sẵn sàng?
                </p>
                <Link className="explore-feature-button" to="/">
                  Mở hộp ngay
                </Link>
              </div>
            </article>

            <article className="explore-speed-card">
              <div className="explore-speed-top">
                <span className="explore-speed-icon">◔</span>
                <span className="explore-speed-live">Live</span>
              </div>
              <h3>Speed Math</h3>
              <p>Thi đấu tính nhẩm trực tuyến cùng 1,000+ bạn khác.</p>
            </article>
          </div>

          <div className="explore-mini-grid">
            {exploreActivities.map((item) => (
              <article className="explore-mini-card" key={item.title}>
              <div className={`explore-mini-icon explore-mini-icon-${item.accent}`}>
                  <span>{item.symbol}</span>
                </div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <Link to="/">Chơi ngay</Link>
              </article>
            ))}
          </div>

          <section className="explore-cta-banner">
            <div className="explore-cta-art" aria-hidden="true">
              <div className="explore-cta-square" />
              <div className="explore-cta-plus">+</div>
            </div>
            <div className="explore-cta-copy">
              <h2>
                Bạn đã sẵn sàng trở thành
                <br />
                Cao thủ Toán học?
              </h2>
              <p>
                Gia nhập cộng đồng MathX ngay hôm nay để trải nghiệm phương pháp
                học tập tương tác hiện đại nhất.
              </p>
            </div>
            <div className="explore-cta-actions">
              <Link className="button explore-cta-primary" to="/">
                Bắt đầu ngay
              </Link>
              <Link className="button explore-cta-secondary" to="/">
                Tìm hiểu thêm
              </Link>
            </div>
          </section>
        </div>
      </section>
    </main>
  );
}

export default ExplorePage;
