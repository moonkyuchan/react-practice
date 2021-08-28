import React from "react";

const user = ({ users }) => {
  console.log("%s가 렌더링 되고있어요", users);
  return <div>{users.uesrname}</div>;
};

export default user;
