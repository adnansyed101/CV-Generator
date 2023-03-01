import React, { useState } from "react";
import MainCv from "./components/MainCv";
import MainCvForm from "./components/MainCvForm";

const App = () => {
  const [personalInfo, setPersonalInfo] = useState({
    name: "Full Name",
    email: "something@something.com",
    phone: "01*********",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod corporis cumque iure optio, illo ut omnis. Odio sequi rem ipsa iste, sunt culpa quis ea praesentium corrupti vel laudantium officia!",
  });

  const [education, setEducation] = useState([]);

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
