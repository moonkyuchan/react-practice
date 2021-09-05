import React from "react";
import Button from "./Button";
import styled, { ThemeProvider } from "styled-components"; // 조건부로 css를 건드리려면 {css}를 불ㄹ와야 한다.

const StyledTest = () => {
  return (
    <ThemeProvider
      theme={{ palette: { blue: "#228be6", gray: "#495057", pink: "#f06595" } }}
    >
      <AppBlock>
        <ButtonGroup>
          <Button size="large">Button</Button>
          <Button>Button</Button>
          <Button size="small">Button</Button>
        </ButtonGroup>
        <ButtonGroup>
          <Button size="large" color="gray">
            Button
          </Button>
          <Button color="gray">Button</Button>
          <Button size="small" color="gray">
            Button
          </Button>
        </ButtonGroup>
        <ButtonGroup>
          <Button size="large" color="pink">
            Button
          </Button>
          <Button color="pink">Button</Button>
          <Button size="small" color="pink">
            Button
          </Button>
        </ButtonGroup>
        <ButtonGroup>
          <Button size="large" outline>
            Button
          </Button>
          <Button color="gray" outline>
            Button
          </Button>
          <Button size="small" color="pink" outline>
            Button
          </Button>
        </ButtonGroup>
        <ButtonGroup>
          <Button size="large" fullWidth>
            Button
          </Button>
          <Button size="large" color="gray" fullWidth>
            Button
          </Button>
          <Button size="large" color="pink" fullWidth>
            Button
          </Button>
        </ButtonGroup>
      </AppBlock>
    </ThemeProvider>
  );
};

const AppBlock = styled.div`
  width: 512px;
  margin: 0 auto;
  margin-top: 4rem;
  border: 1px solid black;
  padding: 1rem;
`;

const ButtonGroup = styled.div`
  & + & {
    margin-top: 1rem;
  }
`;

export default StyledTest;
