import React from "react";
import store from "../store";
import TodoListComp from "../components/TodoListComp";

class TodoListContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <TodoListComp store={store}></TodoListComp>;
  }
}

export default TodoListContainer;
