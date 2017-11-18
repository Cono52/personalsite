import React, { Component } from 'react'
import styled from 'styled-components'

import Nav from '../components/nav'
import WorkSquare from '../components/work-square'
import Footer from '../components/footer'

const WORK_LINKS = [
    '1',
    '2',
    '3',
    '4',
    '5',
    '6'
]

const WorkContainer = styled.div`
    position: relative;
`;

const Section = styled.div`
  background-color: white;
  padding: 1em;
`;

const SectionText = styled.div`
  width: 100%;
  height: 4em;
  align-items: center;
  font-size: 2em;
  font-weight: bold;
  > p {
    margin-bottom: 2em;
  }
`;

const WorkSquareContainer = styled.div`
    width: 100%;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: space-around;
    > * {
        margin: 2em;
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
          <WorkSquareContainer>
            {WORK_LINKS.map((item, index) => <WorkSquare key={index} source={item} />)}
          </WorkSquareContainer>
        </Section>
        <Footer />
      </WorkContainer>
    )
  }
}

export default Work