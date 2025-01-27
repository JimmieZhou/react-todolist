/*
 * @Descripttion:
 * @version: 1.0.0
 * @Author: jimmiezhou
 * @Date: 2019-12-16 18:20:19
 * @LastEditors: jimmiezhou
 * @LastEditTime: 2019-12-17 16:54:13
 */
export const ADD_ITEM = "ADD_ITEM";
export const DELETE_ITEM = "DELETE_ITEM";
export const UPDATE_ITEM = "UPDATE_ITEM";

export const addItem = item => ({ type: ADD_ITEM, payload: { item } });

export const deleteItem = item => ({ type: DELETE_ITEM, payload: { item } });

export const updateItem = item => ({ type: UPDATE_ITEM, payload: { item } });
