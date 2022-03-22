import { React, useState } from "react";
import { Button } from "react-bootstrap";
// CUSTOM COMPONENTS
import EditOption from "../../../components/editFormComponents/EditOption";
import EditResume from "../../../components/editFormComponents/EditResume";
import EditContact from "../../../components/editFormComponents/EditContact";
import EditAboutMe from "../../../components/editFormComponents/EditAboutMe";
// DATA
import categories from "../../../data/meta/categories";

// STYLE

import "../style/edit-site.css";

const EditSite = () => {
  // this state determines whether or not an edit page is loade [happens after button press]
  const [editPageRendered, setEditPageRendered] = useState(false);
  // this state stores the values for what needs to be edited and how it needs to be edited
  const [selected, setSelected] = useState({
    parent: "",
    child: "",
    changeType: "",
  });

  const handleSelectEdit = (selectedOption, selectedIndicator) => {
    if (selectedIndicator === "parent") {
      setSelected((previousValue) => {
        return {
          parent: selectedOption,
          child: previousValue.child,
          changeType: previousValue.changeType,
        };
      });
    }
    if (selectedIndicator === "child") {
      setSelected((previousValue) => {
        return {
          parent: previousValue.parent,
          child: selectedOption,
          changeType: previousValue.changeType,
        };
      });
    }
    if (selectedIndicator === "action") {
      setSelected((previousValue) => {
        return {
          parent: previousValue.parent,
          child: previousValue.child,
          changeType: selectedOption,
        };
      });
    }
  };

  return (
    <div className="edit-site-container">
      <h2>Edit page content</h2>
      {!editPageRendered ? (
        <>
          {" "}
          <div className="edit-site-child">
            {/* select which page you want to edit */}
            <EditOption
              default="--Select page to edit--"
              categories={categories}
              categoryType={"parent"}
              handleSelectEdit={handleSelectEdit}
            />
          </div>
          <div className="edit-site-child">
            {/* select which component you want to edit */}
            {selected.parent.length > 0 ? (
              <EditOption
                default="--Select component to edit--"
                categories={categories
                  .filter((category) => category.category === selected.parent)
                  .map((selectedCategory) => {
                    return selectedCategory.subCategories;
                  })}
                categoryType={"child"}
                handleSelectEdit={handleSelectEdit}
              />
            ) : null}
          </div>
          <div className="edit-site-child">
            {/* select which action you want to perform on the component */}
            {selected.parent.length > 0 && selected.child.length > 0 ? (
              <EditOption
                childValue={selected.child}
                default="--Select action Type--"
                categories={categories
                  .filter((category) => category.category === selected.parent)
                  .map((selectedCategory) => {
                    return selectedCategory.subCategories;
                  })}
                categoryType={"action"}
                handleSelectEdit={handleSelectEdit}
              />
            ) : null}
          </div>
          <div className="edit-site-child">
            {selected.parent.length > 0 &&
            selected.child.length > 0 &&
            selected.changeType.length > 0 ? (
              <Button
                variant="success"
                onClick={() => {
                  setEditPageRendered(true);
                }}
              >
                Go
              </Button>
            ) : null}
          </div>
        </>
      ) : selected.parent === "About Me" ? (
        <>
          <EditAboutMe selected={selected} />
          <Button
            variant="danger"
            onClick={() => {
              setSelected({ parent: "", child: "", changeType: "" });
              setEditPageRendered(false);
            }}
          >
            Clear
          </Button>
        </>
      ) : selected.parent === "Resume" ? (
        <>
          <EditResume selected={selected} />
          <Button
            variant="danger"
            onClick={() => {
              setSelected({ parent: "", child: "", changeType: "" });
              setEditPageRendered(false);
            }}
          >
            Clear
          </Button>
        </>
      ) : selected.parent === "Contact" ? (
        <>
          <EditContact selected={selected} />
          <Button
            variant="danger"
            onClick={() => {
              setSelected({ parent: "", child: "", changeType: "" });
              setEditPageRendered(false);
            }}
          >
            Clear
          </Button>
        </>
      ) : null}
    </div>
  );
};

export default EditSite;
