import React, { Component } from 'react'
import styled from 'styled-components';


const AboutContainer = styled.div`
    position: relative;
`;

const Section = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
  align-items: center;
  padding: 1em;
`;

const SectionText = styled.div`
  font-size: 1.5em;
  font-weight: bold;
  > p {
    margin-bottom: 2em;
  }
`;

class About extends Component {
  render() {
    return (
      <AboutContainer>
        <Section>
          <SectionText>
            <p>I work at a startup called When You Move</p>
            <p>I'm working mainly with front-end tools such as React and React Native</p>
          </SectionText>  
        </Section>
      </AboutContainer>
    )
  }
}
export default About