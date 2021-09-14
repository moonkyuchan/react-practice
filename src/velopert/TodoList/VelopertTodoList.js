import React from "react";
import { createGlobalStyle } from "styled-components";
import TodoTemplate from "./TodoTemplate";
import TodoHead from "./TodoHead";
import TodoList from "./TodoList";
import TodoCreate from "./TodoCreate";

const GlobalStyle = createGlobalStyle`
body{
  background:skyblue;
}`;

const VelopertTodoList = () => {
  return (
    <>
      <GlobalStyle />
      <TodoTemplate>
        <TodoHead />
        <TodoList />
        <TodoCreate />
      </TodoTemplate>
    </>
  );
};

export default VelopertTodoList;