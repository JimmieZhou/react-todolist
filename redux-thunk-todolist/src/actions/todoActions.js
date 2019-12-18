/*
 * @Descripttion:
 * @version: 1.0.0
 * @Author: jimmiezhou
 * @Date: 2019-12-16 18:20:19
 * @LastEditors  : jimmiezhou
 * @LastEditTime : 2019-12-17 22:30:01
 */

export const INIT_ITEM = "INIT_ITEM";
export const ADD_ITEM = "ADD_ITEM";
export const DELETE_ITEM = "DELETE_ITEM";
export const UPDATE_ITEM = "UPDATE_ITEM";

const base_url = "http://localhost:3001";

export const initItem = () => dispatch => {
  fetch(`${base_url}/init`)
    .then(data => data.json())
    .then(result => {
      const item = result.data;
      dispatch({ type: INIT_ITEM, payload: { item } });
    });
};

export const addItem = item => dispatch => {
  fetch(`${base_url}/add`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(item)
  })
    .then(data => data.json())
    .then(result => {
      const item = result.data;
      dispatch({ type: ADD_ITEM, payload: { item } });
    });
};

export const deleteItem = item => dispatch => {
  fetch(`${base_url}/delete`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(item)
  })
    .then(data => data.json())
    .then(result => {
      const item = result.data;
      dispatch({ type: DELETE_ITEM, payload: { item } });
    });
};

export const updateItem = item => dispatch => {
  fetch(`${base_url}/update`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(item)
  })
    .then(data => data.json())
    .then(result => {
      const item = result.data;
      dispatch({ type: UPDATE_ITEM, payload: { item } });
    });
};
