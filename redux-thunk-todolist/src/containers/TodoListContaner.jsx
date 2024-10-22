import React from "react";
import { connect } from "react-redux";
import axios from "axios";
import TodoListComp from "../components/TodoListComp";
import {
  initItem,
  addItem,
  deleteItem,
  updateItem
} from "../actions/todoActions";

class TodoListContainer extends React.Component {
  componentDidMount() {
    this.props.initItem()
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
      dispatch(initItem());
    },
    handleAddClick: item => {
      dispatch(addItem(item));
    },
    handleDeleteClick: item => {
      dispatch(deleteItem(item));
    },
    handleUpdateClick: item => {
      dispatch(updateItem(item));
    }
  };
};

export default connect(mapStateToProps, mapDispathToProps)(TodoListContainer);
