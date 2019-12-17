import React from "react";
import { connect } from "react-redux";
import TodoListComp from "../components/TodoListComp";
import { addItem, updateItem, deleteItem } from "../actions/todoActions";

class TodoListContainer extends React.Component {
  render() {
    const {
      todoState,
      handleAddClick,
      handleDeleteClick,
      handleUpdateClick
    } = this.props;
    return (
      <TodoListComp
        todoState={todoState}
        handleAddClick={handleAddClick}
        handleDeleteClick={handleDeleteClick}
        handleUpdateClick={handleUpdateClick}
      />
    );
  }
}

const mapStateToProps = state => {
  return {
    todoState: state.todoState
  };
};

const mapDispathToProps = dispatch => {
  return {
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
