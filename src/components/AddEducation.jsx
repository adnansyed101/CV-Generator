import React from "react";

const AddEducation = (props) => {
  const { education, setEducation } = props;

  const handleEducationChange = (e, index) => {
    const { name, value } = e.target;
    const list = [...education];
    list[index][name] = value;
    setEducation(list);
  };

  const handleEducationRemove = (index) => {
    const list = [...education];
    list.splice(index, 1);
    setEducation(list);
  };

  const handleAddEducation = () => {
    setEducation([
      ...education,
      {
        institute: "",
        degreeName: "",
        startDate: "",
        endDate: "",
        description: "",
      },
    ]);
  };

  return (
    <div>
      {education.map((data, index) => {
        return (
          <div key={index}>
            <input
              type="text"
              name="institute"
              value={data.institute}
              placeholder="Institute"
              onChange={(e) => handleEducationChange(e, index)}
            />
            <input
              type="text"
              name="degreeName"
              value={data.degreeName}
              placeholder="Degree Name"
              onChange={(e) => handleEducationChange(e, index)}
            />
            <input
              type="text"
              name="startDate"
              value={data.startDate}
              placeholder="Start Date"
              onChange={(e) => handleEducationChange(e, index)}
            />
            <input
              type="text"
              name="endDate"
              value={data.endDate}
              placeholder="End Date"
              onChange={(e) => handleEducationChange(e, index)}
            />
            <input
              type="text"
              name="description"
              value={data.description}
              placeholder="Description"
              onChange={(e) => handleEducationChange(e, index)}
            />
            <div className="btns">
              {education.length !== 1 && (
                <button onClick={() => handleEducationRemove(index)}>
                  Remove
                </button>
              )}
              {education.length - 1 === index && (
                <button onClick={handleAddEducation}>Add</button>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default AddEducation;
