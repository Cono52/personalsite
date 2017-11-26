import React, { Component } from 'react'
import styled, { keyframes } from 'styled-components';
import Typist from 'react-typist';

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
    flex-direction: column;
    width: 100vw;
    padding-top: 10em;
    height: calc(100vh - 5em);
    align-items: center;
`;

const expandIn = keyframes`
from { transform: rotateY(90deg);}
to { transform: rotateY(0deg);}`;

const bracketsExpand = keyframes`
  from { 
    letter-spacing: 0em;
    transform: translate(142px, -38px);
  }
  to { 
    letter-spacing: 1.7em;
    transform: translate(-130px, -38px);
  }
`;


const bounceIn = keyframes`
from { transform: scale(0);}
to { transform: scale(1);}`;

const fadeIn = keyframes`
from { opactiy: 0 }
to { opacity: 1 }`;

const CardWrapper = styled.div`
    &::before {
    animation: 1s ${bracketsExpand} 0.5s ease-out forwards;
    position: absolute;
    color: hsla(345, 100%, 30%, 0.8);
    transform: translate(142px, -38px);
    content: '{}';
    letter-spacing: 0em;
    z-index: 0;
    font-family: Helvetica;
    font-size: 20em;
  }
  padding-bottom: 4em;
`;

const Card = styled.div`
  transform: rotateY(90deg);
  animation: 1.2s ${expandIn} 0.7s ease-out forwards;
  display: flex;
  width: 500px;
  height: 300px;
  box-sizing: border-box;
  flex-direction: column;
  background-color: white;
  /* box-shadow: 0px 0px 0px 10px white;
  border: solid 10px hsla(345, 100%, 30%, 0.8); */
  font-weight: bold;
  padding: 2em;
`;

const HeadShot = styled.div`
  transform: translateY(-1000px);
  animation: 1s ${bounceIn} 2.0s cubic-bezier(0, 0, 0.28, 1.22) forwards;
  width: 110px;
  height: 110px;
  top: 2em;
  right: 2em;
  border-radius: 50%;
  position: absolute;
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
  width: 16em;
  font-size: 1.2em;
  line-height: 1.3em;
  color: #5f5f5f;
`;

const FadeIn = styled.span`
  opacity: 0;
  animation: 1s ${fadeIn} ${props => props.delay ? props.delay : '0s' } linear forwards;
`;

class Home extends Component {
  render() {
    return (
      <HomeContainer>
        <video autoPlay loop id="video-background" muted plays-inline>
          <source src="assets/imgs/343645551.mp4" type="video/mp4" />
        </video>
        <Section>
            <CardWrapper>
              <Card>
                <CardText>
                  <Typist>
                    <Typist.Delay ms={2500} />
                    Hi, my name is Conor O'Flanagan.<br/>I'm a software developer currently based in London. 
                  </Typist>
                </CardText>
                <HeadShot>
                  <img src="https://media.licdn.com/mpr/mpr/shrinknp_400_400/AAEAAQAAAAAAAAjNAAAAJGRmODMzYmQxLWM3MzMtNDY1Ny1hZTIzLTVhZTcyZDcyNjhmNg.jpg" alt="pic"/>
                </HeadShot>
              </Card>  
            </CardWrapper>
            <FadeIn delay={'6s'}>
              <iframe src="https://open.spotify.com/embed?uri=spotify:track:3ZOEytgrvLwQaqXreDs2Jx" width="300" height="80" frameborder="0" allowtransparency="true"></iframe>
            </FadeIn>
        </Section>
      </HomeContainer>
    )
  }
}

export default Home;