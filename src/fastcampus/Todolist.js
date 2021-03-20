import React from "react";
import { TodoTemplate } from "./Componets/TodoTemplate";
import { TodoHead } from "./Componets/TodoHead";
import { TodoContents } from "./Componets/TodoContents";
import { TodoItems } from "./Componets/TodoItems";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body{background : #e9ecef;}
`;

export const Todolist = () => {
  return (
    <>
      <GlobalStyle />
      <TodoTemplate>
        <TodoHead />
        <TodoContents />
        <TodoItems />
      </TodoTemplate>
    </>
  );
};

// const Main = styled.div`
//   width: 500px;
//   height: 500px;
//   background-color: black;
// `;
