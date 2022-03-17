import { React, useState } from "react";

// CUSTOM COMPONENTS
import AdminMode from "../components/AdminMode";
import AdminLogin from "../components/AdminLogin";
// STYLE
import "../style/admin.css";
const Admin = () => {
  const [isLoggedIn, setLoggedIn] = useState(false);

  const handleLoginState = () => {
    setLoggedIn(true);
  };

  return (
    <div className="admin-container">
      <div className="admin-container-child amdin-login-container">
        {!isLoggedIn ? (
          <AdminLogin handleLoginState={handleLoginState} />
        ) : null}
      </div>

      <div className="admin-container-child amdin-login-container">
        {isLoggedIn ? <AdminMode /> : null}
      </div>
    </div>
  );
};

export default Admin;
