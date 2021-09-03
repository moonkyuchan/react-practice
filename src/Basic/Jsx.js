import React from "react";

const user = {
  name: "문규찬",
  age: 32,
};
function formatName(user) {
  if (user) {
    return <h1>{`${user.name}은 ${user.age}살 입니다.`}</h1>;
  } else {
    return <h1>hello stranger</h1>;
  }
}

const Jsx = () => {
  return (
    <>
      <h1>{formatName(user)}</h1>
    </>
  );
};

export default Jsx;
