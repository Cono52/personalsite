import React, { Component } from 'react'
import styled from 'styled-components';

import Nav from '../components/nav'
import Footer from '../components/footer'
import Swirler from '../components/swirler'


const HomeContainer = styled.div`
    position: relative;
`;

const Section = styled.div`
    display: flex;
    align-items: center;
    padding: 1em;
`;

const SectionText = styled.div`
  font-size: 10em;
  line-height: 1.2em;
  font-weight: bold;
  > p {
    margin-bottom: 1.5em;
  }
`;

class Home extends Component {
  render() {
    return (
      <HomeContainer>
        <Swirler />
        <Nav />
        <Section>
          <SectionText>
            <p>Hello</p>
            <p>My name is Conor</p>
            <p>I'm a software developer currently based in London</p>
          </SectionText>  
        </Section>
      </HomeContainer>
    )
  }
}

export default Home;