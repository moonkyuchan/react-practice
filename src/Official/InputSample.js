import React, { useState, useRef } from "react";

const InputSample = () => {
  const [inputs, setInputs] = useState({
    name: "",
    nickName: "",
  });
  const nameInput = useRef();

  const { name, nickName } = inputs;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputs({ ...inputs, [name]: value });
  };

  const handleReset = () => {
    setInputs({
      name: "",
      nickName: "",
    });
    nameInput.current.focus();
  };

  return (
    <div>
      <input
        placeholder="이름"
        onChange={handleChange}
        value={name}
        name="name"
        ref={nameInput}
      />
      <input
        placeholder="nick name"
        onChange={handleChange}
        value={nickName}
        name="nickName"
      />
      <button onClick={handleReset}>초기화</button>
      <div>
        <b>값 : </b>
        {name} ({nickName})
      </div>
    </div>
  );
};

export default InputSample;
