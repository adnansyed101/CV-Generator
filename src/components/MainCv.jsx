import React from "react";

const MainCv = ({ personalInfo, education, workExperience }) => {
  const { name, email, phone, title } = personalInfo;
  return (
    <div className="container mx-auto my-5 w-11/12 md:w-4/6 grid grid-cols-[1.5fr_1fr] shadow">
      <div className="bg-slate-800 px-3 md:px-10 md:py-10 py-4 col-span-2">
        <h1 className="text-3xl md:text-5xl md:my-2 font-bold tracking-wide text-white">
          {name === "" ? "Full Name" : name}
        </h1>
        <p className="text-sm md:text-4xl md:tracking-wide text-white">
          {title === "" ? "Title" : title}
        </p>
      </div>

      <div className="px-3 my-4 md:px-10">
        <h3 className="text-xl pt-2 md:text-4xl">Education</h3>
        <span className="block border border-slate-400 my-1"></span>
        {education.map((degree, index) => {
          const { institute, degreeName, startDate, endDate, description } =
            degree;
          return (
            <div key={index} className="flex gap-3 my-2">
              <div>
                <span className="text-xs">{startDate} - </span>
                <span className="text-xs">{endDate}</span>
              </div>
              <div>
                <p className="text-xs">{institute}</p>
                <p className="text-xs">{degreeName}</p>
                <p className="text-xs">{description}</p>
              </div>
            </div>
          );
        })}
        <h3 className="text-xl pt-2 md:text-4xl">Work</h3>
        <span className="block border border-slate-400 my-1"></span>
        {workExperience.map((work, index) => {
          const {
            companyName,
            positionTitle,
            startDate,
            endDate,
            description,
          } = work;
          return (
            <div key={index} className="flex gap-2 my-2">
              <div>
                <span className="text-xs">{startDate} - </span>
                <span className="text-xs">{endDate}</span>
              </div>
              <div>
                <p className="text-xs">{companyName}</p>
                <p className="text-xs">{positionTitle}</p>
                <p className="text-xs">{description}</p>
              </div>
            </div>
          );
        })}
      </div>

      <div className="my-4">
        <div className="my-1">
          <p className="text-xs md:text-xl md:tracking-wide">Email: </p>
          <p className="text-xs md:text-xl md:tracking-wide">
            {email === "" ? "something@email.com" : email}
          </p>
        </div>
        <div className="my-1">
          <p className="text-xs md:text-xl md:tracking-wide">Phone: </p>
          <p className="text-xs md:text-xl md:tracking-wide">
            {phone === "" ? "017********" : phone}
          </p>
        </div>
      </div>
    </div>
  );
};

export default MainCv;
