import React, { Component } from "react";
import styled from "styled-components";

const AboutContainer = styled.div`
  position: relative;
  background-image: url("assets/imgs/background.jpg");
  background-size: cover;
`;

const Grid = styled.div`
  height: 140vh;
  display: grid;
  grid-gap: 5px;
  width: 100vw;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: auto 200px 0px auto;
  grid-template-areas:
    ". . . . . . . . . . . ."
    ". w w w w w . . . . . ."
    ". . . . . . . . . . . ."
    ". . . . . . . . . . . .";
`;

const Copy = styled.div`
  grid-area: w;
`;

const Overlay = styled.div`
  top: 0;
  position: absolute;
  background-color: rgb(5, 159, 167);
  min-width: 100%;
  min-height: 100%;
  width: auto;
  z-index: 0;
  height: auto;
  opacity: 0.4;
`;

const SectionText = styled.div`
  border-radius: 2px;
  background-color: #800020;
  color: white;
  font-size: 1.5em;
  font-weight: 100;
  padding: 2em;
  > p {
    line-height: 1.5em;
  }
`;

class About extends Component {
  render() {
    return (
      <AboutContainer>
        <Overlay />
        <Grid>
          <Copy>
            <SectionText>
              <p>
                Right now, I'm a front-end developer at When You Move.
                <br />
              </p>
            </SectionText>
          </Copy>
        </Grid>
      </AboutContainer>
    );
  }
}
export default About;
