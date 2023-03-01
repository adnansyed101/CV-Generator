import React from "react";
import AddEducation from "./AddEducation";
import AddWork from "./AddWork";

const MainCvForm = (props) => {
  function handleAddEducation(newEducation) {
    props.setEducation([...props.education, newEducation]);
  }

  function handleAddWork(newWork) {
    props.setWorkExperience([...props.workExperience, newWork]);
  }

  function handlePersonalInfoChange(event) {
    const { name, value } = event.target;
    props.setPersonalInfo((prevInfo) => {
      return {
        ...prevInfo,
        [name]: value,
      };
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="container mx-auto my-10 w-1/2 border-2 p-10 shadow"
    >
      <fieldset>
        <legend>Personal Info</legend>
        <input
          type="text"
          placeholder="Name"
          onChange={handlePersonalInfoChange}
          name="name"
          value={props.personalInfo.name}
        />
        <input
          type="text"
          placeholder="Email"
          onChange={handlePersonalInfoChange}
          name="email"
          value={props.personalInfo.email}
        />
        <input
          type="text"
          placeholder="Phone"
          onChange={handlePersonalInfoChange}
          name="name"
          value={props.personalInfo.phone}
        />
        <input
          type="text"
          placeholder="Description"
          onChange={handlePersonalInfoChange}
          name="description"
          value={props.personalInfo.description}
        />
      </fieldset>
      <fieldset>
        <legend>Educational Info</legend>
        <AddEducation onAddEducation={handleAddEducation} />
      </fieldset>
      <fieldset>
        <legend>Work Experience</legend>
        <AddWork onAddWork={handleAddWork} />
      </fieldset>
    </form>
  );
};

export default MainCvForm;
