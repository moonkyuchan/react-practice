import React from "react";
import styled from "styled-components";

export const TopFirst = ({ users }) => {
  return (
    <TopFirstWrap>
      {users &&
        users.map((data) => {
          return (
            <TopContents id={data.id}>
              <b>{data.userName}</b>
              <span>({data.email})</span>
            </TopContents>
          );
        })}
    </TopFirstWrap>
  );
};

const TopFirstWrap = styled.div`
  width: 300px;
  height: 100px;
  margin: 15px 0;
`;

const TopContents = styled.div``;
