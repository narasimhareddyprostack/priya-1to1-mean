import React from "react";
class StateEx extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      product: {
        productName: "Iphone 12",
        productId: 101,
      },
    };
  }

  changeName() {
    console.log("inside changeName() ");
    this.setState({
      product: {
        productName: "Samsung",
        productId: 102,
      },
    });
  }
  display() {
    console.log("Test - working");
  }
  render() {
    return (
      <>
        <h3>Mobile : {this.state.product.productName}</h3>
        <h3>Mobile : {this.state.product.productId}</h3> <br />
        <button onClick={() => this.changeName()}>Change Mobile</button>
        <button onClick={this.display}>Test</button>
      </>
    );
  }
}
export default StateEx;
//onclick='add()'
//changeName     - function
//changeName()   - function call
//even Handler should be function , not function call

//[ ]
//{ }
// ()=>{ this.changeName() }
/*
  this.setState({ productName: "Samsung" }, () => {});

*/
