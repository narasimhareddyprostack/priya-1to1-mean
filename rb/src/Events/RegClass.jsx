import React, { Component } from "react";

class RegClass extends Component {
  constructor(props) {
    super(props);

    this.state = {
      noProducts: 1,
    };
    //this.noProductsHandler = this.noProductsHandler.bind(this);
  }

  noProductsHandler = () => {
    console.log("Testing");
    this.setState({ noProducts: this.state.noProducts + 1 });
  };
  render() {
    return (
      <div>
        <h5>No of Product {this.state.noProducts}</h5>
        <button type="submit" onClick={this.noProductsHandler}>
          Incr
        </button>
      </div>
    );
  }
}

export default RegClass;
