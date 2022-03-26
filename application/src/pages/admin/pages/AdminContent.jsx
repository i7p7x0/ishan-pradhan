import { React, useState } from "react";
import { Button } from "react-bootstrap";
// CUSTOM COMPONENTS
import Message from "../components/Message";
import EditSite from "../components/EditSite";
import LogoutButton from "../../../components/buttons/LogoutButton";
import { useSelector } from "react-redux";
// STYLE
import "../style/admin-content.css";

const AdminContent = () => {
  const token = useSelector((state) => state.authentication.token);
  // editMode states determines whether or not to render edit menu
  const [editMode, setEditMode] = useState(false);
  return (
    <>
      {token !== "" && token !== "invalid" && token !== null ? (
        <>
          {" "}
          <div className="admin-content-container">
            <div className="admin-container">
              <div className="admin-content-message">
                {editMode ? <EditSite /> : <Message />}
              </div>
            </div>

            <div className="admin-buttons">
              <div className="admin-button admin-edit-button">
                {!editMode ? (
                  <Button
                    variant="primary"
                    onClick={() => {
                      setEditMode(true);
                    }}
                  >
                    Edit Site
                  </Button>
                ) : (
                  <Button
                    variant="secondary"
                    onClick={() => {
                      setEditMode(false);
                    }}
                  >
                    Go back
                  </Button>
                )}
              </div>
              <div className="admin-button admin-logout-button">
                <LogoutButton />
              </div>
            </div>
          </div>
          <div className="negate">
            <h2>Admin Components are only available on mobile view</h2>
          </div>
        </>
      ) : null}
    </>
  );
};

export default AdminContent;
