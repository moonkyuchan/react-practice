import React, { useState } from "react";

const useStateTest = () => {
  const [number, setNumber] = useState(0);

  const onIncrease = () => {
    setNumber((prev) => prev + 1);
    console.log("증가합니다");
  };
  const onDecrease = () => {
    setNumber(number - 1);
    console.log("감소합니다.");
  };
  return (
    <div>
      <h1>{number}</h1>
      <button onClick={onIncrease}>+1</button>
      <button onClick={onDecrease}>-1</button>
    </div>
  );
};

export default useStateTest;
