import React, { Component } from "react";

//Destructuring Object

export class Products extends Component {
  render() {
    return <h1> Product Name :{this.props.productName} </h1>;
  }
}

export default Products;
