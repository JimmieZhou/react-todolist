import React from "react";
import { Provider } from "react-redux";
import store from "../store";
import TodoListContaner from "./TodoListContaner";
class AppContainer extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <TodoListContaner></TodoListContaner>
      </Provider>
    );
  }
}

export default AppContainer;
