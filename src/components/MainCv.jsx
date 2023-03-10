import React from "react";

const MainCv = ({ personalInfo, education, workExperience }) => {
  const { name, email, phone, title } = personalInfo;
  return (
    <div className="container mx-auto my-5 grid h-[960px] w-11/12 grid-cols-[1.5fr_1fr] grid-rows-[200px_1fr] shadow md:w-4/6">
      <div className="col-span-2 bg-slate-800 px-3 py-4 md:px-10 md:py-10">
        <h1 className="text-3xl font-bold tracking-wide text-white md:my-2 md:text-5xl">
          {name === "" ? "Full Name" : name}
        </h1>
        <p className="text-sm text-white md:text-4xl md:tracking-wide">
          {title === "" ? "Title" : title}
        </p>
      </div>

      <div className="my-4 px-3 md:px-10">
        <h3 className="pt-2 text-xl md:text-4xl">Education</h3>
        <span className="my-1 block border border-slate-400"></span>
        {education.map((degree, index) => {
          const { institute, degreeName, startDate, endDate, description } =
            degree;
          return (
            <div key={index} className="my-2 flex gap-3">
              <div>
                <span className="text-xs md:text-xl">{startDate} - </span>
                <span className="text-xs md:text-xl">{endDate}</span>
              </div>
              <div>
                <p className="text-xs md:text-xl">{institute}</p>
                <p className="text-xs md:text-xl">{degreeName}</p>
                <p className="text-xs md:text-xl">{description}</p>
              </div>
            </div>
          );
        })}
        <h3 className="pt-2 text-xl md:text-4xl">Work</h3>
        <span className="my-1 block border border-slate-400"></span>
        {workExperience.map((work, index) => {
          const {
            companyName,
            positionTitle,
            startDate,
            endDate,
            description,
          } = work;
          return (
            <div key={index} className="my-2 flex gap-2">
              <div>
                <span className="text-xs md:text-xl">{startDate} - </span>
                <span className="text-xs md:text-xl">{endDate}</span>
              </div>
              <div>
                <p className="text-xs md:text-xl">{companyName}</p>
                <p className="text-xs md:text-xl">{positionTitle}</p>
                <p className="text-xs md:text-xl">{description}</p>
              </div>
            </div>
          );
        })}
      </div>

      <div className="my-4">
        <div className="my-1">
          <p className="text-xs md:text-2xl md:tracking-wide">Email: </p>
          <p className="text-xs md:text-2xl md:tracking-wide">
            {email === "" ? "something@email.com" : email}
          </p>
        </div>
        <div className="my-1">
          <p className="text-xs md:text-2xl md:tracking-wide">Phone: </p>
          <p className="text-xs md:text-2xl md:tracking-wide">
            {phone === "" ? "017********" : phone}
          </p>
        </div>
      </div>
    </div>
  );
};

export default MainCv;
