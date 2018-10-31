import React, { Component } from "react";
import styled from "styled-components";
import animation from "./Animation";

const Container = styled.div`
  position: absolute;
  z-index: 4;
  top: 2.05rem;
  right: 2rem;
  width: 30px;
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
    this.state = {
      fire: animation.hamChange()
    }
  }

  componentWillReceiveProps(nextProps) {
    const { isOpen } = this.props;
    if (isOpen !== nextProps.isOpen) {
      this.state.fire();
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
