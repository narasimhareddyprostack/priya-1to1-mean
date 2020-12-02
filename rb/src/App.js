import React, { Component } from "react";
//import Product from "./Ecom/Product";
import UploadProducts from "./Forms/UploadProducts";
import Index from "./Router/Index";
import User from "./AXIOS/User";
import UserForm from "./AXIOS/UserForm";
import Counter from "./Counter/Counter";
import { Provider } from "react-redux";
import store from "./redux/store";
class App extends Component {
  render() {
    return (
      <>
        <Provider store={store}>
          <Counter />
        </Provider>
      </>
    );
  }
}
export default App;
