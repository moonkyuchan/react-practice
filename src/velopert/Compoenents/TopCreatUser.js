import React from "react";
import styled from "styled-components";

export const TopCreatUser = ({ userName, email, onChange, onCreate }) => {
  return (
    <BasicWrap>
      <Input1
        name="userName"
        placeholder="계정명"
        onChange={onChange}
        value={userName}
      />
      <Input2
        name="email"
        placeholder="이메일"
        onChange={onChange}
        value={email}
      />
      <AddContetns onClick={onCreate}>추가</AddContetns>
    </BasicWrap>
  );
};

const BasicWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Input1 = styled.input`
  width: 300px;
  height: 50px;
  margin: 20px 0;
  padding: 0 20px;
`;

const Input2 = styled.input`
  width: 300px;
  height: 50px;
  margin: 20px 0;
  padding: 0 20px;
`;

const AddContetns = styled.button`
  width: 300px;
  height: 50px;
  margin: 20px 0;
`;
