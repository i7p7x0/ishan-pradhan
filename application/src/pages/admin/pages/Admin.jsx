import { React } from "react";
import { useSelector } from "react-redux";

import Loader from "../../../components/loader/Loader";

// CUSTOM COMPONENTS
import LoginFailed from "../components/LoginFailed";
import AdminContent from "./AdminContent";

const Admin = () => {
  const isLoggedIn = useSelector((state) => state.authentication);
  return (
    <div className="admin-container">
      {isLoggedIn.token === "" ? (
        <Loader />
      ) : isLoggedIn.token === "invalid" ? (
        <LoginFailed />
      ) : (
        <AdminContent />
      )}
    </div>
  );
};

export default Admin;
