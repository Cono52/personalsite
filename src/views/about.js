import React, { Component } from 'react'
import styled from 'styled-components';


const AboutContainer = styled.div`
    position: relative;
`;

const Section = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
  background-image: url("assets/imgs/background.jpg");
  background-size: cover;
  align-items: center;
`;

const SectionText = styled.div`
  border-radius: 1px;
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
        <Section>
          <SectionText>
            <p>I work at a startup called When You Move.<br/>
            I'm working mainly with front-end tools such as React and React Native.</p>
          </SectionText>  
        </Section>
      </AboutContainer>
    )
  }
}
export default About