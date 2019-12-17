/*
 * @Descripttion:
 * @version: 1.0.0
 * @Author: jimmiezhou
 * @Date: 2019-12-16 17:47:15
 * @LastEditors: jimmiezhou
 * @LastEditTime: 2019-12-17 17:09:23
 */
import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import reducers from "./reducers/index";
import rootSaga from "./sagas/index";

// 创建saga中间件
const sagaMiddleware = createSagaMiddleware();
const store = createStore(reducers, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(rootSaga);

export default store
