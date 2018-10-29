import React, { Component } from "react";
import styled from "styled-components";
import HoveringShapeBackground from "./hoveringShape";
import LogoStack from "./LogoStack";
import FirstVec from "./FirstVec";
import LastVec from "./LastVec";
import Hamburger from "./Hamburger";
import { GitHubIcon, LinkedInIcon, Trio, CodePenIcon } from "./SvgLib";

const Main = styled.main`
  width: 100%;
  overflow-x: hidden;
  position: relative;
  background: linear-gradient(
    90deg,
    hsla(205, 57%, 5%, 1),
    hsla(205, 57%, 20%, 1)
  );

  h2 {
    font-family: Cabin, monospace;
  }
`;

const LinkBlock = styled.div`
  display: flex;
  justify-content: space-around;
  position: absolute;
  top: 1.95rem;
  left: 1.3rem;
  width: 120px;
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
    font-family: Cabin, monospace;
    font-size: 16px;
    letter-spacing: 5px;
    font-weight: 600;
    margin-top: 0;
  }

  .tag {
    margin-top: 10px;
    font-size: 12px;
    font-weight: normal;
  }
`;

const About = styled.div`
  position: relative;
  min-height: 500px;
  padding-top: 20px;
  margin-top: calc(950px - 95vh);
  .about {
    font-size: 2rem;
    width: 100%;
    text-align: center;
    padding-left: 20px;
    letter-spacing: 20px;
  }

  .infoLogoBlock {
    width: 100%;
    display: flex;
    margin-top: 100px;
    padding: 2rem;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    .info {
      width: 100%;
      max-width: 50ch;
      margin-bottom: 50px;
      text-align: center;
    }

    .logoContainer {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 200px;
      min-width: 200px;
    }
  }

  .skills {
    display: flex;
    margin-top: 20px;
    padding: 2rem;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    p {
      text-align: center;
      max-width: 500px;
      margin-bottom: 3rem;
    }
    .skillIconsContainer {
      display: flex;
      align-items: center;
      justify-content: center;
      position: relative;
      width: 75%;
      svg {
        max-width: 350px;
      }
    }
  }
`;

const Stuff = styled.div`
  display: flex;
  margin-top: 200px;
  overflow: hidden;
  min-height: 500px;
  flex-direction: column;
  align-items: flex-end;
  position: relative;
  padding: 2rem;
  .stuffTitle {
    font-weight: normal;
    right: 2rem;
    letter-spacing: 10px;
    font-weight: bold;
    width: 100%;
    text-align: center;
    margin-bottom: 100px;
  }
  .article {
    align-self: flex-start;
    display: flex;
    word-wrap: break-word;
    flex-direction: column;
    margin-bottom: 3rem;
    a {
      color: lightblue;
      word-break: break-all;
      font-size: 10px;
      line-height: 1.5;
    }
  }
`;

const Contact = styled.div`
  padding: 2rem;
  position: relative;
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  h2 {
    text-align: center;
    letter-spacing: 2px;
  }
  .but {
    margin-top: 80px;
    background: red;
    width: 170px;
    box-shadow: 0px 3px 0px 0px #a80000;
    height: 50px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    text-decoration: none;
    letter-spacing: 2px;
    font-weight: bold;
    text-align: center;
    align-self: center;
    &:active {
      transform: translateY(3px);
      box-shadow: none;
    }
  }
`;

const SliderContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  overflow: hidden;
  background-color: rgba(0, 0, 0, 0.8);
  ${props =>
    !props.show ? "transform: translate(100%)" : "transform: translate(0%)"};
  min-width: 100%;
  min-height: 100vh;
  transition: all 0.6s ease;

  > div {
    color: white;
    margin-top: 25vh;
    font-family: Cabin, monospace;
    font-size: 20px;
    letter-spacing: 5px;
    font-weight: bold;
    display: flex;
    height: 50vh;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    text-align: center;
    > a {
      text-decoration: none;
    }
  }
`;

const Slider = ({ toggle, show }) => {
  return (
    <SliderContainer show={show}>
      <div>
        <a onClick={toggle} href="#aboutHandle">
          ABOUT
        </a>
        <a onClick={toggle} href="#stuffHandle">
          RECENT PICKS
        </a>
        <a onClick={toggle} href="#contactHandle">
          CONTACT
        </a>
      </div>
    </SliderContainer>
  );
};

const EndLinkBlock = styled.div`
  margin-top: 100px;
  display: flex;
  width: 200px;
  justify-content: space-around;
  > a svg {
    opacity: 0.7;
    transition: all 0.2s;
    width: 40px;
    height: 40px;
    &:hover {
      opacity: 1;
    }
  }
