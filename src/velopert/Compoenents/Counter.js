import React, { useState } from "react";
import styled from "styled-components";

export const Counter = () => {
  const [value, setValue] = useState(0);
  return (
    <Wrapper>
      <Title>현재 값은 {value} 입니다.</Title>
      <Button1 onClick={() => setValue(value + 1)}>+1</Button1>
      <Button2 onClick={() => setValue(value - 1)}>-1</Button2>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background-color: grey;
`;

const Title = styled.div`
  color: white;
`;

const Button1 = styled.button`
  width: 140px;
  height: 70px;
`;

const Button2 = styled.button`
  width: 140px;
  height: 70px;
`;
