import React from "react";
import {
  ADD_ITEM,
  DELETE_ITEM,
  GET_ITEM,
  UPDATE_ITEM
} from "../actions/todoActions";

class TodoListComp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ""
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleAddClick = this.handleAddClick.bind(this);
    this.handleDeleteClick = this.handleDeleteClick.bind(this);
    this.handleUpdateClick = this.handleUpdateClick.bind(this);
    // 组件订阅了store，store里的数据只要发生改变，subscribe() 里边的函数就会执行
    this.handleStoreChange = this.handleStoreChange.bind(this);
    props.store.subscribe(this.handleStoreChange);
  }

  handleInputChange(e) {
    this.setState({
      value: e.target.value
    });
  }

  handleAddClick() {
    const { getState, dispatch } = this.props.store;
    const length = getState().todoState.list.length;
    dispatch({
      type: ADD_ITEM,
      payload: {
        item: {
          name: this.state.value,
          isDone: false,
          id: length
        }
      }
    });
  }

  handleDeleteClick(e) {
    const { dispatch } = this.props.store;
    dispatch({
      type: DELETE_ITEM,
      payload: {
        item: {
          id: +e.target.id
        }
      }
    });
  }

  handleUpdateClick(e) {
    const { dispatch } = this.props.store;
    dispatch({
      type: UPDATE_ITEM,
      payload: {
        item: {
          id: +e.target.id
        }
      }
    });
  }

  handleStoreChange() {
    console.log("store改变了，subscribe就会执行");
    const { getState } = this.props.store;
    this.setState(getState());
  }

  render() {
    const { getState } = this.props.store;
    const state = getState();
    return (
      <>
        <input
          value={this.state.value}
          onChange={this.handleInputChange}
        ></input>
        <button onClick={this.handleAddClick}>添加</button>
        <p>待办事项：</p>
        <ul>
          {state.todoState.list.map((item, index) => {
            const textDecoration = item.isDone
              ? { textDecoration: "line-through" }
              : { textDecoration: "none" };
            return (
              <li key={index} style={textDecoration}>
                {item.name}{" "}
                <button onClick={this.handleUpdateClick} id={item.id}>
                  {item.isDone ? "已完成" : "未完成"}
                </button>
                <button onClick={this.handleDeleteClick} id={item.id}>
                  删除
                </button>
              </li>
            );
          })}
        </ul>
      </>
    );
  }
}
export default TodoListComp;
