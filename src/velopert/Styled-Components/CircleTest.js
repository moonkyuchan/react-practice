import React from "react";
import styled, { css } from "styled-components";

const CircleTest = () => {
  return <Circle color="pink" huge />;
};

const Circle = styled.div`
  width: 5rem;
  height: 5rem;
  background: ${(props) => props.color || "black"};
  border-radius: 50%;
  ${(props) =>
    props.huge &&
    css`
      width: 10rem;
      height: 10rem;
    `}
`;

export default CircleTest;
