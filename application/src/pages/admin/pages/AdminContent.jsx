import { React } from "react";
import { Button } from "react-bootstrap";
// CUSTOM COMPONENTS
import Message from "../components/Message";
import EditSite from "../components/EditSite";
import LogoutButton from "../../../components/buttons/LogoutButton";

// STYLE
import "../style/admin-content.css";

const AdminContent = () => {
  return (
    <div className="admin-content-container">
      <div className="admin-container">
        <div className="admin-content-message">
          <Message />
        </div>
      </div>

      <div className="admin-buttons">
        <div className="admin-button admin-edit-button">
          <Button variant="primary">Edit Site</Button>
        </div>
        <div className="admin-button admin-logout-button">
          <LogoutButton />
        </div>
      </div>
    </div>
  );
};

export default AdminContent;
