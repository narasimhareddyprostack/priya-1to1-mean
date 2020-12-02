import React, { Component } from "react";

class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userName: "",
      email: "",
      password: "",
    };
  }
  userNameHandler = (event) => {
    console.log(event.target.value);

    this.setState({ userName: event.target.value });
  };
  emailHandler = (event) => {
    this.setState({ email: event.target.value });
  };
  passwordHandler = (event) => {
    this.setState({ password: event.target.value });
  };
  submitHandler = (event) => {
    alert(
      this.state.email + "" + this.state.userName + "" + this.state.password
    );
    event.preventDefault();
  };
  render() {
    return (
      <div class="container col-xs-3">
        <form onSubmit={this.submitHandler}>
          <div class="form-group">
            <label> UserName </label>
            <input
              class="form-control"
              type="text"
              value={this.state.userName}
              onChange={this.userNameHandler}
            />
          </div>
          <div class="form-group">
            <label>Email</label>
            <input
              class="form-control"
              type="text"
              value={this.state.email}
              onChange={this.emailHandler}
            />
          </div>
          <div class="form-group">
            <label>Password</label>
            <input
              class="form-control"
              type="password"
              value={this.state.password}
              onChange={this.passwordHandler}
            />
          </div>
          <br />
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default Form;
