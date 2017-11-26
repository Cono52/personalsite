import React, { Component } from 'react'
import styled, { keyframes } from 'styled-components'

const fadeIn = keyframes`
from { opactiy: 0 }
to { opacity: 1 }`;

const Container = styled.div`
    display: flex;
    position: sticky;
    opacity: 0;
    padding: 0 5em;
    top: 0px;
    z-index: 5;
    font-size: 1.2em;
    color: ${ props => props.scroll > 1300 ? 'black': 'white'};
    align-items: center;
    height: 4em;
    width: 100%;
    animation: 1.0s ${fadeIn}  2.5s ease-in forwards;
`;

const Link = styled.span`
    cursor: pointer;
    margin-top: 2em;
    margin-right: 6.0em;
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
       color: hsla(345, 100%, 30%, 0.8);
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
            <Container scroll={window.scrollY}>
                <Link onClick={() => this.scroll(0)}>
                 Home
                </Link>
                <Link onClick={() => this.scroll(770)}>
                About
                </Link>
                <Link onClick={() => this.scroll(1543)}>
                Work
                </Link>
            </Container>
        )
    }
}

export default Nav