import React, { Component } from "react";
import axios from "axios";

class User extends Component {
  state = {
    users: [],
  };

  componentDidMount() {
    axios.get(`http://localhost:7000/users`).then((res) => {
      console.log(res.data);
      const users = res.data;
      console.log(users);
      this.setState({ users });
    });
  }
  render() {
    return (
      <div>
        <h1>Users</h1>
        <ul>
          {this.state.users.map((user) => {
            <li>{user.name}</li>;
          })}
        </ul>
      </div>
    );
  }
}

export default User;

//how to consume API in React JS
