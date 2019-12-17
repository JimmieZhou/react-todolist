/*
 * @Descripttion:
 * @version: 1.0.0
 * @Author: jimmiezhou
 * @Date: 2019-12-17 16:15:57
 * @LastEditors  : jimmiezhou
 * @LastEditTime : 2019-12-17 21:48:53
 */
import { takeEvery, put, all } from "redux-saga/effects";
import {
  INIT_ITEM_ASYNC,
  ADD_ITEM_ASYNC,
  DELETE_ITEM_ASYNC,
  UPDATE_ITEM_ASYNC,
  initItem,
  addItem,
  deleteItem,
  updateItem
} from "../actions/todoActions";

const base_url = "http://localhost:3001";

// worker
// 异步变为同步，所有的这些函数都是以put()结尾的
export function* init_item_async() {
  const todo = yield fetch(`${base_url}/init`).then(data => data.json());
  yield put(initItem(todo.data));
}

export function* add_item_async(action) {
  const todo = yield fetch(`${base_url}/add`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(action.payload.item)
  }).then(data => data.json());
  yield put(addItem(todo.data));
}

export function* delete_item_async(action) {
  const todo = yield fetch(`${base_url}/delete`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(action.payload.item)
  }).then(data => data.json());
  yield put(deleteItem(todo.data));
}

export function* update_item_async(action) {
  const todo = yield fetch(`${base_url}/update`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(action.payload.item)
  }).then(data => data.json());
  yield put(updateItem(todo.data));
}

// watcher
export function* watchInitAsync() {
  yield takeEvery(INIT_ITEM_ASYNC, init_item_async);
}

export function* watchAddAsync() {
  yield takeEvery(ADD_ITEM_ASYNC, add_item_async);
}

export function* watchDeleteAsync() {
  yield takeEvery(DELETE_ITEM_ASYNC, delete_item_async);
}

export function* watchUpdateAsync() {
  yield takeEvery(UPDATE_ITEM_ASYNC, update_item_async);
}

// 跟产生器
export default function* rootSaga() {
  yield all([
    watchInitAsync(),
    watchAddAsync(),
    watchDeleteAsync(),
    watchUpdateAsync()
  ]);
}
