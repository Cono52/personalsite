import React, { Component } from 'react'
import styled from 'styled-components';

import Nav from '../components/nav'
import Footer from '../components/footer'


const HomeContainer = styled.div`
    position: relative;
`;

const Section = styled.div`
    background-color: fuchsia;
    display: flex;
    align-items: center;
    padding: 1em;
`;

const SectionText = styled.div`
  font-size: 3em;
  font-family: 'Helvetica';
  color: white;
  font-weight: bold;
  > p {
    margin-bottom: 2em;
  }
`;

class Home extends Component {
  render() {
    return (
      <HomeContainer>
        <Nav />
        <Section>
          <SectionText>
            <p>Hello, my name is Conor.</p>
            <p>I'm a software developer currently based in London</p>
          </SectionText>  
        </Section>
        <Footer />
      </HomeContainer>
    )
  }
}

export default Home;