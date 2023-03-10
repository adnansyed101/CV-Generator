import React, { useState } from "react";
import MainCv from "./components/MainCv";
import MainCvForm from "./components/CvForm";

const App = () => {
  const [personalInfo, setPersonalInfo] = useState({
    name: "",
    email: "",
    phone: "",
    description: "",
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

  const [workExperience, setWorkExperience] = useState([]);

  return (
    <div className="bg-slate-50">
      <header className="bg-slate-800 py-4">
        <h1 className="text-center text-4xl text-white">CV Generator</h1>
      </header>
      <MainCvForm
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
};

export default App;
