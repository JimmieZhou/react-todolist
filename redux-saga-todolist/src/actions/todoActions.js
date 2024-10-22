/*
 * @Descripttion:
 * @version: 1.0.0
 * @Author: jimmiezhou
 * @Date: 2019-12-16 18:20:19
 * @LastEditors  : jimmiezhou
 * @LastEditTime : 2019-12-17 22:04:46
 */

export const INIT_ITEM = "INIT_ITEM";
export const INIT_ITEM_ASYNC = "INIT_ITEM_ASYNC";
export const ADD_ITEM_ASYNC = "ADD_ITEM_ASYNC";
export const ADD_ITEM = "ADD_ITEM";
export const DELETE_ITEM_ASYNC = "DELETE_ITEM_ASYNC";
export const DELETE_ITEM = "DELETE_ITEM";
export const UPDATE_ITEM_ASYNC = "UPDATE_ITEM_ASYNC";
export const UPDATE_ITEM = "UPDATE_ITEM";

export const initItemAsync = () => ({ type: INIT_ITEM_ASYNC });
export const initItem = item => ({ type: INIT_ITEM, payload: { item } });

export const addItemAsync = item => ({ type: ADD_ITEM_ASYNC, payload: { item } });
export const addItem = item => ({ type: ADD_ITEM, payload: { item } });

export const deleteItemAsync = item => ({ type: DELETE_ITEM_ASYNC, payload: { item } });
export const deleteItem = item => ({ type: DELETE_ITEM, payload: { item } });

export const updateItemAsync = item => ({ type: UPDATE_ITEM_ASYNC, payload: { item } });
export const updateItem = item => ({ type: UPDATE_ITEM, payload: { item } });
