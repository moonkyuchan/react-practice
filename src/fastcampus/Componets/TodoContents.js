import React from "react";
import styled from "styled-components";
import { TodoItems } from "./TodoItems";

const TodoContentsBlock = styled.div`
  flex: 1;
  padding: 20px 32px;
  padding-bottom: 48px;
  overflow-y: auto;
`;

export const TodoContents = () => {
  return (
    <TodoContentsBlock>
      <TodoItems text="정지원" done={true} />
      <TodoItems text="태성현" done={true} />
      <TodoItems text="문규찬" done={false} />
    </TodoContentsBlock>
  );
};
