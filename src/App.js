import React, { Component } from "react";
import styled, { keyframes } from "styled-components";
import HoveringShapeBackground from "./hoveringShape";
import LogoStack from "./LogoStack";
import FirstVec from "./FirstVec";
import LastVec from "./LastVec";
import Hamburger from "./Hamburger";
import IERepelant from "./IERepelant";
import Article from "./Article";
import recentPicksArray from "./recentPicksArray";
import {
  GitHubIcon,
  LinkedInIcon,
  Trio,
  CodePenIcon,
  ContactIcon
} from "./SvgLib";

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

const leftIn = keyframes`
  from {
    transform: translateX(-240px);
  }

  to {
    transform: translateX(0px);
  }
`;

const upIn = keyframes`
  from {
    transform: translateY(200px);
  }

  to {
    transform: translateY(0px);
  }
`;

const LinkBlock = styled.div`
  animation: ${leftIn} 4s cubic-bezier(0.19, 1, 0.22, 1) forwards;
  display: flex;
  justify-content: space-around;
  position: absolute;
  top: 1.95rem;
  left: 1.3rem;
  width: 120px;
  @media (min-width: 600px) {
    width: 200px;
    > a > svg {
      width: 30px;
      height: 30px;
    }
  }
`;

const Introduction = styled.div`
  width: 100%;
  animation: ${upIn} 6s cubic-bezier(0.19, 1, 0.22, 1) forwards;
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  top: 82vh;
  h1,
  h2 {
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
  margin-top: 400px;
  .about {
    font-size: 1.7rem;
    width: 100%;
    text-align: center;
    padding-left: 20px;
    margin-bottom: 100px;
    letter-spacing: 16px;
  }
  .aboutContainer {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    line-height: 1.6;
    align-items: flex-start;
    max-width: 1300px;
    margin: auto;
  }
  .infoLogoBlock {
    flex-grow: 1;
    display: flex;
    padding: 2rem;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    .info {
      width: 100%;
      font-size: 1.125rem;
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
    flex-grow: 1;
    display: flex;
    padding: 2rem;
    padding-top: 150px;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    p {
      text-align: center;
      max-width: 500px;
      margin-bottom: 3rem;
    }
    span {
      padding: 3px;
    }
    .skillIconsContainer {
      display: flex;
      align-items: center;
      justify-content: center;
      position: relative;
      width: 230px;
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
  align-items: center;
  align-content: center;
  justify-content: center;
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
  .articleContainer {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    > * {
      align-self: flex-start;
      margin: 1.2rem 1rem;
      @media (min-width: 900px) {
        margin: 1.2rem 1.2rem;
      }
      @media (min-width: 1300px) {
        margin: 1.3rem 1.3rem;
      }
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
    margin-bottom: 40px;
  }
  .contactIconContainer {
    margin: 20px;
    @media (min-width: 400px) {
      margin: 40px;
    }
    &:hover {
      transform: scale(1.1);
    }
    transition: all 0.1s ease-in;
  }
  .but {
    margin-top: 40px;
    color: white;
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

const EndLinkBlock = styled.div`
  margin-top: 50px;
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

class App extends Component {
  state = {
    inIE: false || !!document.documentMode,
    openMenu: false,
    discoMode: false
  };

  toggleDisco = () => {
    this.setState(prev => {
      return {
        discoMode: !prev.discoMode
      };
    });
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
    if (this.state.inIE) {
      return <IERepelant />;
    }
    return (
      <Main lock={this.state.openMenu}>
        <FirstVec />
        <LastVec className="lastVec" />
        <HoveringShapeBackground discoMode={this.state.discoMode} />
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
          <h1 className="name">
            CONOR{" "}
            <span
              style={{ cursor: "pointer" }}
              onClick={() => this.toggleDisco()}
            >
              O
            </span>
            'FLANAGAN
          </h1>
          <h2 className="tag">CLOUD ARTISAN</h2>
        </Introduction>
        <Hamburger
          isOpen={this.state.openMenu}
          toggle={this.handleMenuToggle}
        />
        <Slider toggle={this.handleMenuToggle} show={this.state.openMenu} />
        <About id="aboutHandle">
          <h2 className="about">ABOUT</h2>
          <div className="aboutContainer">
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
                able to leverage a formal blend of skills in{" "}
                <span
                  style={{
                    fontFamily: "'Press Start 2P', cursive",
                    fontWeight: 1000,
                    whiteSpace: "nowrap",
                    color: "#05c205"
                  }}
                >
                  computer&#8239;science
                </span>
                ,{" "}
                <span
                  style={{
                    fontFamily: "Prata, serif",
                    fontWeight: 1000,
                    color: "hsla(28, 100%, 89%, 1)",
                    fontSize: "1.5rem"
                  }}
                >
                  business
                </span>{" "}
                and{" "}
                <span
                  style={{
                    fontFamily: "Helvetica",
                    fontWeight: 'bold',
                    fontSize: "1.6rem",
                    color: "hsl(4, 100%, 58%)"
                  }}
                >
                  design
                  <br />
                </span>{" "}
                to solve big problems.
              </p>
              <div className="skillIconsContainer">
                <Trio />
              </div>
            </div>
          </div>
        </About>
        <Stuff id="stuffHandle">
          <h2 className="stuffTitle">RECENT PICKS</h2>
          <div className="articleContainer">
            {recentPicksArray.map(({ title, link, type }) => (
              <Article key={title} title={title} link={link} type={type} />
            ))}
          </div>
        </Stuff>
        <Contact id="contactHandle">
          <h2>THANKS FOR VISITING, SAY HI!</h2>
          <a
            className="contactIconContainer"
            href="mailto:oflanac52@gmail.com?Subject=Hi%20Conor"
            target="_top"
          >
            <ContactIcon />
          </a>
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
