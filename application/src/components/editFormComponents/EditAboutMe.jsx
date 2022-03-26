import { React, useEffect, useState } from "react";
import {
  Button,
  FloatingLabel,
  Form,
  FormControl,
  InputGroup,
} from "react-bootstrap";
// STYLE
import "./styles/edit-about-me.css";
// DATA
import parentSkills from "../../data/PARENTSKILLS";

const EditAboutMe = (props) => {
  const [loaded, setLoaded] = useState({ properties: false });
  const [bio, setBio] = useState("");
  const [properties, setProperties] = useState({
    age: "",
    residence: "",
    emailAddress: "",
    address: "",
    phoneNumber: "",
    experience: "",
  });
  const [skillSet, setSkillSet] = useState({
    id: "",
    skillParent: "",
    skillSet: "",
  });

  // get properties -> these values will be displayed in form placeholders.
  useEffect(() => {
    let mounted = true;
    const sendRequest = async () => {
      const response = await fetch("http://localhost:5000/about/properties");
      const responseData = await response.json();
      if (mounted) {
        setProperties({
          age: responseData[0].age,
          address: responseData[0].address,
          residence: responseData[0].residence,
          emailAddress: responseData[0].emailAddress,
          phoneNumber: responseData[0].phoneNumber,
          experience: responseData[0].experience,
        });
        setLoaded({ properties: true });
      }
    };
    sendRequest();
    return () => (mounted = false);
  }, []);

  // stores bio on text change
  const handleBioInput = (event) => {
    let inputBio = event.target.value;
    setBio(inputBio);
  };
  // stores properties on text change
  const handlePropertiesChange = (event) => {
    let changeType = event.target.id;
    let changeValue = event.target.value;
    switch (changeType) {
      case "age":
        setProperties((previousValue) => {
          return {
            age: changeValue,
            address: previousValue.address,
            residence: previousValue.residence,
            emailAddress: previousValue.emailAddress,
            phoneNumber: previousValue.phoneNumber,
            experience: previousValue.experience,
          };
        });
        break;
      case "residence":
        setProperties((previousValue) => {
          return {
            age: previousValue.age,
            address: previousValue.address,
            residence: changeValue,
            emailAddress: previousValue.emailAddress,
            phoneNumber: previousValue.phoneNumber,
            experience: previousValue.experience,
          };
        });
        break;
      case "emailAddress":
        setProperties((previousValue) => {
          return {
            age: previousValue.age,
            address: previousValue.address,
            residence: previousValue.residence,
            emailAddress: changeValue,
            phoneNumber: previousValue.phoneNumber,
            experience: previousValue.experience,
          };
        });
        break;
      case "address":
        setProperties((previousValue) => {
          return {
            age: previousValue.age,
            address: changeValue,
            residence: previousValue.residence,
            emailAddress: previousValue.emailAddress,
            phoneNumber: previousValue.phoneNumber,
            experience: previousValue.experience,
          };
        });
        break;
      case "phoneNumber":
        setProperties((previousValue) => {
          return {
            age: previousValue.age,
            address: previousValue.address,
            residence: previousValue.residence,
            emailAddress: previousValue.emailAddress,
            phoneNumber: changeValue,
            experience: previousValue.experience,
          };
        });
        break;
      case "experience":
        setProperties((previousValue) => {
          return {
            age: previousValue.age,
            address: previousValue.address,
            residence: previousValue.residence,
            emailAddress: previousValue.emailAddress,
            phoneNumber: previousValue.phoneNumber,
            experience: changeValue,
          };
        });
        break;
      default:
        break;
    }
  };
  // handle submit click
  const handleSubmitClick = async (event) => {
    let submitType = event.target.id;
    switch (submitType) {
      case "submitBio":
        const bioResponse = await fetch("http://localhost:5000/about/bio", {
          method: "PATCH",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            content: bio,
          }),
        });
        const bioResponseData = await bioResponse.json();
        if (bioResponseData.error) {
          alert(bioResponseData.errorMessage);
        } else if (!bioResponseData.error) {
          alert("Updated successfully");
        }
        break;
      case "submitProperties":
        const propertiesResponse = await fetch(
          "http://localhost:5000/about/properties",
          {
            method: "PATCH",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              age: properties.age,
              address: properties.address,
              residence: properties.residence,
              emailAddress: properties.emailAddress,
              phoneNumber: properties.phoneNumber,
              experience: properties.experience,
            }),
          }
        );
        const propertiesResponseData = await propertiesResponse.json();
        if (propertiesResponseData.error) {
          alert(propertiesResponseData.errorMessage);
        } else if (!propertiesResponseData.error) {
          alert("Updated successfully");
        }
        break;
      case "addSkillSet":
        const skillsResponse = await fetch(
          "http://localhost:5000/about/skills",
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              skillType: skillSet.skillParent,
              skillName: skillSet.skillChild,
            }),
          }
        );
        const skillsResponseData = await skillsResponse.json();
        if (skillsResponseData.error) {
          alert(skillsResponseData.errorMessage);
        } else if (!skillsResponseData.error) {
          alert("Updated successfully");
        }
        break;
    }
  };

  return (
    <div className="edit-about-me-container">
      {/* update bio in about me page*/}
      <div className="edit-about-me-child">
        {props.selected.child === "Bio" &&
        props.selected.changeType === "update" ? (
          <>
            <h2>Update bio</h2>
            <FloatingLabel
              controlId="floatingTextarea"
              label=""
              className="mb-3"
            >
              <Form.Control
                as="textarea"
                style={{ height: "200px" }}
                onChange={handleBioInput}
              />
            </FloatingLabel>{" "}
            <Button
              variant="success"
              id="submitBio"
              onClick={handleSubmitClick}
            >
              Done
            </Button>
          </>
        ) : null}
      </div>
      {/* update properties */}
      <div className="edit-about-me-child">
        {props.selected.child === "Properties" &&
        props.selected.changeType === "update" ? (
          <>
            {loaded.properties ? (
              <>
                <h2>Update properties</h2>
                <InputGroup className="mb-3">
                  <InputGroup.Text>Age</InputGroup.Text>
                  <FormControl
                    aria-label="Age"
                    id="age"
                    value={properties.age}
                    placeholder={properties.age}
                    onChange={handlePropertiesChange}
                  />
                </InputGroup>{" "}
                <InputGroup className="mb-3">
                  <InputGroup.Text>Residence</InputGroup.Text>
                  <FormControl
                    aria-label="Residence"
                    placeholder={properties.residence}
                    id="residence"
                    value={properties.residence}
                    onChange={handlePropertiesChange}
                  />
                </InputGroup>{" "}
                <InputGroup className="mb-3">
                  <InputGroup.Text>Email Address</InputGroup.Text>
                  <FormControl
                    aria-label="Email Address"
                    placeholder={properties.emailAddress}
                    id="emailAddress"
                    value={properties.emailAddress}
                    onChange={handlePropertiesChange}
                  />
                </InputGroup>{" "}
                <InputGroup className="mb-3">
                  <InputGroup.Text>Address</InputGroup.Text>
                  <FormControl
                    aria-label="Address"
                    placeholder={properties.address}
                    id="address"
                    value={properties.address}
                    onChange={handlePropertiesChange}
                  />
                </InputGroup>{" "}
                <InputGroup className="mb-3">
                  <InputGroup.Text>Phone Number</InputGroup.Text>
                  <FormControl
                    aria-label="Phone Number"
                    placeholder={properties.phoneNumber}
                    id="phoneNumber"
                    value={properties.phoneNumber}
                    onChange={handlePropertiesChange}
                  />
                </InputGroup>{" "}
                <InputGroup className="mb-3">
                  <InputGroup.Text>Experience</InputGroup.Text>
                  <FormControl
                    aria-label="Experience"
                    placeholder={properties.experience}
                    id="experience"
                    value={properties.experience}
                    onChange={handlePropertiesChange}
                  />
                </InputGroup>{" "}
                <Button
                  variant="success"
                  id="submitProperties"
                  onClick={handleSubmitClick}
                >
                  Done
                </Button>
              </>
            ) : null}
          </>
        ) : null}
      </div>
      {/* update What I do */}
      <div className="edit-about-me-child">
        {props.selected.child === "What I Do" &&
        props.selected.changeType === "update" ? (
          <>
            <h2>Update display Attributes</h2>{" "}
            <InputGroup className="mb-3">
              <InputGroup.Text>Databse Design</InputGroup.Text>
              <FormControl
                aria-label="Database Design"
                placeholder="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo, error."
              />
            </InputGroup>{" "}
            <InputGroup className="mb-3">
              <InputGroup.Text>ETL Development</InputGroup.Text>
              <FormControl
                aria-label="ETL Development"
                placeholder="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo, error."
              />
            </InputGroup>{" "}
            <InputGroup className="mb-3">
              <InputGroup.Text>Website</InputGroup.Text>
              <FormControl
                aria-label="Website"
                placeholder="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo, error."
              />
            </InputGroup>{" "}
            <InputGroup className="mb-3">
              <InputGroup.Text>Mobile Application</InputGroup.Text>
              <FormControl
                aria-label="Mobile Application"
                placeholder="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo, error."
              />
            </InputGroup>{" "}
            <InputGroup className="mb-3">
              <InputGroup.Text>Debug and Support</InputGroup.Text>
              <FormControl
                aria-label="Debug and Support"
                placeholder="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo, error."
              />
            </InputGroup>{" "}
            <InputGroup className="mb-3">
              <InputGroup.Text>Code</InputGroup.Text>
              <FormControl
                aria-label="Code"
                placeholder="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo, error."
              />
            </InputGroup>{" "}
            <Button variant="success">Done</Button>
          </>
        ) : null}
      </div>
      {/* add properties */}
      <div className="edit-about-me-child">
        {props.selected.child === "What I Do" &&
        props.selected.changeType === "add" ? (
          <>
            <h2>Add new display Attributes</h2>
            <InputGroup className="mb-3">
              <InputGroup.Text>Add new </InputGroup.Text>
              <FormControl aria-label="Add new " placeholder="" />
            </InputGroup>{" "}
            <Button variant="success">Done</Button>
          </>
        ) : null}
      </div>
      {/* delete properties */}
      <div className="edit-about-me-child">
        {props.selected.child === "What I Do" &&
        props.selected.changeType === "delete" ? (
          <>
            <h2>Delete existing display Attributes</h2>
            <Form.Select
              className="edit-about-me-select"
              aria-label="Default select example"
            >
              <option>--Select display attribute record to delete</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </Form.Select>{" "}
            <Button variant="success">Done</Button>
          </>
        ) : null}
      </div>
      {/* add skill set */}
      <div className="edit-about-me-child">
        {props.selected.child === "Skill Set" &&
        props.selected.changeType === "add" ? (
          <>
            <h2>Add Skill</h2>
            <Form.Select
              className="edit-about-me-select"
              aria-label="Default select example"
              onChange={(event) => {
                setSkillSet((previousValue) => {
                  return {
                    id: previousValue.id,
                    skillParent: event.target.value,
                    skillChild: previousValue.skillChild,
                  };
                });
              }}
            >
              <option>--Select skill type</option>
              {parentSkills.map((parentSkill) => {
                return (
                  <option key={parentSkill.id} value={parentSkill.name}>
                    {parentSkill.name}
                  </option>
                );
              })}
            </Form.Select>
            <InputGroup className="mb-3">
              <InputGroup.Text>Skill Name </InputGroup.Text>
              <FormControl
                value={skillSet.skillChild}
                aria-label="Skill Name "
                placeholder=""
                onChange={(event) => {
                  setSkillSet((previousValue) => {
                    return {
                      id: previousValue.id,
                      skillParent: previousValue.skillParent,
                      skillChild: event.target.value,
                    };
                  });
                }}
              />
            </InputGroup>{" "}
            <Button
              variant="success"
              id="addSkillSet"
              onClick={handleSubmitClick}
              // onClick={handleSubmitClick}
            >
              Done
            </Button>
          </>
        ) : null}
      </div>

      {/* delete skill set */}
      <div className="edit-about-me-child">
        {props.selected.child === "Skill Set" &&
        props.selected.changeType === "delete" ? (
          <>
            <h2>Delete Skill</h2>
            <Form.Select
              className="edit-about-me-select"
              aria-label="Default select example"
            >
              <option>--Select skill type</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </Form.Select>
            <InputGroup className="mb-3">
              <InputGroup.Text>Skill Name </InputGroup.Text>
              <FormControl aria-label="Skill Name " placeholder="" />
            </InputGroup>{" "}
            <Button variant="success" id="delete" onClick={handleSubmitClick}>
              Done
            </Button>
          </>
        ) : null}
      </div>
    </div>
  );
};

export default EditAboutMe;