`;

class App extends Component {
  state = {
    openMenu: false
  };

  handleMenuToggle = () => {
    const el = document.getElementById("root");
    el.scrollTop = "0px";
    if (el.style.overflowY === "hidden") {
      el.style.overflowY = "auto";
    } else {
      el.style.overflowY = "hidden";
    }
    this.setState(prev => {
      return {
        openMenu: !this.state.openMenu
      };
    });
  };

  render() {
    return (
      <Main lock={this.state.openMenu}>
        <FirstVec />
        <LastVec className="lastVec" />
        <HoveringShapeBackground />
        <LinkBlock>
          <a
            href="https://github.com/Cono52"
            rel="noopener noreferrer"
            target="_blank"
          >
            <GitHubIcon />
          </a>
          <a
            href="https://www.linkedin.com/in/conoroflanagan"
            rel="noopener noreferrer"
            target="_blank"
          >
            <LinkedInIcon />
          </a>
          <a
            href="https://codepen.io/Cono52"
            rel="noopener noreferrer"
            target="_blank"
          >
            <CodePenIcon />
          </a>
        </LinkBlock>
        <Introduction>
          <h1 className="name">CONOR O'FLANAGAN</h1>
          <p className="tag">CLOUD ARTISAN</p>
        </Introduction>
        <Hamburger
          isOpen={this.state.openMenu}
          toggle={this.handleMenuToggle}
        />
        <Slider toggle={this.handleMenuToggle} show={this.state.openMenu} />
        <About id="aboutHandle">
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
              business and design to solve big problems.
            </p>
            <div className="skillIconsContainer">
              <Trio />
            </div>
          </div>
        </About>
        <Stuff id="stuffHandle">
          <h2 className="stuffTitle">RECENT PICKS</h2>
          <div className="article">
            <p>The new syntax on top of javascript: ReasonML</p>
            <a
              rel="noopener noreferrer"
              arget="_blank"
              href="https://reasonml.github.io/"
            >
              https://reasonml.github.io/
            </a>
          </div>
          <div className="article">
            <p>Designing Perceptions Instead of Solutions</p>
            <a
              rel="noopener noreferrer"
              target="_blank"
              href="https://uxplanet.org/designing-perspectives-instead-of-solutions-6afb4b03c1a5"
            >
              https://uxplanet.org/designing-perspectives-instead-of-solutions-6afb4b03c1a5
            </a>
          </div>
          <div className="article">
            <p>You Probably Don't Need Derived State</p>
            <a
              rel="noopener noreferrer"
              target="_blank"
              href="https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html"
            >
              https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html
            </a>
          </div>
          <div className="article">
            <p>Web Performance with Webpack</p>
            <a
              rel="noopener noreferrer"
              target="_blank"
              href="https://frontendmasters.com/courses/performance-webpack/"
            >
              https://frontendmasters.com/courses/performance-webpack/
            </a>
          </div>
          <div className="article">
            <p>How To Sell Strategy Without Design or Visuals</p>
            <a
              rel="noopener noreferrer"
              target="_blank"
              href="https://www.youtube.com/watch?v=dKIyObgkBVI"
            >
              https://www.youtube.com/watch?v=dKIyObgkBVI
            </a>
          </div>
          <div className="article">
            <p>JavaScript&#8202;: The Hard Parts</p>
            <a
              rel="noopener noreferrer"
              target="_blank"
              href="https://frontendmasters.com/courses/javascript-hard-parts/"
            >
              https://frontendmasters.com/courses/javascript-hard-parts/
            </a>
          </div>
          <div className="article">
            <p>Advanced SVG Animation</p>
            <a
              rel="noopener noreferrer"
              target="_blank"
              href="https://frontendmasters.com/courses/svg-animation/"
            >
              https://frontendmasters.com/courses/svg-animation/
            </a>
          </div>
        </Stuff>
        <Contact id="contactHandle">
          <h2>Want me to help your team or product?</h2>
          <a
            className="but"
            href="mailto:oflanac52@gmail.com?Subject=Hi%20Conor"
            target="_top"
          >
            Send Email
          </a>
          <EndLinkBlock>
            <a
              href="https://github.com/Cono52"
              rel="noopener noreferrer"
              target="_blank"
            >
              <GitHubIcon />
            </a>
            <a
              href="https://www.linkedin.com/in/conoroflanagan"
              rel="noopener noreferrer"
              target="_blank"
            >
              <LinkedInIcon />
            </a>
            <a
              href="https://codepen.io/Cono52"
              rel="noopener noreferrer"
              target="_blank"
            >
              <CodePenIcon />
            </a>
          </EndLinkBlock>
        </Contact>
      </Main>
    );
  }
}

export default App;
