import React from "react";
const MainCv = (props) => {
  const { personalInfo, education, workExperience } = props;
  return (
    <div className="container mx-auto my-5 w-1/2 border border-black p-10">
      <h1 className="text-6xl font-bold tracking-wide text-slate-800">
        {personalInfo.name}
      </h1>
      <p className="text-xl tracking-wide">{personalInfo.email}</p>
      <p className="text-xl tracking-wide">{personalInfo.phone}</p>
      <p className="text-xl tracking-wide ">{personalInfo.description}</p>

      <span className="my-6 block border-2 border-slate-800"></span>

      <h3 className="text-4xl">Education</h3>
      {education.length > 0 &&
        education.map((degree, index) => {
          const { institute, degreeName, startDate, endDate, description } =
            degree;
          return (
            <div key={index}>
              <p>Institute: {institute}</p>
              <p>Degree: {degreeName}</p>
              <p>Start Date: {startDate}</p>
              <p>End Date: {endDate}</p>
              <p>Description: {description}</p>
              <span className="block border border-slate-400 my-2"></span>
            </div>
          );
        })}
      <h3 className="text-4xl">Work</h3>
      {workExperience.length > 0 &&
        workExperience.map((work, index) => {
          const {
            companyName,
            positionTitle,
            startDate,
            endDate,
            description,
          } = work;
          return (
            <div key={index}>
              <p>Company Name: {companyName}</p>
              <p>Position Title: {positionTitle}</p>
              <p>Start Date: {startDate}</p>
              <p>End Date: {endDate}</p>
              <p>Description: {description}</p>
              <span className="block border border-slate-400 my-2"></span>
            </div>
          );
        })}
    </div>
  );
};

export default MainCv;
