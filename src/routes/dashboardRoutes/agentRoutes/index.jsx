import React from "react";
import { Routes, Route } from "react-router-dom";
import { dashboards, Feed } from "containers";

const { Agent } = dashboards;

const { Home, AgentCompleteProfile } = Agent;

export default function AgentRoutes() {
  return (
    <div className="">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="verify" element={<AgentCompleteProfile />} />
        <Route path="find-candidate" element={<Feed />} />
      </Routes>
    </div>
  );
}
