import React from "react";
import styled from "styled-components";
import TodoItems from "./TodoItems";

const TodoList = () => {
  return (
    <TodoListBlock>
      <TodoItems text="리액트" done={true} />
      <TodoItems text="자바스킄립트" done={true} />
      <TodoItems text="타입스크립트" done={false} />
    </TodoListBlock>
  );
};
const TodoListBlock = styled.div`
  flex: 1; // flex:1 은 자신이 차지할수 있는 영역을 꽉 채운다. Template안에 head 아래 전 영역
  overflow-y: auto;
  padding: 32px 20px 48px 20px;
`;

export default TodoList;
