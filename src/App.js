import React, { Component } from "react";
import styled from "styled-components";
import LogoStack from "./LogoStack";

const Main = styled.main`
  height: calc(100vh - 2rem);
  padding: 1rem;
`;

const Introduction = styled.div`
  font-size: 25px;
  font-family: Helvetica, monospace;
  font-weight: 600;
  position: static;
  text-align: center;
  p {
    padding-top: 30px;
    line-height: 35px;
    margin: auto;
  }
`;

const LogoContainer = styled.div`
  position: relative;
  width: 100%;
  top: 62%;
  svg {
    position: absolute;
    left: 53%;
    transform: translate(-50%, -100%);
  }
`;

class App extends Component {
  render() {
    return (
      <Main>
        <Introduction>
          <p>Conor O'Flanagan Software Developer</p>
        </Introduction>
        <LogoContainer>
          <LogoStack />
        </LogoContainer>
      </Main>
    );
  }
}

export default App;
