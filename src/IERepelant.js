import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  background-color: black;

  letter-spacing: 2px;
  text-align: center;

  p {
    font-family: "Times New Roman", Times, serif;
  }
`;

const IERepelant = () => {
  return (
    <Container>
      <p>
        Hello IE user......
        <br />
        <br />
        <br />
        .....stare into the abyss long enough ....and it will look back at you.
      </p>
    </Container>
  );
};

export default IERepelant;
