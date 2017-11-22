import React, { Component } from 'react'
import styled from 'styled-components';

import Swirler from '../components/swirler'


const HomeContainer = styled.div`
    position: relative;
`;

const Section = styled.div`
    display: flex;
    height: 100vh;
    width: 100vw;
    align-items: center;
    padding-top: 8em;
`;

const SectionText = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  font-size: 5em;
  line-height: 1.2em;
  font-weight: bold;
  > div {
    padding: 0.10em 0.5em 0.1em 0.5em;
    margin-bottom: 1.8em;
    width: fit-content;
    background-color: white;
  }
`;

const Occup = styled.div`
  align-self: flex-end;
`;

class Home extends Component {
  render() {
    return (
      <HomeContainer>
        <Swirler />
        <Section>
            <SectionText>
              <div>
                <span>I'm Conor O'Flanagan</span>
              </div>
              <Occup>
                <p>— A software developer</p>
              </Occup>
            </SectionText>  
        </Section>
      </HomeContainer>
    )
  }
}

export default Home;