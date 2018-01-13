import React, { Component } from 'react'
import styled from 'styled-components';


const AboutContainer = styled.div`
    height: 150vh;
    display: grid;
    grid-gap: 5px;
    width: 100vw;
    grid-template-columns: repeat(12, 1fr);
    grid-template-rows: auto 200px 0px auto;
    grid-template-areas:
        ". . . . . . . . . . . ."
        ". w w w w w . . . . . ."
        ". . . . . . . . . . . ."
        ". . . . . . . . . . . .";
    position: relative;
    background-image: url("assets/imgs/background.jpg");
    background-size: cover;
    filter: grayscale(100%);
`;

const Copy = styled.div`
    grid-area: w;
`;

const SectionText = styled.div`
  border-radius: 2px;
  background-color: #800020;
  color: white;
  font-size: 1.5em;
  font-weight: 100;
  padding: 2em;
  > p {
    line-height: 1.5em;
  }
`;

class About extends Component {
  render() {
    return (
      <AboutContainer>
        <Copy>
          <SectionText>
            <p>I work at a startup called When You Move.<br/>
            I'm working mainly with front-end tools such as React and React Native.</p>
          </SectionText>
        </Copy>
      </AboutContainer>
    )
  }
}
export default About