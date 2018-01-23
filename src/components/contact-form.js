import React, { Component } from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  font-size: 1em;
  height: 600px;
  background-color: black;
  font-weight: bold;
  line-height: 1.6em;
  color: #91ff00;
  padding: 0em 2em;
`;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  font-family: inherit;
`;

const StyledInput = styled.textarea`
  box-shadow: 0px 0px 1px 1px;
  width: ${props => (props.large ? "100%" : "auto")};
  font-family: inherit;
  font-size: 1em;
  font-weight: bold;
  background-color: black;
  color: #91ff00;
  margin: 8px 0;
  box-sizing: border-box;
  border: none;
  outline-width: 0px;
  resize: none;

  &:focus {
    outline-width: 8px;
    outline-color: #91ff00;
    color: #91ff00;
  }
`;

const InputContainer = styled.div`
  display: flex;
  flex-direction: ${props => (props.direction ? props.direction : "row")};
  align-items: ${props => (props.direction ? "left" : "center")};
  > label {
    width: 75px;
  }
`;

class ContactForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      message: ""
    };
  }

  handleNameChange = e => {
    this.setState({ name: e.target.value });
  };

  handleEmailChange = e => {
    this.setState({ email: e.target.value });
  };

  handleMessageChange = e => {
    this.setState({ message: e.target.value });
  };

  handleSubmit = event => {};

  render() {
    return (
      <Container>
        Interested in working with me?
        <StyledForm onSubmit={this.handleSubmit}>
          <InputContainer>
            <label>Name:</label>
            <StyledInput
              rows="1"
              value={this.state.value}
              onChange={this.handleNameChange}
            />
          </InputContainer>
          <InputContainer>
            <label>Email:</label>
            <StyledInput
              rows="1"
              value={this.state.email}
              onChange={this.handleEmailChange}
            />
          </InputContainer>
          <InputContainer direction={"column"}>
            <label>Message:</label>
            <StyledInput
              large
              rows="8"
              columns="20"
              value={this.state.message}
              onChange={this.handleMessageChange}
            />
          </InputContainer>
          <input type="submit" value="Submit" />
        </StyledForm>
      </Container>
    );
  }
}

export default ContactForm;
