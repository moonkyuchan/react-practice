import React, { useState } from "react";
import UserList from "./Compoenents/UserList";

const Immutable = () => {
  const [info, setInfo] = useState({
    input: "",
    users: [
      { id: 1, username: "moon" },
      { id: 2, username: "kyu" },
    ],
  });
  console.log(info.users);

  const onChange = (event) => {
    const {
      target: { value },
    } = event;
    setInfo(value);
  };

  const buttonClick = (e) => {
    setInfo({
      input: "",
      users: [...info.users].concat({
        id: info.users[info.users.length - 1].id + 1,
        usersname: info.input,
      }),
    });
    console.log(setInfo);
  };

  return (
    <>
      <div>
        <input onChange={onChange} value={info.input} />
        <button onClick={buttonClick}>추가</button>
      </div>
      <h1>사용자목록</h1>
      <div>
        <UserList users={info} />
      </div>
    </>
  );
};

export default Immutable;
