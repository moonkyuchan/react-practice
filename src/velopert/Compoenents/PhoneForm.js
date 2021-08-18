import React, { useState } from "react";

const PhoneForm = ({ onCreate }) => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  const handleOnchange = (event) => {
    const {
      target: { value, name },
    } = event;
    if (name === "name") {
      setName(value);
    } else if (name === "phone") setPhone(value);
  };

  const submitClick = (e) => {
    e.preventDefault();
    onCreate(name);
    onCreate(phone);
    setName("");
    setPhone("");
  };

  return (
    <form onSubmit={submitClick}>
      <input
        placeholder="이름"
        value={name}
        onChange={handleOnchange}
        name="name"
      />
      <input
        placeholder="전화번호"
        value={phone}
        onChange={handleOnchange}
        name="phone"
      />
      <button type="submit">submit</button>
    </form>
  );
};

export default PhoneForm;
