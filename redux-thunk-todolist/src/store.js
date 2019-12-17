/*
 * @Descripttion:
 * @version: 1.0.0
 * @Author: jimmiezhou
 * @Date: 2019-12-16 17:47:15
 * @LastEditors: jimmiezhou
 * @LastEditTime: 2019-12-17 14:08:05
 */
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import reducers from "./reducers/index";

// applyMiddleware可以使用中间件模块
export default createStore(reducers, applyMiddleware(thunk));
