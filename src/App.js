import React, { Component } from "react";
import styled from "styled-components";
import HoveringShapeBackground from "./hoveringShape";

const Container = styled.div`
  position: absolute;
  top: 2.05rem;
  right: 2rem;
  width: 30px;
`;

const Line = styled.div`
  width: 100%;
  margin-bottom: 5px;
  height: 2px;
  background-color: #ccc;
`;

const Hamburger = () => (
  <Container>
    <Line />
    <Line />
    <Line />
  </Container>
);

const Main = styled.main``;

const Block = styled.main`
  min-height: 100vh;
  position: relative;
  box-sizing: border-box;
  padding: ${({ nopad }) => (nopad ? "0" : "2rem")};
`;

const Introduction = styled.div`
  height: 100vh;
  max-width: 100vw;
  display: flex;
  padding: 2rem;
  box-sizing: border-box;
  flex-direction: column;
  justify-content: space-between;
  font-size: 1rem;
  p {
    letter-spacing: 2px;
    font-weight: 600;
    margin-top: 0;
    font-family: Helvetica, monospace;
    color: #cccccc;
  }

  .name {
    width: 5ch;
    line-height: 1.25rem;
  }

  .tag {
    font-weight: 500;
    align-self: flex-end;
  }
`;

class App extends Component {
  render() {
    return (
      <Main>
        <Block nopad>
          <Introduction>
            <p className="name">CONOR O'FLANAGAN</p>
            <p className="tag">Cloud Artisan</p>
          </Introduction>
          <Hamburger onClick={() => console.log("openMenu")} />
          <HoveringShapeBackground />
        </Block>
        {/* <Block>About</Block>*/}
        <Block>Contact</Block>
      </Main>
    );
  }
}

export default App;
