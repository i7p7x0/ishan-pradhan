import { React, useState, useEffect } from "react";
import { Button, Form, InputGroup, FormControl } from "react-bootstrap";
import { useSelector } from "react-redux";
// STYLE
import "./styles/edit-resume.css";

const EditResume = (props) => {
  const token = useSelector((state) => state.authentication.token);
  const [educationCycle, setEducationCycle] = useState(1);
  const [experienceCycle, setExperienceCycle] = useState(1);
  const [isLoaded, setLoaded] = useState({
    education: false,
    experience: false,
  });

  const [point, setPoint] = useState("");
  const [points, setPoints] = useState([{}]);

  const [toBeDeleted, setToBeDeleted] = useState("");
  const [experienceToBeDeleted, setExperienceToBeDeleted] = useState("");
  const [experienceToBeUpdated, setExperienceToBeUpdated] = useState("");

  const [newEducation, setNewEducation] = useState({
    degreeName: "",
    university: "",
    startDate: "",
    endDate: "",
    about: "",
  });

  const [newExperience, setNewExperience] = useState({
    title: "",
    employer: "",
    domain: "",
    from: "",
    to: "",
    employerAddress: "",
    experiencePoints: [],
  });

  const [education, setEducation] = useState([]);
  const [experience, setExperience] = useState([]);
  const [endDate, setEndDate] = useState("");
  useEffect(() => {
    let mounted = true;
    const sendRequest = async () => {
      const response = await fetch("http://localhost:5000/education");
      const responseData = await response.json();
      if (mounted) {
        setEducation(responseData);
        setLoaded((previousValue) => {
          return { education: true, experience: previousValue.experience };
        });
      }
    };
    sendRequest();
    return () => (mounted = false);
  }, [[], educationCycle]);

  useEffect(() => {
    let mounted = true;
    const sendRequest = async () => {
      const response = await fetch("http://localhost:5000/experience");
      const responseData = await response.json();
      if (mounted) {
        setExperience(responseData);
        setLoaded((previousValue) => {
          return { education: previousValue.education, experience: true };
        });
      }
    };
    sendRequest();
    return () => (mounted = false);
  }, [[], experienceCycle]);

  const handleSubmitButtonClick = async (event) => {
    let selected = event.target.id;
    switch (selected) {
      case "addNewExperience":
        const addEducationResponse = await fetch(
          "http://localhost:5000/education",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              authorization: token,
            },
            body: JSON.stringify({
              degreeName: newEducation.degreeName,
              university: newEducation.university,
              startDate: newEducation.startDate,
              endDate: newEducation.endDate,
              about: newEducation.about,
            }),
          }
        );

        const addEducationResponseData = await addEducationResponse.json();
        if (addEducationResponseData.error) {
          alert(addEducationResponseData.errorMessage);
        } else if (!addEducationResponseData.error) {
          alert("Updated successfully");
        }
        setExperienceCycle(experienceCycle + 1);
        break;
      case "deleteEducation":
        const deleteEducationResponse = await fetch(
          "http://localhost:5000/education",
          {
            method: "DELETE",
            headers: {
              "Content-Type": "application/json",
              authorization: token,
            },
            body: JSON.stringify({
              id: toBeDeleted,
            }),
          }
        );

        const deleteEducationResponseData =
          await deleteEducationResponse.json();
        if (deleteEducationResponseData.error) {
          alert(deleteEducationResponseData.errorMessage);
        } else if (!deleteEducationResponseData.error) {
          alert("Updated successfully");
        }
        setEducationCycle(educationCycle + 1);
        break;
      case "addExperience":
        const addExperienceResponse = await fetch(
          "http://localhost:5000/experience",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              authorization: token,
            },
            body: JSON.stringify({
              title: newExperience.title,
              employer: newExperience.employer,
              domain: newExperience.domain,
              from: newExperience.from,
              to: newExperience.to,
              employerAddress: newExperience.employerAddress,
              experiencePoints: newExperience.experiencePoints,
            }),
          }
        );
        const addExperienceResponseData = await addExperienceResponse.json();
        if (addExperienceResponseData.error) {
          alert(addExperienceResponseData.errorMessage);
        } else if (!addExperienceResponseData.error) {
          alert("Updated successfully");
        }
        setExperienceCycle(experienceCycle + 1);

        break;
      case "deleteExperience":
        const deleteExperienceResponse = await fetch(
          "http://localhost:5000/experience",
          {
            method: "DELETE",
            headers: {
              "Content-Type": "application/json",
              authorization: token,
            },
            body: JSON.stringify({
              id: experienceToBeDeleted,
            }),
          }
        );

        const deleteExperiencecResponseData =
          await deleteExperienceResponse.json();
        if (deleteExperiencecResponseData.error) {
          alert(deleteExperiencecResponseData.errorMessage);
        } else if (!deleteExperiencecResponseData.error) {
          alert("Updated successfully");
        }
        setExperienceCycle(experienceCycle + 1);
        break;
      case "updateExperience":
        const updateExperienceResponse = await fetch(
          "http://localhost:5000/experience",
          {
            method: "PATCH",
            headers: {
              "Content-Type": "application/json",
              authorization: token,
            },
            body: JSON.stringify({
              id: experienceToBeUpdated,
              to: endDate,
            }),
          }
        );

        const updateExperiencecResponseData =
          await updateExperienceResponse.json();
        if (updateExperiencecResponseData.error) {
          alert(updateExperiencecResponseData.errorMessage);
        } else if (!updateExperiencecResponseData.error) {
          alert("Updated successfully");
        }
        setExperienceCycle(experienceCycle + 1);
        break;
      default:
        break;
    }
  };

  return (
    <div className="edit-resume-container">
      {/* Add new education */}
      <div className="edit-resume-child">
        {props.selected.child === "Education" &&
        props.selected.changeType === "add" ? (
          <>
            {" "}
            <h2>Add new Education detail</h2>
            <InputGroup className="mb-3">
              <InputGroup.Text>Degree Name</InputGroup.Text>
              <FormControl
                aria-label="Degree Name"
                value={newEducation.degreeName}
                onChange={(event) => {
                  setNewEducation((previousValue) => {
                    return {
                      degreeName: event.target.value,
                      university: previousValue.university,
                      startDate: previousValue.startDate,
                      endDate: previousValue.endDate,
                      about: previousValue.about,
                    };
                  });
                }}
              />
            </InputGroup>{" "}
            <InputGroup className="mb-3">
              <InputGroup.Text>University</InputGroup.Text>
              <FormControl
                aria-label="University"
                value={newEducation.university}
                onChange={(event) => {
                  setNewEducation((previousValue) => {
                    return {
                      degreeName: previousValue.degreeName,
                      university: event.target.value,
                      startDate: previousValue.startDate,
                      endDate: previousValue.endDate,
                      about: previousValue.about,
                    };
                  });
                }}
              />
            </InputGroup>{" "}
            <InputGroup className="mb-3">
              <InputGroup.Text>Start Date</InputGroup.Text>
              <FormControl
                aria-label="Start Date"
                value={newEducation.startDate}
                onChange={(event) => {
                  setNewEducation((previousValue) => {
                    return {
                      degreeName: previousValue.degreeName,
                      university: previousValue.university,
                      startDate: event.target.value,
                      endDate: previousValue.endDate,
                      about: previousValue.about,
                    };
                  });
                }}
              />
            </InputGroup>{" "}
            <InputGroup className="mb-3">
              <InputGroup.Text>End Date</InputGroup.Text>
              <FormControl
                aria-label="End Date"
                value={newEducation.endDate}
                onChange={(event) => {
                  setNewEducation((previousValue) => {
                    return {
                      degreeName: previousValue.degreeName,
                      university: previousValue.university,
                      startDate: previousValue.startDate,
                      endDate: event.target.value,
                      about: previousValue.about,
                    };
                  });
                }}
              />
            </InputGroup>{" "}
            <InputGroup className="mb-3">
              <InputGroup.Text>About</InputGroup.Text>
              <FormControl
                aria-label="About"
                value={newEducation.about}
                onChange={(event) => {
                  setNewEducation((previousValue) => {
                    return {
                      degreeName: previousValue.degreeName,
                      university: previousValue.university,
                      startDate: previousValue.startDate,
                      endDate: previousValue.endDate,
                      about: event.target.value,
                    };
                  });
                }}
              />
            </InputGroup>
            <Button
              variant="success"
              id="addNewExperience"
              onClick={handleSubmitButtonClick}
            >
              Done
            </Button>
          </>
        ) : null}
      </div>{" "}
      {/* Delete existing education */}
      <div className="edit-resume-child">
        {isLoaded.education ? (
          <>
            {props.selected.child === "Education" &&
            props.selected.changeType === "delete" ? (
              <>
                {" "}
                <h2>Delete existing education record</h2>
                <Form.Select
                  className="edit-resume-select"
                  aria-label="Default select example"
                  onChange={(event) => {
                    setToBeDeleted(event.target.value);
                  }}
                >
                  <option disabled>--Select Education record to delete</option>
                  {education.map((e) => {
                    return (
                      <option key={e._id} value={e._id}>
                        {e.degreeName}
                      </option>
                    );
                  })}
                </Form.Select>
                <Button
                  variant="success"
                  id="deleteEducation"
                  onClick={handleSubmitButtonClick}
                >
                  Done
                </Button>
              </>
            ) : null}
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
              <FormControl
                aria-label="Title"
                value={newExperience.title}
                onChange={(event) => {
                  setNewExperience((previousValue) => {
                    return {
                      title: event.target.value,
                      employer: previousValue.employer,
                      domain: previousValue.domain,
                      from: previousValue.from,
                      to: previousValue.to,
                      employerAddress: previousValue.employerAddress,
                      experiencePoints: previousValue.experiencePoints,
                    };
                  });
                }}
              />
            </InputGroup>{" "}
            <InputGroup className="mb-3">
              <InputGroup.Text>Employer</InputGroup.Text>
              <FormControl
                aria-label="Employer"
                value={newExperience.employer}
                onChange={(event) => {
                  setNewExperience((previousValue) => {
                    return {
                      title: previousValue.title,
                      employer: event.target.value,
                      domain: previousValue.domain,
                      from: previousValue.from,
                      to: previousValue.to,
                      employerAddress: previousValue.employerAddress,
                      experiencePoints: previousValue.experiencePoints,
                    };
                  });
                }}
              />
            </InputGroup>{" "}
            <InputGroup className="mb-3">
              <InputGroup.Text>Domain</InputGroup.Text>
              <FormControl
                aria-label="Domain"
                value={newExperience.domain}
                onChange={(event) => {
                  setNewExperience((previousValue) => {
                    return {
                      title: previousValue.title,
                      employer: previousValue.employer,
                      domain: event.target.value,
                      from: previousValue.from,
                      to: previousValue.to,
                      employerAddress: previousValue.employerAddress,
                      experiencePoints: previousValue.experiencePoints,
                    };
                  });
                }}
              />
            </InputGroup>{" "}
            <InputGroup className="mb-3">
              <InputGroup.Text>Employer Location</InputGroup.Text>
              <FormControl
                aria-label="Employer Location"
                value={newExperience.employerAddress}
                onChange={(event) => {
                  setNewExperience((previousValue) => {
                    return {
                      title: previousValue.title,
                      employer: previousValue.employer,
                      domain: previousValue.domain,
                      from: previousValue.from,
                      to: previousValue.to,
                      employerAddress: event.target.value,
                      experiencePoints: previousValue.experiencePoints,
                    };
                  });
                }}
              />
            </InputGroup>{" "}
            <InputGroup className="mb-3">
              <InputGroup.Text>Start Date</InputGroup.Text>
              <FormControl
                aria-label="Start Date"
                value={newExperience.from}
                onChange={(event) => {
                  setNewExperience((previousValue) => {
                    return {
                      title: previousValue.title,
                      employer: previousValue.employer,
                      domain: previousValue.domain,
                      from: event.target.value,
                      to: previousValue.to,
                      employerAddress: previousValue.employerAddress,
                      experiencePoints: previousValue.experiencePoints,
                    };
                  });
                }}
              />
            </InputGroup>{" "}
            <InputGroup className="mb-3">
              <InputGroup.Text>End Date</InputGroup.Text>
              <FormControl
                aria-label="End Date"
                value={newExperience.to}
                onChange={(event) => {
                  setNewExperience((previousValue) => {
                    return {
                      title: previousValue.title,
                      employer: previousValue.employer,
                      domain: previousValue.domain,
                      from: previousValue.from,
                      to: event.target.value,
                      employerAddress: previousValue.employerAddress,
                      experiencePoints: previousValue.experiencePoints,
                    };
                  });
                }}
              />
            </InputGroup>{" "}
            <InputGroup className="mb-3">
              <InputGroup.Text>Point</InputGroup.Text>
              <FormControl
                aria-label="Point"
                value={point}
                onChange={(event) => {
                  setPoint(event.target.value);
                }}
              />
              <Button
                variant="success"
                onClick={() => {
                  setPoints([...points, { point: point }]);
                  setNewExperience((previousValue) => {
                    return {
                      title: previousValue.title,
                      employer: previousValue.employer,
                      domain: previousValue.domain,
                      from: previousValue.from,
                      to: previousValue.to,
                      employerAddress: previousValue.employerAddress,
                      experiencePoints: points,
                    };
                  });
                  setPoint("");
                }}
              >
                +
              </Button>
            </InputGroup>{" "}
            <Button
              id="addExperience"
              variant="success"
              onClick={handleSubmitButtonClick}
            >
              Done
            </Button>
          </>
        ) : null}
      </div>
      {/* Delete an experience */}
      <div className="edit-resume-child">
        {isLoaded.experience ? (
          <>
            {props.selected.child === "Experience" &&
            props.selected.changeType === "delete" ? (
              <>
                {" "}
                <h2>Delete existing experience record</h2>
                <Form.Select
                  defaultValue={"DEFAULT"}
                  className="edit-resume-select"
                  aria-label="Default select example"
                  onChange={(event) => {
                    setExperienceToBeDeleted(event.target.value);
                  }}
                >
                  <option disabled value="DEFAULT">
                    --Select Experience record to delete
                  </option>
                  {experience.map((e) => {
                    return (
                      <option key={e._id} value={e._id}>
                        {e.title}
                      </option>
                    );
                  })}
                </Form.Select>
                <Button
                  id="deleteExperience"
                  variant="success"
                  onClick={handleSubmitButtonClick}
                >
                  Done
                </Button>
              </>
            ) : null}
          </>
        ) : null}
      </div>
      {/* Update existing experience */}
      <div className="edit-resume-child">
        {isLoaded.experience ? (
          <>
            {" "}
            {props.selected.child === "Experience" &&
            props.selected.changeType === "update" ? (
              <>
                {" "}
                <h2>Update existing experience record</h2>
                <Form.Select
                  defaultValue={"DEFAULT"}
                  className="edit-resume-select"
                  aria-label="Default select example"
                  onChange={(event) => {
                    setExperienceToBeUpdated(event.target.value);
                  }}
                >
                  <option disabled value="DEFAULT">
                    --Select Experience record to update
                  </option>
                  {experience.map((e) => {
                    return (
                      <option key={e._id} value={e._id}>
                        {e.title} - {e.employer}
                      </option>
                    );
                  })}
                </Form.Select>{" "}
                <InputGroup className="mb-3">
                  <InputGroup.Text>Title</InputGroup.Text>

                  <FormControl
                    disabled
                    aria-label="Title"
                    value={experience
                      .filter((e) => e._id === experienceToBeUpdated)
                      .map((exp) => {
                        return exp.title;
                      })}
                  />
                </InputGroup>{" "}
                <InputGroup className="mb-3">
                  <InputGroup.Text>Employer</InputGroup.Text>
                  <FormControl
                    disabled
                    aria-label="Employer"
                    value={experience
                      .filter((e) => e._id === experienceToBeUpdated)
                      .map((exp) => {
                        return exp.employer;
                      })}
                  />
                </InputGroup>{" "}
                <InputGroup className="mb-3">
                  <InputGroup.Text>Domain</InputGroup.Text>
                  <FormControl
                    disabled
                    aria-label="Domain"
                    value={experience
                      .filter((e) => e._id === experienceToBeUpdated)
                      .map((exp) => {
                        return exp.domain;
                      })}
                  />
                </InputGroup>{" "}
                <InputGroup className="mb-3">
                  <InputGroup.Text>Employer Location</InputGroup.Text>
                  <FormControl
                    disabled
                    aria-label="Employer Location"
                    value={experience
                      .filter((e) => e._id === experienceToBeUpdated)
                      .map((exp) => {
                        return exp.employerAddress;
                      })}
                  />
                </InputGroup>{" "}
                <InputGroup className="mb-3">
                  <InputGroup.Text>Start Date</InputGroup.Text>
                  <FormControl
                    disabled
                    aria-label="Start Date"
                    value={experience
                      .filter((e) => e._id === experienceToBeUpdated)
                      .map((exp) => {
                        return exp.from;
                      })}
                  />
                </InputGroup>{" "}
                <InputGroup className="mb-3">
                  <InputGroup.Text>End Date</InputGroup.Text>
                  <FormControl
                    aria-label="End Date"
                    value={endDate}
                    onChange={(event) => {
                      setEndDate(event.target.value);
                    }}
                  />
                </InputGroup>{" "}
                <Button id="updateExperience" onClick={handleSubmitButtonClick}>
                  Done
                </Button>
              </>
            ) : null}
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
