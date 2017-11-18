import React, { Component } from 'react'
import styled from 'styled-components';

import Nav from '../components/nav'
import Footer from '../components/footer'


const WorkContainer = styled.div`
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

class Work extends Component {
  render() {
    return (
      <WorkContainer>
        <Nav />
        <Section>
          <SectionText>
            Small bits I have from interviews and POC's.
          </SectionText>  
        </Section>
        <Footer />
      </WorkContainer>
    )
  }
}
export default Work