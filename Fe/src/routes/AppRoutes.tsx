import { lazy, Suspense } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import { PageTransition } from "../components/common/PageTransition";

const HomePage    = lazy(() => import("../pages/HomePage"));
const AboutPage   = lazy(() => import("../pages/AboutPage"));
const ExplorePage = lazy(() => import("../pages/ExplorePage"));
const NotFoundPage = lazy(() => import("../pages/NotFoundPage"));
const LoginPage = lazy(() => import("../pages/LoginPage"));
const SignUpPage = lazy(() => import("../pages/SignUpPage"));

function PageLoader() {
  return (
    <div className="page-loader" aria-label="Đang tải...">
      <div className="page-loader-spinner" />
    </div>
  );
}

function AppRoutes() {
  const location = useLocation();

  return (
    <Suspense fallback={<PageLoader />}>
      <Routes location={location}>
        {/* Pages with site Header + Footer */}
        <Route element={<MainLayout />}>
          <Route path="/"        element={<HomePage />} />
          <Route path="/about"   element={<AboutPage />} />
          <Route path="/explore" element={<ExplorePage />} />
          <Route path="*"        element={<NotFoundPage />} />
        </Route>

        {/* Auth pages — standalone, no site header/footer */}
        <Route path="/login"    element={<PageTransition><LoginPage /></PageTransition>} />
        <Route path="/register" element={<PageTransition><SignUpPage /></PageTransition>} />
      </Routes>
    </Suspense>
  );
}

export default AppRoutes;
