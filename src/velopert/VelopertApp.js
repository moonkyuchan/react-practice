import React, { useRef, useState } from "react";
import UserList from "./Compoenents/UserList";
import CreateUser from "./Compoenents/CreateUser";

const VelopertApp = () => {
  const [users, setUsers] = useState([
    { id: 1, username: "moon", email: "abc@naver.com", active: true },
    { id: 2, username: "lee", email: "lee@naver.com", active: false },
    { id: 3, username: "choi", email: "choi@naver.com", active: false },
  ]);

  const [inputs, setInputs] = useState({
    username: "",
    email: "",
  });

  const { username, email } = inputs;

  const onChange = (e) => {
    const { name, value } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  const nextId = useRef(4);
  // console.log("nameInput=useRef()", nextId);

  const onCreate = () => {
    const user = {
      id: nextId.current,
      username,
      email,
    };
    // console.log("user객체", user);
    setUsers([...users, user]);
    setInputs({ username: "", email: "" });
    nextId.current += 1;
  };

  const onRemove = (id) => {
    setUsers(users.filter((user) => user.id !== id));
    // console.log("onRemove 파라미터 id", id);
  };

  const onToggle = (id) => {
    setUsers(
      users.map((user) =>
        user.id === id ? { ...user, active: !user.active } : user
      )
    );
  };

  return (
    <>
      <CreateUser
        onChange={onChange}
        onCreate={onCreate}
        username={username}
        email={email}
      />
      <UserList users={users} onRemove={onRemove} onToggle={onToggle} />
    </>
  );
};

export default VelopertApp;
