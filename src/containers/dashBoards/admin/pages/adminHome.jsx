import Sidebar from "../components/sidebar";
import "./adminHome.css";
import Home from "./home";
// import Home from "./pages/home/Home";
import { Routes, Route } from "react-router-dom";
// import UserList from "./pages/userList/UserList";
// import User from "./pages/user/User";
// import NewUser from "./pages/newUser/NewUser";

function AdminHome() {
  return (
    <div className="container">
      <Sidebar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default AdminHome;
