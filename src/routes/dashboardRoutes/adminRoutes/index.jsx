import "./admin.css";
import { Routes, Route } from "react-router-dom";
import { dashboards } from "containers";

const { Admin } = dashboards;

const {
  Home,
  Sidebar,
  EmployersList,
  CandidatesList,
  AgentsList,
  NewLocalCandidate,
} = Admin;

export default function AdminRoutes() {
  return (
    <div className="container">
      <Sidebar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="employers" element={<EmployersList />} />
        <Route path="candidates" element={<CandidatesList />}>
          {/* <Route path="local-maid" element={<LocalMaid />} /> */}
        </Route>
        <Route path="register" element={<NewLocalCandidate />} />
        <Route path="agents" element={<AgentsList />} />
      </Routes>
    </div>
  );
}
