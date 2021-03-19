import React from "react";
import styled from "styled-components";

const TodoContentsBlock = styled.div`
  flex: 1;
  padding: 20px 32px;
  padding-bottom: 48px;
  overflow-y: auto;
`;

export const TodoContents = () => {
  return <TodoContentsBlock>안녕하세요</TodoContentsBlock>;
};
