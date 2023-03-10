import React from "react";
import PersonalInfo from "./PersonalInfo";
import Education from "./Education";
import Work from "./Work";

const CvForm = (props) => {
  const {
    personalInfo,
    setPersonalInfo,
    education,
    setEducation,
    workExperience,
    setWorkExperience,
  } = props;

  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="container mx-auto my-10 md:p-10 md:w-4/6 w-11/12 border-2 p-5 shadow"
    >
      <fieldset>
        <legend>Personal Info</legend>
        <PersonalInfo
          personalInfo={personalInfo}
          setPersonalInfo={setPersonalInfo}
        />
      </fieldset>
      <fieldset>
        <legend>Educational Info</legend>
        <Education education={education} setEducation={setEducation} />
      </fieldset>
      <fieldset>
        <legend>Work Experience</legend>
        <Work work={workExperience} setWork={setWorkExperience} />
      </fieldset>
    </form>
  );
};

export default CvForm;
