import React, { Component } from 'react'
import styled, { keyframes } from 'styled-components';
import Typist from 'react-typist';

const expandIn = keyframes`
  from { transform: rotateY(90deg);}
  to { transform: rotateY(0deg);}
`;

const bounceIn = keyframes`
  from { transform: scale(0);}
  to { transform: scale(1);}
`;

// const fadeIn = keyframes`
//   from { opactiy: 0 }
//   to { opacity: 1 }
// `;

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
   background-color: rgb(5, 159, 167);;
   min-width: 100%;
   min-height: 100%;
   width: auto;
   height: auto;
   z-index: -99;
   opacity: 1;
`;

const Section = styled.div`
    grid-area: c;
    align-self: center;
    justify-self: center;
`;

const CardWrapper = styled.div`
    &::before {
    animation: 1s ${bracketsExpand} 1.6s ease-out forwards;
    position: absolute;
    color: white;
    transform: translate(142px, -38px);
    content: '{}';
    letter-spacing: 0em;
    z-index: 0;
    font-family: Helvetica;
    font-size: 20em;
  }
`;

const Card = styled.div`
  transform: rotateY(90deg);
  animation: 1.2s ${expandIn} 1.75s ease-out forwards;
  display: flex;
  width: 500px;
  height: 300px;
  box-sizing: border-box;
  flex-direction: column;
  background: black;
  padding: 6em 2em;
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
  font-size: 1.0em;
  font-weight: bold;
  line-height: 1.6em;
  color: #91ff00;

`;

// const FadeIn = styled.div`
//   opacity: 0;
//   animation: 1s ${fadeIn} ${props => props.delay ? props.delay : '0s' } linear forwards;
// `;

// const Widget = styled.div`
//   grid-area: w;
//   align-self: start;
//   justify-self: center;
// `;

class Home extends Component {
  render() {
    return (
       <HomeContainer>
          {/* <video autoPlay loop id="video-background" muted plays-inline='true'>
            <source src="assets/imgs/343645551.mp4" type="video/mp4" />
          </video> */}
          <Overlay />
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
          </Section>
          {/* <Widget>
            <FadeIn delay={'6s'}>
                <iframe title='spot' src="https://open.spotify.com/embed?uri=spotify:track:3ZOEytgrvLwQaqXreDs2Jx" width="300" height="80" frameBorder="0" allowtransparency="true"></iframe>
            </FadeIn>
          </Widget> */}
        </HomeContainer>
    )
  }
}

export default Home;