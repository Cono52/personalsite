import React, { Component } from 'react'
import styled from 'styled-components'

const Container = styled.div`
    display: flex;
    position: sticky;
    top: 0px;
    z-index: 2;
    align-content: center;
    justify-content: space-around;
    align-items: center;
    height: 3em;
    width: 100%;
    background-color: white;
`;

const Link = styled.div`

`;

class Nav extends Component {
    render () {
        return (
            <Container>
                <Link>
                    Home
                </Link>
                <Link>
                    About
                </Link>
                <Link>
                    Work
                </Link>
            </Container>
        )
    }
}

export default Nav