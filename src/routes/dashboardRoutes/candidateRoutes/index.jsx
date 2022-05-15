import React from "react";
import { Routes, Route } from "react-router-dom";
import { dashboards } from "containers";

const { Candidate } = dashboards;

const { CandidateDashboard, CandidateCompleteProfile } = Candidate;

export default function CandidateRoutes() {
  return (
    <div className="container">
      <Routes>
        <Route path="/" element={<CandidateDashboard />} />
        <Route path="verify" element={<CandidateCompleteProfile />} />
      </Routes>
    </div>
  );
}
