import React from "react";
import { TodoTemplate } from "./Componets/TodoTemplate";
import { TodoHead } from "./Componets/TodoHead";
import { TodoContents } from "./Componets/TodoContents";
import { createGlobalStyle } from "styled-components";
import { TodoCreate } from "./Componets/TodoCreate";
import { TodoProvider } from "./Context";

const GlobalStyle = createGlobalStyle`
  body{background : #e9ecef;}
`;

export const Todolist = () => {
  return (
    <TodoProvider>
      <GlobalStyle />
      <TodoTemplate>
        <TodoHead />
        <TodoContents />
        <TodoCreate />
      </TodoTemplate>
    </TodoProvider>
  );
};

// const Main = styled.div`
//   width: 500px;
//   height: 500px;
//   background-color: black;
// `;
