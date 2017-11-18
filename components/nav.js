import React, { Component } from 'react'
import styled from 'styled-components';
import Link from 'next/link'

const NavContainer = styled.div`
    display: flex;
    padding: 1em;
    margin-bottom: 2em;
`;

const StyledLink = styled.div`
  font-size: 1em;
  padding: 1em;
`;

class Nav extends Component {
  render() {
    return (
      <NavContainer>
        <Link href="/">
          <StyledLink>Home</StyledLink>
        </Link>
        <Link href="/about">
          <StyledLink>About</StyledLink>
        </Link>
        <Link href="/work">
          <StyledLink>Work</StyledLink>
        </Link>
      </NavContainer>
    )
  }
}
export default Nav