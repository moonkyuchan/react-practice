import React from "react";
import styled from "styled-components";
import { useTodoState } from "../Context";
import { TodoItems } from "./TodoItems";

const TodoContentsBlock = styled.div`
  flex: 1;
  padding: 20px 32px;
  padding-bottom: 48px;
  overflow-y: auto;
`;

export const TodoContents = () => {
  const todos = useTodoState();

  return (
    <TodoContentsBlock>
      {todos.map((todo) => (
        <TodoItems
          key={todo.key}
          id={todo.id}
          text={todo.text}
          done={todo.done}
        />
      ))}
    </TodoContentsBlock>
  );
};
