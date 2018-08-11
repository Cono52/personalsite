import React, { Component } from "react";
import styled, { keyframes } from "styled-components";
import Typist from "react-typist";

import ContactForm from "../components/contact-form";

const expandIn = keyframes`
  from { transform: rotateY(90deg);}
  to { transform: rotateY(0deg);}
`;

const bounceIn = keyframes`
  from { transform: scale(0);}
  to { transform: scale(1);}
`;

const bracketsExpand = keyframes`
  from {
    letter-spacing: 0em;
    transform: translate(142px, -38px);
  }
  to {
    letter-spacing: 1.65em;
    transform: translate(-120px, -38px);
  }
`;

const HomeContainer = styled.div`
  height: 100vh;
  display: grid;
  grid-gap: 5px;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: 100px auto 100px;
  grid-template-areas:
    ". . . . . . . . . . . ."
    ". . . c c c c c c . . ."
    ". . . . . w w . . . . .";
  position: relative;
  > video {
    position: fixed;
    right: 0;
    bottom: 0;
    min-width: 100%;
    min-height: 100%;
    width: auto;
    height: auto;
    z-index: -100;
  }
`;

const Overlay = styled.div`
  position: fixed;
  right: 0;
  bottom: 0;
  background-color: rgb(5, 159, 167);
  min-width: 100%;
  min-height: 100%;
  width: auto;
  height: auto;
  z-index: -99;
  opacity: 1;
  @media (max-width: 750px) {
    background: black;
  }
`;

const Section = styled.div`
  grid-area: c;
  align-self: center;
  justify-self: center;
`;

const CardWrapper = styled.div`
  overflow: auto;
  max-height: 300px;
  &::before {
    animation: 1s ${bracketsExpand} 1.6s ease-out forwards;
    position: absolute;
    color: white;
    transform: translate(142px, -38px);
    content: "{}";
    @media (max-width: 750px) {
      color: black;
    }
    letter-spacing: 0em;
    z-index: -1;
    font-family: Helvetica;
    font-size: 20em;
  }
`;

const Card = styled.div`
  transform: rotateY(90deg);
  animation: 1.2s ${expandIn} 1.75s ease-out forwards;
  display: flex;
  width: 500px;
  height: 500px;
  box-sizing: border-box;
  flex-direction: column;
  background: black;
  padding: 6em 2em;
  @media (max-width: 750px) {
    height: 520px;
    padding: 3em 2em;
  }
`;

const HeadShot = styled.div`
  transform: translateY(-1000px);
  animation: 1s ${bounceIn} 2.6s cubic-bezier(0, 0, 0.28, 1.22) forwards;
  width: 110px;
  height: 110px;
  top: 5.1em;
  right: 2em;
  border-radius: 50%;
  position: absolute;
  @media (max-width: 750px) {
    position: static;
    margin-top: 20px;
  }
  overflow: hidden;
  margin-left: auto;
  margin-right: auto;
  > img {
    display: inline;
    margin: 0 auto;
    height: 100%;
    width: auto;
  }
`;

const CardText = styled.div`
  width: 20em;
  font-size: 1em;
  font-weight: bold;
  @media (max-width: 750px) {
    width: 71%;
    margin: 0 auto;
  }
  line-height: 1.6em;
  color: #91ff00;
`;

class Home extends Component {
  render() {
    return (
      <HomeContainer>
        <Overlay />
        <Section>
          <CardWrapper>
            <Card>
              <CardText>
                <Typist>
                  <Typist.Delay ms={2500} />
                  Hi, my name is Conor O'Flanagan.
                  <br />
                  I'm a software developer currently based in London.
                </Typist>
              </CardText>
              <HeadShot>
                <img
                  src="https://avatars1.githubusercontent.com/u/10832455?s=460&v=4"
                  alt="pic"
                />
              </HeadShot>
            </Card>
            <ContactForm />
          </CardWrapper>
        </Section>
      </HomeContainer>
    );
  }
}

export default Home;
