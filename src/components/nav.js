import React, { Component } from 'react'
import styled, { keyframes } from 'styled-components'

const fadeIn = keyframes`
from { opactiy: 0 }
to { opacity: 1 }`;

const Container = styled.div`
    display: flex;
    flex-direction: row;
    opacity: 0;
    color: white;
    font-size: 1.0em;
    align-items: center;
    justify-content: space-around;
    width: 100%;
    height: 100%;
    animation: 1.0s ${fadeIn}  2.5s ease-in forwards;
    grid-area: n;
`;

const Link = styled.span`
    cursor: pointer;
    display: inline-block;
	position: relative;
	transition: all 0.5s cubic-bezier(.55, 0, .1, 1);
    &::after {
        content: '';
        position: absolute;
        display: block;
        width: 100%;
        height: 2px;
        margin-top: -0.5em;
        background: white;
        transform-origin: center right;
        transform: scaleX(0);
        animation: strikethrough 1s 0.5s cubic-bezier(.55, 0, .1, 1) 1;
        transition: transform 0.5s cubic-bezier(.55, 0, .1, 1);
    }
    &:hover {
       color: hsla(345, 0%, 50%, 0.8);
    }
    &:hover:after {
        transform: scaleX(1);
        transform-origin: center left;
    }
`;

class Nav extends Component {

    scroll = (distance) => {
        window.scroll({
        top: distance,
        left: 0,
        behavior: 'smooth'
      });
    }

    render () {
        return (
            <Container grid-area={this.props.gridArea} scroll={window.scrollY}>
                <Link onClick={() => this.scroll(0)}>
                 Home
                </Link>
                <Link onClick={() => this.scroll(773)}>
                About
                </Link>
                <Link onClick={() => this.scroll(1553)}>
                Work
                </Link>
            </Container>
        )
    }
}

export default Nav