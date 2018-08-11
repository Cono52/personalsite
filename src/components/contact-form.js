import React, { Component } from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  @media (max-width: 750px) {
    width: 59%;
    margin: 0 auto;
  }
  font-size: 1em;
  height: 100px;
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

const SubmitButton = styled.a`
  background-color: black;
  outline: 0;
  border: 1px solid #7ad700;
  height: 35px;
  width: 200px;
  color: inherit;
  font-family: inherit;
  box-shadow: 0px 4px 0px 0px;
  font-weight: inherit;
  font-size: 1.5rem;

  padding-top: 4px;
  text-decoration: none;
  text-align: center;

  &:active {
    box-shadow: 0px 0px 0px 0px;
    border: 1px solid #7ad700;
    transform: translateY(4px);
  }

  &:focus,
  :visited {
    border: 1px solid #7ad700;
  }

  transition: all 0.03s ease-in;
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

  handleSubmit = e => {
    e.preventDefault();
  };

  render() {
    return (
      <Container>
        Interested in working with me?
        <StyledForm onSubmit={this.handleSubmit} autocomplete="on">
          <SubmitButton href="mailto:conorboflanagan@hotmail.com">
            Email me!
          </SubmitButton>
        </StyledForm>
      </Container>
    );
  }
}

export default ContactForm;
