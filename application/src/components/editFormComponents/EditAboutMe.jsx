import { React } from "react";
import {
  Button,
  FloatingLabel,
  Form,
  FormControl,
  InputGroup,
} from "react-bootstrap";
// STYLE
import "./styles/edit-about-me.css";

const EditAboutMe = (props) => {
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
              label="My name is ishan pradhan"
              className="mb-3"
            >
              <Form.Control
                as="textarea"
                placeholder="Leave a comment here"
                style={{ height: "200px" }}
              />
            </FloatingLabel>{" "}
            <Button variant="success">Done</Button>
          </>
        ) : null}
      </div>
      {/* update properties */}
      <div className="edit-about-me-child">
        {props.selected.child === "Properties" &&
        props.selected.changeType === "update" ? (
          <>
            <h2>Update properties</h2>
            <InputGroup className="mb-3">
              <InputGroup.Text>Age</InputGroup.Text>
              <FormControl aria-label="Age" placeholder="24" />
            </InputGroup>{" "}
            <InputGroup className="mb-3">
              <InputGroup.Text>Residednce</InputGroup.Text>
              <FormControl aria-label="Residednce" placeholder="Nepal" />
            </InputGroup>{" "}
            <InputGroup className="mb-3">
              <InputGroup.Text>Email Address</InputGroup.Text>
              <FormControl
                aria-label="Email Address"
                placeholder="i7p7x0@gmail.com"
              />
            </InputGroup>{" "}
            <InputGroup className="mb-3">
              <InputGroup.Text>Address</InputGroup.Text>
              <FormControl
                aria-label="Address"
                placeholder="Karyabinayak, Lalitpur"
              />
            </InputGroup>{" "}
            <InputGroup className="mb-3">
              <InputGroup.Text>Phone Number</InputGroup.Text>
              <FormControl
                aria-label="Phone Number"
                placeholder=" +9779863213405"
              />
            </InputGroup>{" "}
            <InputGroup className="mb-3">
              <InputGroup.Text>Age</InputGroup.Text>
              <FormControl
                aria-label="Age"
                placeholder="3 + Years | 18, Sept - Now"
              />
            </InputGroup>{" "}
            <Button variant="success">Done</Button>
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
            <Form.Select className="edit-about-me-select"aria-label="Default select example">
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
            <Form.Select className="edit-about-me-select"aria-label="Default select example">
              <option>--Select skill type</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </Form.Select>
            <InputGroup className="mb-3">
              <InputGroup.Text>Skill Name </InputGroup.Text>
              <FormControl aria-label="Skill Name " placeholder="" />
            </InputGroup>{" "}
            <Button variant="success">Done</Button>
          </>
        ) : null}
      </div>

      {/* delete skill set */}
      <div className="edit-about-me-child">
        {props.selected.child === "Skill Set" &&
        props.selected.changeType === "delete" ? (
          <>
            <h2>Delete Skill</h2>
            <Form.Select className="edit-about-me-select"aria-label="Default select example">
              <option>--Select skill type</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </Form.Select>
            <InputGroup className="mb-3">
              <InputGroup.Text>Skill Name </InputGroup.Text>
              <FormControl aria-label="Skill Name " placeholder="" />
            </InputGroup>{" "}
            <Button variant="success">Done</Button>
          </>
        ) : null}
      </div>
    </div>
  );
};

export default EditAboutMe;
