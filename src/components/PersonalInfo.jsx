function PersonalInfo({ personalInfo, setPersonalInfo }) {
  function handlePersonalInfoChange(event) {
    const { name, value } = event.target;
    setPersonalInfo((prevInfo) => {
      return {
        ...prevInfo,
        [name]: value,
      };
    });
  }

  return (
    <div>
      <input
        type="text"
        placeholder="Name"
        onChange={handlePersonalInfoChange}
        name="name"
        value={personalInfo.name}
      />
      <input
        type="text"
        placeholder="Email"
        onChange={handlePersonalInfoChange}
        name="email"
        value={personalInfo.email}
      />
      <input
        type="text"
        placeholder="Phone"
        onChange={handlePersonalInfoChange}
        name="phone"
        value={personalInfo.phone}
      />
      <input
        type="text"
        placeholder="Description"
        onChange={handlePersonalInfoChange}
        name="description"
        value={personalInfo.description}
      />
    </div>
  );
}

export default PersonalInfo;
