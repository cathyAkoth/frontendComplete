import { Routes, Route } from "react-router-dom";
import { NotFound } from "components";
import { LandingPage } from "containers";
import RegisterRoutes from "routes/registerRoutes";

export default function PublicRoutes() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="my-account/*" element={<RegisterRoutes />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
