import React, { Component } from 'react'
import styled from 'styled-components';

import Nav from '../components/nav'
import Footer from '../components/footer'


const AboutContainer = styled.div`
    position: relative;
`;

const Section = styled.div`
    display: flex;
    align-items: center;
    padding: 1em;
`;

const SectionText = styled.div`
  font-size: 3em;
  font-weight: bold;
  > p {
    margin-bottom: 2em;
  }
`;

class About extends Component {
  render() {
    return (
      <AboutContainer>
        <Nav />
        <Section>
          <SectionText>
            <p>I work at a startup called When You Move</p>
            <p>I'm working mainly with front-end tools such as React and React Native</p>
          </SectionText>  
        </Section>
        <Footer />
      </AboutContainer>
    )
  }
}
export default About