import React, { useEffect, useState } from "react";
import styled from "styled-components";

export const Info = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  useEffect(() => {
    console.log("렌더링 되었습니다.");
    console.log({ name, age });
  });
  useEffect(() => {
    console.log("마운트 될때만?");
  }, []);
  useEffect(() => {
    console.log("특정 조건에서");
  }, [name]);

  const onChangeName = (e) => {
    setName(e.target.value);
  };

  const onChangeAge = (e) => {
    setAge(e.target.value);
  };

  return (
    <Wrapper>
      <Input value={name} onChange={onChangeName} />
      <Input value={age} onChange={onChangeAge} />
      <Name>{name}</Name>
      <Age>{age}</Age>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Input = styled.input`
  width: 100px;
  height: 20px;
  margin-top: 30px;
`;

// const InputAge = styled.input`
//   width: 100px;
//   height: 20px;
// `;

const Name = styled.div`
  color: red;
  margin-top: 10px;
`;

const Age = styled.div`
  color: red;
  margin-top: 10px;
`;
