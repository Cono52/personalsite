import React, { Component } from "react";
import styled from "styled-components";
import HoveringShapeBackground from "./hoveringShape";

const Main = styled.main`
  min-height: 100vh;
  min-width: 100vw;
  position: relative;
`;

const Introduction = styled.div`
  font-size: 24px;
  font-family: Helvetica, monospace;
  letter-spacing: 2px;
  font-weight: 600;
  color: #cccccc;
  p {
    padding: 50px 0 0 50px;
    margin-top: 0;
  }

  .tag {
    font-size: 20px;
    font-weight: 500;
  }
`;

class App extends Component {
  render() {
    return (
      <Main>
        <Introduction>
          <p>CONOR O'FLANAGAN</p>
          <p class="tag">Cloud Artisan</p>
        </Introduction>
        <HoveringShapeBackground />
      </Main>
    );
  }
}

export default App;
