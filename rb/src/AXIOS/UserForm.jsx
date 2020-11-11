import React, { Component } from "react";
import Axios from "axios";

class UserForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      email: "",
    };
  }
  nameHandler = (e) => {
    this.setState({ name: e.target.value });
  };
  emailHandler = (e) => {
    this.setState({ email: e.target.value });
  };
  formHandler = (e) => {
    e.preventDefault();
    const user = this.state.user;
    Axios.post("http://localhost:7000/addUser", user)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  render() {
    return (
      <div>
        <form onSubmit={this.formHandler}>
          <label>User Name</label>
          <input
            type="text"
            value={this.state.name}
            onChange={this.nameHandler}
          />{" "}
          <br />
          <label>Email</label>
          <input
            type="text"
            value={this.state.email}
            onChange={this.emailHandler}
          />{" "}
          <br />
          <button type="submit"> submit</button>
        </form>
      </div>
    );
  }
}

export default UserForm;
