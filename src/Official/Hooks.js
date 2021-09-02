import userEvent from "@testing-library/user-event";
import React, { useState, useEffect } from "react";

const Hooks = () => {
  console.log("Hooks function");
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
    console.log("handleClick함수");
  };
  useEffect(() => {
    document.title = `${count} 클릭 하였습니다.`;
    console.log("useEffect입니다.");
  });
  return (
    <>
      <h1>Hooks를 연습해봅시다.</h1>
      <p>{count} 번 클릭하였습니다.</p>
      <button onClick={handleClick}>버튼</button>
    </>
  );
};

export default Hooks;
