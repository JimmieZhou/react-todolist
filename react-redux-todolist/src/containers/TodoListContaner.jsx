import React from "react";
import { connect } from "react-redux";
import TodoListComp from "../components/TodoListComp";
import { ADD_ITEM, DELETE_ITEM, UPDATE_ITEM } from "../actions/todoActions";

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
      dispatch({
        type: ADD_ITEM,
        payload: { item }
      });
    },
    handleDeleteClick: item => {
      dispatch({
        type: DELETE_ITEM,
        payload: { item }
      });
    },
    handleUpdateClick: item => {
      dispatch({
        type: UPDATE_ITEM,
        payload: { item }
      });
    }
  };
};

export default connect(mapStateToProps, mapDispathToProps)(TodoListContainer);
