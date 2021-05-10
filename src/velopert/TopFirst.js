import React, { useEffect } from "react";
// import styled from "styled-components";

const User = ({ user, onRemove, onToggle }) => {
  useEffect(() => {
    console.log("컴포넌트가 화면에 나타남");
    return () => {
      console.log("컴포넌트가 화면에서 사라짐");
    };
  }, []);
  return (
    <div>
      <b
        style={{ cursor: "pointer", color: user.active ? "green" : "black" }}
        onClick={() => onToggle(user.id)}
      >
        {user.userName}
      </b>
      <span>({user.email})</span>
      <button onClick={() => onRemove(user.id)}>삭제</button>
    </div>
  );
};

export const TopFirst = ({ users, onRemove, onToggle }) => {
  return (
    <div>
      {users.map((user) => (
        <User
          user={user}
          key={user.id}
          onRemove={onRemove}
          onToggle={onToggle}
        />
      ))}
    </div>
  );
};

// const TopFirstWrap = styled.div`
//   width: 300px;
//   height: 100px;
//   margin: 15px 0;
// `;

// // const Delete = styled.button`
// //   width: 20px;
// //   height: 5px;
// // `;

// const TopContents = styled.div``;
