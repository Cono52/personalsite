import React, { Component } from 'react'
import styled, { keyframes } from 'styled-components';

const HomeContainer = styled.div`
    position: relative;
    > video {
      position: fixed;
      right: 0; 
      bottom: 0;
      filter: brightness(.4);
      min-width: 100%; 
      min-height: 100%;
      width: auto; 
      height: auto;
      z-index: -100;
    }
`;


const Section = styled.div`
    display: flex;
    width: 100vw;
    height: calc(100vh - 5em);
    align-items: center;
    justify-content: space-around;
`;


const slideInLeft = keyframes`
 from { transform: translateX(-1000px);}
 to { transform: translateX(0px);}`;

const slideInTop = keyframes`
from { transform: translateY(-1000px);}
to { transform: translateY(0px);}`;

const slideInRight = keyframes`
from { transform: translateX(1000px);}
to { transform: translateX(0px);}`;

const fadeIn = keyframes`
from { opactiy: 0 }
to { opacity: 1 }`;


const SectionText = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  box-sizing: border-box;
  flex-direction: column;
  font-size: 4em;
  line-height: 1.2em;
  font-weight: lighter;
  > .text {
    z-index: 2;
    margin: 1.5em 0em; 
    padding: 0.25em 1em;
    border-radius: 1px;
    width: 55%;
    color: white;
    background-color: #66001A;
  }
`;

const HeadShot = styled.div`
  transform: translateY(-1000px);
  animation: 2s ${slideInTop} 3.0s ease forwards;
  width: 200px;
  box-shadow: 0px 0px 0px 3px white;
  height: 200px;
  top: 50px;
  left: calc(100% - 9em);
  border-radius: 50%;
  position: absolute;
  z-index: -1;
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

const FadeIn = styled.span`
  opacity: 0;
  animation: 1s ${fadeIn} ${props => props.delay ? props.delay : '0s' } linear forwards;
`;

const Name = styled.div`
  animation: 3.0s ${slideInLeft} 0.5s cubic-bezier(0, 0, 0.28, 1.12) forwards;
  box-shadow: -300px 0px 0px 0px #66001A;
  transform: translateX(-1000px);
`;

const Occup = styled.div`
  transform: translateX(1000px);
  box-shadow: 300px 0px 0px 0px #66001A;
  animation: 3.0s ${slideInRight} 0.5s cubic-bezier(0, 0, 0.28, 1.12) forwards;
  width: 55%;
  font-weight: 400;  
  align-self: flex-end;
`;

class Home extends Component {
  render() {
    return (
      <HomeContainer>
        <video autoPlay loop id="video-background" muted plays-inline>
          <source src="assets/imgs/343645551.mp4" type="video/mp4" />
        </video>
        <Section>
            <SectionText>
              <Name className="text">
                <FadeIn delay={'4s'}>I'm Conor O'Flanagan</FadeIn>
              </Name>
              <HeadShot>
                <img src="https://media.licdn.com/mpr/mpr/shrinknp_400_400/AAEAAQAAAAAAAAjNAAAAJGRmODMzYmQxLWM3MzMtNDY1Ny1hZTIzLTVhZTcyZDcyNjhmNg.jpg" alt="pic"/>
              </HeadShot>
              <Occup className="text">
                <FadeIn delay={'5s'}>— A software developer</FadeIn>
              </Occup>
            </SectionText>  
        </Section>
      </HomeContainer>
    )
  }
}

export default Home;