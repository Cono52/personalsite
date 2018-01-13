import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Container = styled.div`
    display: flex;
    align-content: center;
    justify-content: space-around;
    width: 20em;
    height: 13em;
    background-color: white;
`;

class WorkSquare extends Component {
    render () {
        return (
            <Container>
            {`Source: ${this.props.source}`}
            </Container>
        )
    }
}

export default WorkSquare;

WorkSquare.propTypes = {
    source: PropTypes.string.isRequired
}