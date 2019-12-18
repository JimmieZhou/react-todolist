/*
 * @Descripttion: 
 * @version: 1.0.0
 * @Author: jimmiezhou
 * @Date: 2019-12-18 17:19:14
 * @LastEditors: jimmiezhou
 * @LastEditTime: 2019-12-18 17:20:09
 */
import React, { Component } from "react";
import ReactDOM from "react-dom";
import { observer } from "mobx-react";

class TodoList {
  @observable todos = [];
  @computed get unfinishedTodoCount() {
    return this.todos.filter(todo => !todo.finished).length;
  }
}

@observer
class TodoListView extends Component {
  render() {
    return (
      <div>
        <ul>
          {this.props.todoList.todos.map(todo => (
            <TodoView todo={todo} key={todo.id} />
          ))}
        </ul>
        Tasks left: {this.props.todoList.unfinishedTodoCount}
      </div>
    );
  }
}

const TodoView = observer(({ todo }) => (
  <li>
    <input
      type="checkbox"
      checked={todo.finished}
      onClick={() => (todo.finished = !todo.finished)}
    />
    {todo.title}
  </li>
));

const store = new TodoList();
ReactDOM.render(
  <TodoListView todoList={store} />,
  document.getElementById("mount")
);
