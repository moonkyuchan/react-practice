import React from "react";
import styled from "styled-components";
import TodoItems from "./TodoItems";
import { useSelector } from "react-redux";

const TodoList = () => {
  const todoItems = useSelector((store) => store.todoReducer);
  return (
    <TodoListBlock>
      {todoItems.map((data) => {
        return <TodoItems key={data.id} text={data.text} done={data.done} />;
      })}
    </TodoListBlock>
  );
};
const TodoListBlock = styled.div`
  flex: 1; // flex:1 은 자신이 차지할수 있는 영역을 꽉 채운다. Template안에 head 아래 전 영역
  overflow-y: auto;
  padding: 32px 20px 48px 20px;
`;

export default TodoList;
