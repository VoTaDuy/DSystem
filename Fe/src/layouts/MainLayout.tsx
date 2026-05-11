import { Outlet } from "react-router-dom";
import Footer from "../components/common/Footer";
import Header from "../components/common/Header";
import { PageTransition } from "../components/common/PageTransition";

function MainLayout() {
  return (
    <div className="app-shell">
      <Header />
      <PageTransition>
        <Outlet />
      </PageTransition>
      <Footer />
    </div>
  );
}

export default MainLayout;
