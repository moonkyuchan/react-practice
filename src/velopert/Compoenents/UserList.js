import React, { useEffect } from "react";

const User = ({ users, onRemove, onToggle }) => {
  useEffect(() => {
    console.log("users값이 설정됨");
    console.log(users);
    return () => {
      console.log("users가 바뀌기 전...");
      console.log(users);
    };
  }, [users]);
  return (
    <div>
      <b
        style={{ cursor: "pointer", color: users.active ? "green" : "black" }}
        onClick={() => onToggle(users.id)}
      >
        {users.username}
      </b>
      <span>( {users.email} )</span>
      <button onClick={() => onRemove(users.id)}>삭제</button>
    </div>
  );
};

const UserList = ({ users, onRemove, onToggle }) => {
  return (
    <div>
      {users.map((data) => (
        <User
          users={data}
          key={data.id}
          onRemove={onRemove}
          onToggle={onToggle}
        />
      ))}
    </div>
  );
};

export default UserList;
