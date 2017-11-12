import React, { Component } from 'react'
import styled from 'styled-components';

import Link from 'next/link'
import Footer from '../components/footer'


const HomeContainer = styled.div`
    position: relative;
`;

const Section = styled.div`
    background-color: brown;
`;

class Home extends Component {
  render() {
    return (
      <HomeContainer>
        <Section>
          <p>Hello, my name is Conor.</p>
          <p>I'm a software developer currently based in London</p>
        </Section>
        <Footer />
      </HomeContainer>
    )
  }
}

export default Home;