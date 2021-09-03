import React from "react";

const User = ({ user }) => {
  return (
    <ul>
      <li>{user.username}</li>
      <li>{user.email}</li>
    </ul>
  );
};

const ArrayMap = () => {
  const users = [
    { id: 1, username: "moon", email: "abc@naver.com" },
    { id: 2, username: "lee", email: "lee@naver.com" },
    { id: 3, username: "choi", email: "choi@naver.com" },
  ];
  return (
    <div>
      {users.map((data) => (
        <User user={data} key={data.id} />
      ))}
    </div>
  );
};

export default ArrayMap;
