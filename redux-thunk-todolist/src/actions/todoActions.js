/*
 * @Descripttion:
 * @version: 1.0.0
 * @Author: jimmiezhou
 * @Date: 2019-12-16 18:20:19
 * @LastEditors  : jimmiezhou
 * @LastEditTime : 2019-12-17 22:30:01
 */
import axios from "axios";

export const INIT_ITEM = "INIT_ITEM";
export const ADD_ITEM = "ADD_ITEM";
export const DELETE_ITEM = "DELETE_ITEM";
export const UPDATE_ITEM = "UPDATE_ITEM";

const base_url = "http://localhost:3001"

export const initItem = () => dispatch => {
  axios.get(`${base_url}/init`).then(function(res) {
    const item = res.data.data;
    dispatch({ type: INIT_ITEM, payload: { item } });
  });
};

export const addItem = item => ({ type: ADD_ITEM, payload: { item } });

export const deleteItem = item => ({ type: DELETE_ITEM, payload: { item } });

export const updateItem = item => ({ type: UPDATE_ITEM, payload: { item } });
