import React from "react";
import { TodoTemplate } from "./Componets/TodoTemplate";
import { TodoHead } from "./Componets/TodoHead";
import { TodoContents } from "./Componets/TodoContents";
import { createGlobalStyle } from "styled-components";
import { TodoCreate } from "./Componets/TodoCreate";

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
        <TodoCreate />
      </TodoTemplate>
    </>
  );
};

// const Main = styled.div`
//   width: 500px;
//   height: 500px;
//   background-color: black;
// `;
