import React, { Component } from "react";
import styled, { keyframes } from "styled-components";
import { TimelineMax, Power2 } from "gsap";

const rightIn = keyframes`
  from {
    transform: translateX(100px);
  }

  to {
    transform: translateX(0px);
  }
`;

const Container = styled.div`
  animation: ${rightIn} 4s cubic-bezier(0.19, 1, 0.22, 1) forwards;
  position: absolute;
  z-index: 4;
  top: 2.05rem;
  right: 2rem;
  width: 30px;
  @media (min-width: 600px) {
    top: 2.55rem;
    right: 4.5rem;
  }
`;

const Line = styled.div`
  width: 100%;
  margin-bottom: 5px;
  height: 2px;
  background-color: #ccc;
`;

class Hamburger extends Component {
  constructor(props) {
    super(props);
    this.tlTop = new TimelineMax({ paused: true });
    this.tlBottom = new TimelineMax({ paused: true });
  }
  componentDidMount() {
    this.tlTop
      .to("#topline", 0.2, { y: 7 })
      .to("#topline", 0.2, {
        rotation: "45deg",
        transformOrigin: "50% 50%",
        ease: Power2.easeInOut
      })
      .pause(false)
      .reversed(true);
    this.tlBottom
      .to("#bottomline", 0.2, { y: -7 })
      .to(["#bottomline", "#middleline"], 0.2, {
        rotation: "-45deg",
        transformOrigin: "50% 50%",
        ease: Power2.easeInOut
      })
      .pause(false)
      .reversed(true);
  }

  componentDidUpdate() {
    if (!this.props.isOpen) {
      this.tlTop.reverse();
      this.tlBottom.reverse();
    } else {
      this.tlTop.play();
      this.tlBottom.play();
    }
  }

  render() {
    return (
      <Container onClick={this.props.toggle}>
        <Line id="topline" />
        <Line id="middleline" />
        <Line id="bottomline" />
      </Container>
    );
  }
}

export default Hamburger;
