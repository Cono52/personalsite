import React, { Component } from "react";
import styled from "styled-components";
import HoveringShapeBackground from "./hoveringShape";
import LogoStack from "./LogoStack";
import FirstVec from "./FirstVec";
import LastVec from "./LastVec";
import { GitHubIcon, LinkedInIcon, Trio } from "./SvgLib";

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
  font-family: Cabin, monospace;
  position: relative;
  height: 3600px;
  width: 100%;
  top: 0;
  left: 0;
  z-index: -3;
  background: linear-gradient(
    90deg,
    hsla(205, 57%, 5%, 1),
    hsla(205, 57%, 20%, 1)
  );
`;

const Block = styled.main`
  min-height: 100vh;
  height: 100vh;
  box-sizing: border-box;
`;

const LinkBlock = styled.div`
  display: flex;
  justify-content: space-around;
  position: absolute;
  top: 1.95rem;
  left: 1.3rem;
  width: 70px;
`;

const Introduction = styled.div`
  width: 100%;
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  top: 82vh;
  h1,
  p {
    font-size: 16px;
    letter-spacing: 5px;
    font-weight: 600;
    margin-top: 0;
    color: #cccccc;
  }

  .tag {
    margin-top: 10px;
    font-family: Roboto, -apple-system, BlinkMacSystemFont, "Segoe UI", Oxygen,
      Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
    font-size: 12px;
    font-weight: normal;
  }
`;

const About = styled.div`
  box-sizing: border-box;
  .about {
    font-size: 2rem;
    padding: 2rem;
    font-weight: normal;
    position: absolute;
    top: 1045px;
    transform: rotate(21deg);
    color: lightgrey;
    letter-spacing: 20px;
  }

  .infoLogoBlock {
    position: absolute;
    top: 1300px;
    width: 100%;
    box-sizing: border-box;
    display: flex;
    padding: 2rem;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    .info {
      width: 100%;
      font-weight: 200;
      max-width: 50ch;
      color: lightgrey;
      margin-bottom: 50px;
      text-align: center;
    }

    .logoContainer {
      display: flex;
      align-items: center;
      justify-content: center;
      min-width: 200px;
    }
  }

  .skills {
    position: absolute;
    top: 1800px;
    display: flex;
    padding: 2rem;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    p {
      color: white;
      text-align: center;
      margin-bottom: 3rem;
    }
    .skillIconsContainer {
      display: flex;
      align-items: center;
      justify-content: center;
      position: relative;
      width: 100%;
      svg {
        max-width: 350px;
      }
    }
  }
`;

const Stuff = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 2500px;
  padding: 2rem;
  box-sizing: border-box;
  z-index: 5;
  .stuff {
    color: lightgrey;
    font-weight: normal;
    position: absolute;
    top: -120px;
    right: 2rem;
    transform: rotate(-18deg);
  }
  .article {
    display: flex;
    word-wrap: break-word;
    flex-direction: column;
    margin-bottom: 2rem;
    p {
      color: white;
    }
    a {
      word-break: break-all;
    }
  }
`;

class App extends Component {
  render() {
    return (
      <Main>
        <FirstVec />
        <LastVec className="lastVec" />
        <Block className="homeBlock" nopad>
          <LinkBlock>
            <GitHubIcon />
            <LinkedInIcon />
          </LinkBlock>
          <Introduction>
            <h1 className="name">CONOR O'FLANAGAN</h1>
            <p className="tag">CLOUD ARTISAN</p>
          </Introduction>
          <Hamburger onClick={() => console.log("openMenu")} />
          <HoveringShapeBackground />
        </Block>
        <Block className="aboutBlock">
          <About>
            <h2 className="about">ABOUT</h2>
            <div className="infoLogoBlock">
              <p className="info">
                Based in London, I have a passion for designing and building
                elegant and engaging web solutions.
              </p>
              <div className="logoContainer">
                <LogoStack width={"70%"} />
              </div>
            </div>
            <div className="skills">
              <p>
                In unison with my expertise of the web landscape I enjoy being
                able to leverage a formal blend of skills in computer science,
                business and design to solve big problems
              </p>
              <div className="skillIconsContainer">
                <Trio />
              </div>
            </div>
          </About>
        </Block>
        <Block className="stuffBlock">
          <Stuff>
            <h2 className="stuff">RECENT PICKS</h2>
            <div className="article">
              <p>The new syntax on top of javascript: ReasonML</p>
              <a href="https://reasonml.github.io/">
                https://reasonml.github.io/
              </a>
            </div>
            <div className="article">
              <p>Designing Perceptions Instead of Solutions</p>
              <a href="https://uxplanet.org/designing-perspectives-instead-of-solutions-6afb4b03c1a5">
                https://uxplanet.org/designing-perspectives-instead-of-solutions-6afb4b03c1a5
              </a>
            </div>
            <div className="article">
              <p>You Probably Don't Need Derived State</p>
              <a href="https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html">
                https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html
              </a>
            </div>
            <div className="article">
              <p>Web Performance with Webpack</p>
              <a href="https://frontendmasters.com/courses/performance-webpack/">
                https://frontendmasters.com/courses/performance-webpack/
              </a>
            </div>
            <div className="article">
              <p>How To Sell Strategy Without Design or Visuals</p>
              <a href="https://www.youtube.com/watch?v=dKIyObgkBVI">
                https://www.youtube.com/watch?v=dKIyObgkBVI
              </a>
            </div>
            <div className="article">
              <p>JavaScript&#8202;: The Hard Parts</p>
              <a href="https://frontendmasters.com/courses/javascript-hard-parts/">
                https://frontendmasters.com/courses/javascript-hard-parts/
              </a>
            </div>
            <div className="article">
              <p>Advanced SVG Animation</p>
              <a href="https://frontendmasters.com/courses/svg-animation/">
                https://frontendmasters.com/courses/svg-animation/
              </a>
            </div>
          </Stuff>
        </Block>
        <Block>Contact</Block>
      </Main>
    );
  }
}

export default App;
