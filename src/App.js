import React, { Component } from "react";
import styled from "styled-components";
import HoveringShapeBackground from "./hoveringShape";
import LogoStack from "./LogoStack";

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

const Main = styled.main`
  font-family: Helvetica, monospace;
  height: 100%;
`;

const Block = styled.main`
  min-height: 100vh;
  height: 100%;
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

const About = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  padding-bottom: 50%;
  align-items: center;
  justify-content: space-between;
  box-sizing: border-box;
  p {
    letter-spacing: 2px;
    font-weight: 600;
    margin-top: 0;
    color: #555;
  }

  .about {
    font-size: 1.5rem;
  }

  .info {
    font-weight: 200;
    max-width: 50ch;
  }

  div {
    min-width: 175px;
    min-height: 175px;
    margin: auto;
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
        <Block>
          <About>
            <p className="about">About</p>
            <div>
              <LogoStack width={"50%"} />
            </div>
            <p className="info">
              Based in London, I have a passion for contructing elegant
              solutions.
            </p>
          </About>
        </Block>
        <Block>Contact</Block>
      </Main>
    );
  }
}

export default App;
