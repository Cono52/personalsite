import React, { Component } from "react";
import styled from "styled-components";

const FooterContainer = styled.div`
  position: absolute;
  top: calc(100vh - 17px);
`;

class Footer extends Component {
  render() {
    return <FooterContainer>© 2017 Conor O'Flanagan</FooterContainer>;
  }
}

export default Footer;
