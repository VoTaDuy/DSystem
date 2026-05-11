import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";

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
  return (
    <Suspense fallback={<PageLoader />}>
      <Routes>
        {/* Pages with site Header + Footer */}
        <Route element={<MainLayout />}>
          <Route path="/"        element={<HomePage />} />
          <Route path="/about"   element={<AboutPage />} />
          <Route path="/explore" element={<ExplorePage />} />
          <Route path="*"        element={<NotFoundPage />} />
        </Route>

        {/* Auth pages — standalone, no site header/footer */}
        <Route path="/login"    element={<LoginPage />} />
        <Route path="/register" element={<SignUpPage />} />
      </Routes>
    </Suspense>
  );
}

export default AppRoutes;
