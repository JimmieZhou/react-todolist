import React from "react";

class TodoListComp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ""
    };
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(e) {
    this.setState({
      value: e.target.value
    });
  }

  getAddItem = () => {
    const { value } = this.state;
    const { todoState } = this.props;
    return {
      name: value,
      isDone: false,
      id: todoState.list.length
    };
  };

  render() {
    const {
      todoState,
      handleAddClick,
      handleDeleteClick,
      handleUpdateClick
    } = this.props;

    return (
      <>
        <input
          value={this.state.value}
          onChange={this.handleInputChange}
        ></input>
        <button onClick={() => handleAddClick(this.getAddItem())}>添加</button>
        <p>待办事项：</p>
        <ul>
          {todoState.list.map((item, index) => {
            const textDecoration = item.isDone
              ? { textDecoration: "line-through" }
              : { textDecoration: "none" };
            return (
              <li key={index} style={textDecoration}>
                {item.name}{" "}
                <button onClick={() => handleUpdateClick({ id: item.id })}>
                  {item.isDone ? "已完成" : "未完成"}
                </button>
                <button onClick={() => handleDeleteClick({ id: item.id })}>
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
