import PublicRoutes from "./publicRoutes";
import DashboardRoutes from "./dashboardRoutes";
import { Routes, Route } from "react-router-dom";
import { Footer, Navbar } from "../components";

export default function Index() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="*" element={<PublicRoutes />} />
        <Route path="dashboard/*" element={<DashboardRoutes />} />
        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>
      <Footer />
    </>
  );
}
