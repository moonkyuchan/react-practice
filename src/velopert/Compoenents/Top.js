import React, { useRef, useState } from "react";
import styled from "styled-components";
import { TopCreatUser } from "./TopCreatUser";
import { TopFirst } from "./TopFirst";

export const Top = () => {
  const [USERS, setUSERS] = useState([
    { id: 1, userName: "문규찬", email: "kyu_90@naver.com", active: true },
    { id: 2, userName: "규찬문", email: "lee@naver.com", active: false },
    { id: 3, userName: "찬규문", email: "sanoullim@naver.com", active: false },
  ]);
  // data 부분 state 로 관리

  const [Inputs, setInputs] = useState({
    userName: "",
    email: "",
  });
  // input value state로 관리

  const { userName, email } = Inputs; // 이부분 잘 이해가 안간다

  const onChange = (e) => {
    const { name, value } = e.target;
    setInputs({ ...Inputs, [name]: value });
  };
  // value값 state에 넣어주기

  const nextId = useRef(4);
  //useRef 설정
  const onCreate = () => {
    const user = {
      id: nextId.current,
      userName,
      email,
    };
    setUSERS(USERS.concat(user));
    setInputs({ userName: "", email: "" });
    nextId.current += 1;
  };

  const onRemove = (id) => {
    setUSERS(USERS.filter((user) => user.id !== id));
  };

  const onToggle = (id) => {
    setUSERS(
      USERS.map((user) =>
        user.id === id ? { ...user, active: !user.active } : user
      )
    );
  };

  return (
    <TopWrap>
      <TopCreatUser
        userName={userName}
        email={email}
        onChange={onChange}
        onCreate={onCreate}
      />
      <TopFirst users={USERS} onRemove={onRemove} onToggle={onToggle} />
    </TopWrap>
  );
};

const TopWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
