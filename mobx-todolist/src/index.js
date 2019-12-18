/*
 * @Descripttion:
 * @version: 1.0.0
 * @Author: jimmiezhou
 * @Date: 2019-12-18 14:48:31
 * @LastEditors  : jimmiezhou
 * @LastEditTime : 2019-12-18 17:24:00
 */
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

import { computed, observable } from "mobx";

class TodoList {
  @observable todos = [{
      title:'123',
      finished:false
  }];
  @computed get unfinishedTodoCount() {
    return this.todos.filter(todo => !todo.finished).length;
  }
}
const store = new TodoList();

ReactDOM.render(<App todoList={store} />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
