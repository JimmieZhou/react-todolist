/*
 * @Descripttion:
 * @version: 1.0.0
 * @Author: jimmiezhou
 * @Date: 2019-12-16 17:51:46
 * @LastEditors: jimmiezhou
 * @LastEditTime: 2019-12-16 18:07:50
 */
import { combineReducers } from "redux";
import todoReducer from "./todoReducer";

export default combineReducers({
  todoState: todoReducer
});
