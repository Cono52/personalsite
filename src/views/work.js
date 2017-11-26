import React, { Component } from 'react'
import styled from 'styled-components'
import WorkSquare from '../components/work-square'


import Swirler from '../components/swirler'


const WORK_LINKS = [
    '1',
    '2',
    '3',
    '4',
    '5',
    '6'
]

const Section = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100%;
  padding: 3em 0em;
  align-items: left;
  justify-content: space-around;
`;

const SectionText = styled.div`
  border-radius: 1px;
  background-color: #800020;
  font-size: 1.5em;
  font-weight: lighter;
  color: white;
  padding: 2em;
  > p {
    line-height: 1.5em;
  }
`;

const WorkSquareContainer = styled.div`
    width: 100%;
    max-width: 1450px;
    margin: auto;
    box-sizing: border-box;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    > * {
        margin: 2em;
    }
`;


class Work extends Component {
  render() {
    return (
      <Section>
        <WorkSquareContainer>
          {WORK_LINKS.map((item, index) => <WorkSquare key={index} source={item} />)}
        </WorkSquareContainer>
      </Section>
    )
  }
}

export default Work