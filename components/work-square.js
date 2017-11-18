import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Container = styled.div`
    width: 15em;
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

WorkSquare.PropTypes = {
    source: PropTypes.string.isRequired
}