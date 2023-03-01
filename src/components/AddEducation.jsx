import React from "react";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

const AddEducation = (props) => {
  const addEducation = props.onAddEducation;

  const [institute, setInstitute] = useState("");
  const [degreeName, setDegreeName] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [description, setDescription] = useState("");

  const handleAddEducation = () => {
    const newEducation = {
      id: uuidv4(),
      institute: institute,
      degreeName: degreeName,
      startDate: startDate,
      endDate: endDate,
      description: description,
    };
    addEducation(newEducation);
    setInstitute("");
    setDegreeName("");
    setStartDate("");
    setEndDate("");
    setDescription("");
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Institute"
        value={institute}
        onChange={(e) => setInstitute(e.target.value)}
      />
      <input
        type="text"
        placeholder="Degree Name"
        value={degreeName}
        onChange={(e) => setDegreeName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Start Date"
        value={startDate}
        onChange={(e) => setStartDate(e.target.value)}
      />
      <input
        type="text"
        placeholder="End Date"
        value={endDate}
        onChange={(e) => setEndDate(e.target.value)}
      />
      <input
        type="text"
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button onClick={handleAddEducation}>Add Education</button>
    </div>
  );
};

export default AddEducation;
