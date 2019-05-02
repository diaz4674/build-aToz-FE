import React from "react";
import { connect } from "react-redux";
import { login } from "../actions";
import NavBar from './NavBar';
import {Form, Button} from 'react-bootstrap';

class LoginForm extends React.Component {
  state = {
    credentials: {
      users_email: "",
    users_password: ""}
  };
  
  login = event => {
    event.preventDefault();
    this.props.login(this.state.credentials).then(() => {
      this.props.history.push("/");
    });
  };
  handleChange = event => {
    this.setState({
      credentials: {
        ...this.state.credentials,
        [event.target.name]: event.target.value
      }
    });
  };

  render() {
    return (
      <>
      <NavBar />
      
        <div className="login-page-wrapper">
        <h2>Login</h2>
        <Form onSubmit={this.login} className ='loginForm'>
        <Form.Group controlId="formBasicEmail" >
          <Form.Label>Email</Form.Label>
          <Form.Control               
            type="text"
            name="users_email"
            placeholder="Email"
            value={this.state.credentials.users_email}
            onChange={this.handleChange}
            required/>
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control               
              type="password"
              name="users_password"
              placeholder="Password"
              value={this.state.credentials.users_password}
              onChange={this.handleChange}
              required />
        </Form.Group>
        <Button variant="danger" type="submit">
          Submit
        </Button>
        </Form>
        </div>
      </>
    );
  }
}

const mapStateToProps = state => {
  return {
    isLoggingIn: state.isLoggingIn
  };
};

export default connect(
  mapStateToProps,
  { login }
)(LoginForm);
