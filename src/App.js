import React, { Component } from "react";
import styled from "styled-components";
import HoveringShapeBackground from "./hoveringShape";

const Main = styled.main`

`;

const Home = styled.main`
  min-height: 100vh;
  min-width: 100vw;
  position: relative;
`;

const Introduction = styled.div`
  box-sizing: border-box
  height: 100vh;
  padding: 2rem;
  display: flex;
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

  .tag {
    font-weight: 500;
    align-self: flex-end;
  }
`;

class App extends Component {
  render() {
    return (
      <Main>
        <Home>
        <Introduction>
          <p>CONOR O'FLANAGAN</p>
          <p className="tag">Cloud Artisan</p>
        </Introduction>
        <HoveringShapeBackground />
        </Home>
      </Main>
    );
  }
}

export default App;
