import React, { Component } from "react";
import styled from "styled-components";
import HoveringShapeBackground from "./hoveringShape";

const Main = styled.main`
  min-height: 100vh;
  min-width: 100vw;
  position: relative;
`;

const Introduction = styled.div`
  font-size: 16px;
  font-family: Helvetica, monospace;
  letter-spacing: 2px;
  font-weight: 600;
  color: white;
  p {
    padding: 10px 0 0 10px;
    margin-top: 0;
  }
`;

class App extends Component {
  render() {
    return (
      <Main>
        <Introduction>
          <p>Conor O'Flanagan</p>
        </Introduction>
        <HoveringShapeBackground />
      </Main>
    );
  }
}

export default App;
