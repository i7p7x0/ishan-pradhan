import { React } from "react";
import {Button, Form, InputGroup, FormControl } from "react-bootstrap";
// STYLE
import "./styles/edit-resume.css";

const EditResume = (props) => {
  return (
    <div className="edit-resume-container">
      {/* edit education */}
      <div className="edit-resume-child">
        {props.selected.child === "Education" &&
        props.selected.changeType === "update" ? (
          <>
            {" "}
            <h2>Edit your Education details</h2>
            {/* update current education */}
            <Form.Select className="edit-resume-select"aria-label="Default select example">
              <option>--Select Education record to update</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </Form.Select>{" "}
            <InputGroup className="mb-3">
              <InputGroup.Text>Degree Name</InputGroup.Text>
              <FormControl
                aria-label="Degree Name"
                placeholder="Bachelor in computer applications"
              />
            </InputGroup>{" "}
            <InputGroup className="mb-3">
              <InputGroup.Text>University</InputGroup.Text>
              <FormControl
                aria-label="University"
                placeholder="Chitkara University"
              />
            </InputGroup>{" "}
            <InputGroup className="mb-3">
              <InputGroup.Text>Start Date</InputGroup.Text>
              <FormControl aria-label="Start Date" placeholder="2015" />
            </InputGroup>{" "}
            <InputGroup className="mb-3">
              <InputGroup.Text>End Date</InputGroup.Text>
              <FormControl aria-label="End Date" placeholder="2018" />
            </InputGroup>{" "}
            <InputGroup className="mb-3">
              <InputGroup.Text>About</InputGroup.Text>
              <FormControl
                aria-label="About"
                placeholder="Programming | Web development | Data Warehousing | Digital Marketing | Networking | Hardware | Security"
              />
            </InputGroup><Button variant="success">Done</Button>
          </>
        ) : null}
      </div>
      {/* Add new education */}
      <div className="edit-resume-child">
        {props.selected.child === "Education" &&
        props.selected.changeType === "add" ? (
          <>
            {" "}
            <h2>Add new Education detail</h2>
            <InputGroup className="mb-3">
              <InputGroup.Text>Degree Name</InputGroup.Text>
              <FormControl aria-label="Degree Name" />
            </InputGroup>{" "}
            <InputGroup className="mb-3">
              <InputGroup.Text>University</InputGroup.Text>
              <FormControl aria-label="University" />
            </InputGroup>{" "}
            <InputGroup className="mb-3">
              <InputGroup.Text>Start Date</InputGroup.Text>
              <FormControl aria-label="Start Date" />
            </InputGroup>{" "}
            <InputGroup className="mb-3">
              <InputGroup.Text>End Date</InputGroup.Text>
              <FormControl aria-label="End Date" />
            </InputGroup>{" "}
            <InputGroup className="mb-3">
              <InputGroup.Text>About</InputGroup.Text>
              <FormControl aria-label="About" />
            </InputGroup><Button variant="success">Done</Button>
          </>
        ) : null}
      </div>{" "}
      {/* Delete existing education */}
      <div className="edit-resume-child">
        {props.selected.child === "Education" &&
        props.selected.changeType === "delete" ? (
          <>
            {" "}
            <h2>Delete existing education record</h2>
            <Form.Select className="edit-resume-select"aria-label="Default select example">
              <option>--Select Education record to delete</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </Form.Select><Button variant="success">Done</Button>
          </>
        ) : null}
      </div>
      {/* Add new experience */}
      <div className="edit-resume-child">
        {props.selected.child === "Experience" &&
        props.selected.changeType === "add" ? (
          <>
            {" "}
            <h2>Add new Experience</h2>
            <InputGroup className="mb-3">
              <InputGroup.Text>Title</InputGroup.Text>
              <FormControl aria-label="Title" />
            </InputGroup>{" "}
            <InputGroup className="mb-3">
              <InputGroup.Text>Employer</InputGroup.Text>
              <FormControl aria-label="Employer" />
            </InputGroup>{" "}
            <InputGroup className="mb-3">
              <InputGroup.Text>Domain</InputGroup.Text>
              <FormControl aria-label="Domain" />
            </InputGroup>{" "}
            <InputGroup className="mb-3">
              <InputGroup.Text>Employer Location</InputGroup.Text>
              <FormControl aria-label="Degree Name" />
            </InputGroup>{" "}
            <InputGroup className="mb-3">
              <InputGroup.Text>Start Date</InputGroup.Text>
              <FormControl aria-label="Degree Name" />
            </InputGroup>{" "}
            <InputGroup className="mb-3">
              <InputGroup.Text>End Date</InputGroup.Text>
              <FormControl aria-label="Degree Name" />
            </InputGroup>{" "}
            <InputGroup className="mb-3">
              <InputGroup.Text>Point</InputGroup.Text>
              <FormControl aria-label="Degree Name" />
            </InputGroup>{" "}<Button variant="success">Done</Button>
          </>
        ) : null}
      </div>
      {/* Delete an experience */}
      <div className="edit-resume-child">
        {props.selected.child === "Experience" &&
        props.selected.changeType === "delete" ? (
          <>
            {" "}
            <h2>Delete existing experience record</h2>
            <Form.Select className="edit-resume-select"aria-label="Default select example">
              <option>--Select Experience record to delete</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </Form.Select>
          </>
        ) : null}
      </div>
      {/* Update existing experience */}
      <div className="edit-resume-child">
        {" "}
        {props.selected.child === "Experience" &&
        props.selected.changeType === "update" ? (
          <>
            {" "}
            <h2>Update existing experience record</h2>
            <Form.Select className="edit-resume-select"aria-label="Default select example">
              <option>--Select Experience record to update</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </Form.Select>{" "}
            <InputGroup className="mb-3">
              <InputGroup.Text>Title</InputGroup.Text>
              <FormControl aria-label="Title" />
            </InputGroup>{" "}
            <InputGroup className="mb-3">
              <InputGroup.Text>Employer</InputGroup.Text>
              <FormControl aria-label="Employer" />
            </InputGroup>{" "}
            <InputGroup className="mb-3">
              <InputGroup.Text>Domain</InputGroup.Text>
              <FormControl aria-label="Domain" />
            </InputGroup>{" "}
            <InputGroup className="mb-3">
              <InputGroup.Text>Employer Location</InputGroup.Text>
              <FormControl aria-label="Degree Name" />
            </InputGroup>{" "}
            <InputGroup className="mb-3">
              <InputGroup.Text>Start Date</InputGroup.Text>
              <FormControl aria-label="Degree Name" />
            </InputGroup>{" "}
            <InputGroup className="mb-3">
              <InputGroup.Text>End Date</InputGroup.Text>
              <FormControl aria-label="Degree Name" />
            </InputGroup>{" "}
            <InputGroup className="mb-3">
              <InputGroup.Text>Point</InputGroup.Text>
              <FormControl aria-label="Degree Name" />
            </InputGroup>{" "}
          </>
        ) : null}
      </div>
      {/* Update top skills */}{" "}
      <div className="edit-resume-child">
        {props.selected.child === "Top Skills" &&
        props.selected.changeType === "update" ? (
          <>
            {" "}
            <h2>Change your top skills</h2>
            <InputGroup className="mb-3">
              <InputGroup.Text>Skill 1</InputGroup.Text>
              <FormControl aria-label="Skill 1" placeholder="skill 1" />
              <FormControl
                aria-label="Skill 1 Point"
                placeholder="about skill 1"
              />
            </InputGroup>{" "}
            <InputGroup className="mb-3">
              <InputGroup.Text>Skill 1</InputGroup.Text>
              <FormControl aria-label="Skill 2" placeholder="skill 2" />
              <FormControl
                aria-label="Skill 2 Point"
                placeholder="about skill 2"
              />
            </InputGroup>{" "}
            <InputGroup className="mb-3">
              <InputGroup.Text>Skill 1</InputGroup.Text>
              <FormControl aria-label="Skill 3" placeholder="skill 3" />
              <FormControl
                aria-label="Skill 3 Point"
                placeholder="about skill 3"
              />
            </InputGroup>{" "}
          </>
        ) : null}
      </div>
    </div>
  );
};

export default EditResume;
