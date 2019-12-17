/*
 * @Descripttion:
 * @version: 1.0.0
 * @Author: jimmiezhou
 * @Date: 2019-12-17 16:15:57
 * @LastEditors: jimmiezhou
 * @LastEditTime: 2019-12-17 17:33:32
 */
import { takeEvery, put, all } from "redux-saga/effects";
import { INIT_ITEM_ASYNC, initItem } from "../actions/todoActions";

// worker
// 异步变为同步，所有的这些函数都是以put()结尾的
export function* init_item_async() {
  const todo = yield fetch("http://localhost:3001").then(data => data.json());
  yield put(initItem(todo.data));
}

// watcher
export function* watchInitAsync() {
  yield takeEvery(INIT_ITEM_ASYNC, init_item_async);
}

// 跟产生器
export default function* rootSaga() {
  yield all([watchInitAsync()]);
}
