import React from "react";
//import Product from "./Product";
class Order extends React.Component {
  render() {
    const { one, two } = this.props;
    return (
      <div>
        <h1> {one} </h1>
        <hr />
        <h3> Product Details {two.p_name}</h3>
        {/* <h2>
          No Of Products: {three} {two.id}
        </h2> */}

        <h5>
          {" "}
          Price of {two.p_name} is: {two.price}
        </h5>
      </div>
    );
  }
}

export default Order;
// function comp returh JSX systexes, Javascript doesnt understand
