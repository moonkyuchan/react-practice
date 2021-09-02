import React from "react";

const Props = ({ name, color, isSpecial }) => {
  return (
    <h1 style={{ color: color }}>
      {isSpecial ? "하하 " : null}안녕하세요 {name}
    </h1>
  );
};

Props.defaultProps = {
  name: "이름없음",
};

export default Props;
