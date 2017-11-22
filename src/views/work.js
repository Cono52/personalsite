import React, { Component } from 'react'
import styled from 'styled-components'
import WorkSquare from '../components/work-square'

const WORK_LINKS = [
    '1',
    '2',
    '3',
    '4',
    '5',
    '6'
]

const Section = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100vw;
  align-items: center;
  justify-content: space-around;
  padding: 1em;
`;

const SectionText = styled.div`
  width: 100%;
  height: 4em;
  align-items: center;
  font-size: 1.5em;
  font-weight: bold;
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
      <Section>
          <SectionText>
            Small bits I have from interviews and POC's.
          </SectionText>
          <WorkSquareContainer>
            {WORK_LINKS.map((item, index) => <WorkSquare key={index} source={item} />)}
          </WorkSquareContainer>
      </Section>
    )
  }
}

export default Work