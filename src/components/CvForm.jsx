import React from "react";
import Education from "./Education";
import Work from "./Work";

const MainCvForm = (props) => {
  const {
    personalInfo,
    setPersonalInfo,
    education,
    setEducation,
    workExperience,
    setWorkExperience,
  } = props;

  function handleAddWork(newWork) {
    setWorkExperience([...workExperience, newWork]);
  }

  function handlePersonalInfoChange(event) {
    const { name, value } = event.target;
    setPersonalInfo((prevInfo) => {
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
      className="container mx-auto my-10 md:p-10 md:w-4/5 w-11/12 border-2 p-5 shadow"
    >
      <fieldset>
        <legend>Personal Info</legend>
        <input
          type="text"
          placeholder="Name"
          onChange={handlePersonalInfoChange}
          name="name"
          value={personalInfo.name}
        />
        <input
          type="text"
          placeholder="Email"
          onChange={handlePersonalInfoChange}
          name="email"
          value={personalInfo.email}
        />
        <input
          type="text"
          placeholder="Phone"
          onChange={handlePersonalInfoChange}
          name="phone"
          value={personalInfo.phone}
        />
        <input
          type="text"
          placeholder="Description"
          onChange={handlePersonalInfoChange}
          name="description"
          value={personalInfo.description}
        />
      </fieldset>
      <fieldset>
        <legend>Educational Info</legend>
        <Education education={education} setEducation={setEducation} />
      </fieldset>
      <fieldset>
        <legend>Work Experience</legend>
        <Work onAddWork={handleAddWork} />
      </fieldset>
    </form>
  );
};

export default MainCvForm;
