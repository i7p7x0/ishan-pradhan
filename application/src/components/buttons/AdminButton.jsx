import { React } from "react";
import { MdAdminPanelSettings } from "react-icons/md";
import { Link } from "react-router-dom";
// STYLE

import "./style/admin-button.css";

const AdminButton = () => {
  return (
    <Link to="/login" className="admin-button-link">
      <div className="admin-button">
        <MdAdminPanelSettings className="admin-button-icon" size={32} />
        View as Admin
      </div>
    </Link>
  );
};

export default AdminButton;
