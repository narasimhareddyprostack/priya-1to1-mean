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
    const user = {
      name: this.state.name,
      email: this.state.email,
    };
    Axios.post("http://localhost:9000/addUser", user)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
    e.preventDefault();
  };
  render() {
    return (
      <div>
        <div class="container col-md-6">
          <form onSubmit={this.formHandler}>
            <div class="form-group">
              <label>User Name</label>
              <input
                type="text"
                value={this.state.name}
                onChange={this.nameHandler}
                class="form-control"
              />
            </div>
            <div class="form-group">
              <label>Email</label>
              <input
                type="text"
                value={this.state.email}
                onChange={this.emailHandler}
                class="form-control"
              />
            </div>
            <button type="submit">submit</button>
          </form>
        </div>
      </div>
    );
  }
}

export default UserForm;
