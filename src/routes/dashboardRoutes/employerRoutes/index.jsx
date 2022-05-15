import React from "react";
import { Routes, Route } from "react-router-dom";
import { dashboards, Feed } from "containers";

const { Employer } = dashboards;

const { Home, Pricing, EmployerCompleteProfile } = Employer;

export default function EmployerRoutes() {
  return (
    <div className="">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="verify" element={<EmployerCompleteProfile />} />
        <Route path="find-candidate" element={<Feed />} />
        <Route path="pricing" element={<Pricing />} />
      </Routes>
    </div>
  );
}
