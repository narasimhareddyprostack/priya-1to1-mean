import React from "react";
import Order from "./Order";
class Product extends React.Component {
  message = "Welcome to Product Page";
  prod_Obj = {
    id: 101,
    p_Name: "iphone 12",
    price: "100USD",
  };
  
  render() {
    let x = 10;
    return (
      <div>
        <Order one={this.message} two={this.prod_Obj} three={x} />
      </div>
    );
  }
}
export default Product;
