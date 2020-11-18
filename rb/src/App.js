import React, { Component } from "react";
//import Product from "./Ecom/Product";
import UploadProducts from "./Forms/UploadProducts";
import Index from "./Router/Index";
import User from "./AXIOS/User";
import UserForm from "./AXIOS/UserForm";

class App extends Component {
  render() {
    return (
      <>
        <UploadProducts />
      </>
    );
  }
}
export default App;
