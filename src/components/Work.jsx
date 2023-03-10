import React from "react";

const Work = (props) => {
  const { work, setWork } = props;

  const handleWorkChange = (e, index) => {
    const { name, value } = e.target;
    const list = [...work];
    list[index][name] = value;
    setWork(list);
  };

  const handleWorkRemove = (index) => {
    const list = [...work];
    list.splice(index, 1);
    setWork(list);
  };

  const handleAddWork = () => {
    setWork([
      ...work,
      {
        institute: "",
        positionTitle: "",
        startDate: "",
        endDate: "",
        description: "",
      },
    ]);
  };

  return (
    <div>
      {work.map((data, index) => {
        return (
          <div key={index}>
            <input
              type="text"
              name="institute"
              value={data.institute}
              placeholder="Institute"
              onChange={(e) => handleWorkChange(e, index)}
            />
            <input
              type="text"
              name="positionTitle"
              value={data.positionTitle}
              placeholder="Position Title"
              onChange={(e) => handleWorkChange(e, index)}
            />
            <input
              type="text"
              name="startDate"
              value={data.startDate}
              placeholder="Start Date"
              onChange={(e) => handleWorkChange(e, index)}
            />
            <input
              type="text"
              name="endDate"
              value={data.endDate}
              placeholder="End Date"
              onChange={(e) => handleWorkChange(e, index)}
            />
            <input
              type="text"
              name="description"
              value={data.description}
              placeholder="Description"
              onChange={(e) => handleWorkChange(e, index)}
            />
            <div className="btns">
              {work.length !== 1 && (
                <button onClick={() => handleWorkRemove(index)}>
                  Remove Work
                </button>
              )}
              {work.length - 1 === index && (
                <button onClick={handleAddWork}>Add Work</button>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Work;
