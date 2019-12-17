/*
 * @Descripttion:
 * @version: 1.0.0
 * @Author: jimmiezhou
 * @Date: 2019-12-16 17:47:15
 * @LastEditors: jimmiezhou
 * @LastEditTime: 2019-12-16 17:57:57
 */
import { createStore } from "redux";
import reducers from "./reducers/index";

export default createStore(reducers);
