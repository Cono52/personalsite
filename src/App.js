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
import prof from "./prof.webp";
import metricSnip from "./personal-sitelighthouse.webp";
import {
  GitHubIcon,
  LinkedInIcon,
  Trio,
  CodePenIcon,
  ContactIcon,
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
  h2,
  span {
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

  .aboutTitle {
    font-size: 1.7rem;
    width: 100%;
    text-align: center;
    padding-left: 20px;
    margin-bottom: 100px;
    letter-spacing: 13px;
  }

  .aboutContainer {
    display: flex;
    overflow: hidden;
    width: 100%;
    justify-content: center;
    flex-wrap: wrap;
  }

  .profileImageContainer {
    flex: 1;
    display: flex;
    min-width: 300px;
    justify-content: center;
  }

  .profileImageContainer img {
    object-fit: cover;
    width: 100%;
    max-width: 800px;
  }

  .rightSideProfile {
    flex: 1;
    min-width: 350px;
    margin: 25px;
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

  .skills {
    flex-grow: 1;
    display: flex;
    padding: 2rem;
    padding-top: 25px;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    p {
      text-align: center;
      max-width: 500px;
      margin-bottom: 3rem;
    }
     .logoContainer {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 200px;
      min-width: 200px;
    }
    span {
      padding: 3px;
    }
  }


  `;

const Services = styled.div`
  position: relative;
  min-height: 500px;
  padding-top: 20px;
  margin-top: 100px;
  .services {
    font-size: 1.7rem;
    width: 100%;
    text-align: center;
    padding-left: 20px;
    letter-spacing: 13px;
  }
  .serviceInfo {
    font-size: 1rem;
    padding: 2rem 2rem;
    width: 100%;
    color: white;
    text-align: center;
  }
  .servicesContainer {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
  }
  .servicesContainer img {
    width: 100%;
  }
  .serviceBlock {
    transition: all 0.15s ease-in-out;
    background: linear-gradient(-4deg, hsla(205, 57%, 5%, 1), hsl(205, 73%, 14%));
    border-radius: 2px;
    padding: 1rem 2.5rem 4rem 2.5rem;
    width: 600px;
    margin: 25px;
    line-height: 25px;
  }

  .serviceBlock h4 {
    font-size: 22px;
  }

  .serviceBlock:hover {
    transform: scale(1.02);
    &:after {
      opacity: 1;
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
    background: #a50000;
    width: 170px;
    box-shadow: 0px 3px 0px 0px #700000;
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
  ${(props) =>
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
    discoMode: false,
  };

  toggleDisco = () => {
    this.setState((prev) => {
      return {
        discoMode: !prev.discoMode,
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
    this.setState((prev) => {
      return {
        openMenu: !this.state.openMenu,
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
            aria-label="Github"
          >
            <GitHubIcon />
          </a>
          <a
            href="https://www.linkedin.com/in/conoroflanagan"
            rel="noopener noreferrer"
            target="_blank"
            aria-label="LinkedIn"
          >
            <LinkedInIcon />
          </a>
          <a
            href="https://codepen.io/Cono52"
            rel="noopener noreferrer"
            target="_blank"
            aria-label="codepen"
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
          <h2 className="tag">SOFTWARE DEVELOPER</h2>
        </Introduction>
        <Hamburger
          isOpen={this.state.openMenu}
          toggle={this.handleMenuToggle}
        />
        <Slider toggle={this.handleMenuToggle} show={this.state.openMenu} />
        <About id="aboutHandle">
          <h2 className="aboutTitle">ABOUT</h2>
          <div className="aboutContainer">
            <div class="profileImageContainer">
              <img src={prof} alt="profile" />
            </div>
            <div className="rightSideProfile">
              <div className="infoLogoBlock">
                <p className="info">
                  Based in London, I really like designing and building
                  performant and engaging web solutions.
                </p>
                <div className="skillIconsContainer">
                  <Trio />
                </div>
              </div>
              <div className="skills">
                <p>
                  My main expertise at the moment are in JavaScript, React.js
                  and Node.js.
                </p>
                <div className="logoContainer">
                  <LogoStack width={"100%"} />
                </div>
              </div>
            </div>
          </div>
        </About>
        <Services>
          <h2 className="services">SERVICES</h2>
          <h6 className="serviceInfo">
            Contact for quotes and availbility for any of the following services. Services are provided via standard single payments or subscription for longer-term maintenance.
          </h6>
          <div className="servicesContainer">
            <div className="serviceBlock">
                <h4>Build</h4>
                <p>
                  Any and all of the following services:
                </p>
                <ul>
                  <li>Large Web Applications.</li>
                  <li>Fast Static Websites (Blogs/Business Sites).</li>
                  <li>Progressive Web Apps.</li>
                  <li>Requirements gathering/vetting.</li>
                  <li>Proof-of-Concepts.</li>
                  <li>Chrome-Extensions and "drop-ins".</li>
                  <li>Discord Bots</li>
                  <li>Twitch/Streaming Overlays</li>
                  <li>UI/UX Design.</li>
                </ul>
              </div>
            <div className="serviceBlock">
              <h4>Audit</h4>
              <p>Having perfect metrics is critical for your sites ranking highly on search engines and getting the most traffic.</p>
              <br />
              <p>An audit will provide you with a report and clearly defined actions to allow you to have a top ranking web presence.</p>
              <br />
              <img src={metricSnip} alt={'Example Website Metrics'} />
            </div>
            <div className="serviceBlock">
              <h4>Mentor</h4>
              <p>
                Are you a new developer? Want to switch career? Or maybe need a crash course in developing modern frontends?
                <br /><br />Every person and team is different and a mentoring plan will help you fast-track your tech-career goals.
                <br /><br />Alternatively, feel free to reach out to me informally to see what we can do if you simply need some advice.
              </p>
            </div>
          </div>
        </Services>
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
            aria-label="Send Email"
          >
            <ContactIcon />
          </a>
          <a
            className="but"
            href="mailto:oflanac52@gmail.com?Subject=Hi%20Conor"
            target="_top"
            aria-label="Send Email"
          >
            Send Email
          </a>
          <EndLinkBlock>
            <a
              href="https://github.com/Cono52"
              rel="noopener noreferrer"
              target="_blank"
              aria-label="Github"
            >
              <GitHubIcon />
            </a>
            <a
              href="https://www.linkedin.com/in/conoroflanagan"
              rel="noopener noreferrer"
              target="_blank"
              aria-label="LinkedIn"
            >
              <LinkedInIcon />
            </a>
            <a
              href="https://codepen.io/Cono52"
              rel="noopener noreferrer"
              target="_blank"
              aria-label="CodePen"
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
