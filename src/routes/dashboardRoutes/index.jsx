import React from "react";
import { Routes, Route } from "react-router-dom";
import AdminRoutes from "./adminRoutes";
import EmployerRoutes from "./employerRoutes";
import CandidateRoutes from "./candidateRoutes";
import AgentRoutes from "./agentRoutes";

export default function DashboardRoutes() {
  return (
    <Routes>
      <Route path="admin/*" element={<AdminRoutes />} />
      <Route path="employer/*" element={<EmployerRoutes />} />
      <Route path="candidate/*" element={<CandidateRoutes />} />
      <Route path="agent/*" element={<AgentRoutes />} />
    </Routes>
  );
}
