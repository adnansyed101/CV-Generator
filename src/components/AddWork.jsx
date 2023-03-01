import React from "react";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

const AddWork = (props) => {
  const addWork = props.onAddWork;

  const [companyName, setCompanyName] = useState("");
  const [positionTitle, setPositionTitle] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [description, setDescription] = useState("");

  const handleAddWork = () => {
    const newWork = {
      id: uuidv4(),
      companyName: companyName,
      positionTitle: positionTitle,
      startDate: startDate,
      endDate: endDate,
      description: description,
    };
    addWork(newWork);
    setCompanyName("");
    setPositionTitle("");
    setStartDate("");
    setEndDate("");
    setDescription("");
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Company Name"
        value={companyName}
        onChange={(e) => setCompanyName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Postion Title"
        value={positionTitle}
        onChange={(e) => setPositionTitle(e.target.value)}
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
      <button onClick={handleAddWork}>Add Work</button>
    </div>
  );
};

export default AddWork;
