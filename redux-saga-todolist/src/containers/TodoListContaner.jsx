import React from "react";
import { connect } from "react-redux";
import TodoListComp from "../components/TodoListComp";
import {
  initItemAsync,
  addItemAsync,
  deleteItemAsync,
  updateItemAsync
} from "../actions/todoActions";

class TodoListContainer extends React.Component {
  componentDidMount() {
    this.props.initItem();
  }

  render() {
    return <TodoListComp {...this.props} />;
  }
}

const mapStateToProps = state => {
  return {
    todoState: state.todoState
  };
};

const mapDispathToProps = dispatch => {
  return {
    initItem: () => {
      dispatch(initItemAsync());
    },
    handleAddClick: item => {
      dispatch(addItemAsync(item));
    },
    handleDeleteClick: item => {
      dispatch(deleteItemAsync(item));
    },
    handleUpdateClick: item => {
      dispatch(updateItemAsync(item));
    }
  };
};

export default connect(mapStateToProps, mapDispathToProps)(TodoListContainer);
