// function App() {
//   return <h2> Welcome to PSA</h2>;
// }
// export default App;
import React, { Component } from "react";
import Products from "./component/Products";

class App extends Component {
  render() {
    return (
      <>
        <h2> Welcome to PSA - Class Component</h2>
        <Products productName="iphone" />
      </>
    );
  }
}
export default App;
