import React, { Component } from "react";
import Counter from "./component/counter/Counter";
import Message from "./component/wish/Message";
import { store } from "./redux/store";
//to connect react comp  - redux store
import { Provider } from "react-redux";
class App extends Component {
  render() {
    return (
      <>
        <Provider store={store}>
          <Counter />
          <Message />
        </Provider>
      </>
    );
  }
}
export default App;
