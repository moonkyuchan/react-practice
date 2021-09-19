import React from "react";
import { createGlobalStyle } from "styled-components";
import TodoTemplate from "./TodoTemplate";
import TodoHead from "./TodoHead";
import TodoList from "./TodoList";
import TodoCreate from "./TodoCreate";
import { TodoProvider } from "./ContextAPI/TodoContext";

const GlobalStyle = createGlobalStyle`
body{
  background:skyblue;
}`;

const VelopertTodoList = () => {
  return (
    <TodoProvider>
      <GlobalStyle />
      <TodoTemplate>
        <TodoHead />
        <TodoList />
        <TodoCreate />
      </TodoTemplate>
    </TodoProvider>
  );
};

export default VelopertTodoList;
