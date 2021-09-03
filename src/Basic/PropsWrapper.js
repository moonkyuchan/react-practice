import React from "react";

const PropsWrapper = ({ children }) => {
  const style = {
    border: "2px solid black",
    padding: "20px",
    width: "500px",
  };
  return <div style={style}>{children}</div>;
};

export default PropsWrapper;
