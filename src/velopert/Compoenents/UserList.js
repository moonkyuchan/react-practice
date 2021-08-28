import React from "react";
import User from "./user";

const UserList = ({ users }) => {
  const renderUsers = () => {
    return users.users.map((data) => {
      return <User key={data.id} users={data} />;
    });
  };
  console.log("Userlist가 렌더되고있어요");

  return (
    <>
      <div>{renderUsers}</div>
    </>
  );
};

export default UserList;
