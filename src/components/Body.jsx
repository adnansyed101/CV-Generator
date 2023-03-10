import React, { useState } from "react";
import MainCv from "./MainCv";
import CvForm from "./CvForm";

function Body() {
  const [personalInfo, setPersonalInfo] = useState({
    name: "",
    email: "",
    phone: "",
    title: "",
  });

  const [education, setEducation] = useState([
    {
      institute: "",
      degreeName: "",
      startDate: "",
      endDate: "",
      description: "",
    },
  ]);

  const [workExperience, setWorkExperience] = useState([
    {
      institute: "",
      positionTitle: "",
      startDate: "",
      endDate: "",
      description: "",
    },
  ]);

  return (
    <div>
      <CvForm
        personalInfo={personalInfo}
        setPersonalInfo={setPersonalInfo}
        education={education}
        setEducation={setEducation}
        workExperience={workExperience}
        setWorkExperience={setWorkExperience}
      />
      <h3 className="text-center text-3xl text-slate-800">CV</h3>
      <MainCv
        personalInfo={personalInfo}
        education={education}
        workExperience={workExperience}
      />
    </div>
  );
}

export default Body;
