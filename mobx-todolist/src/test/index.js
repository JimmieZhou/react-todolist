/*
 * @Descripttion:
 * @version: 1.0.0
 * @Author: jimmiezhou
 * @Date: 2019-12-18 15:51:23
 * @LastEditors  : jimmiezhou
 * @LastEditTime : 2019-12-18 15:53:26
 */
import {runInAction, observable, computed, autorun, when, reaction, action } from "mobx";
import store from "../store";

class Store {
  @observable arr = [];
  @observable map = new Map();
  @observable obj = {};

  @observable str = "hello";
  @observable num = 10;
  @observable bool = false;

  @computed get mixed() {
    return store.str + "/" + store.num;
  }

  @action bar() {
    this.str = "hahah";
    this.num = 123;
  }
}

const store = new Store();

// computed

// autorun
autorun(() => {
  console.log(store.mixed);
});

store.str = "world";
store.num = 100;

// when
when(
  () => store.bool,
  () => console.log("it is true")
);
store.bool = true;

// reactions
store.str = "world";
store.num = 100;
reaction(
  () => [store.str, store.num],
  arr => console.log(arr.join("/"))
);

//action
store.bar();

runInAction(()=>{
    store.str = 'qq'
    store.num = 12345
})
    
