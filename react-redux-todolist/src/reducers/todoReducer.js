/*
 * @Descripttion:
 * @version: 1.0.0
 * @Author: jimmiezhou
 * @Date: 2019-12-16 17:48:13
 * @LastEditors: jimmiezhou
 * @LastEditTime: 2019-12-17 13:49:43
 */
import {
  ADD_ITEM,
  DELETE_ITEM,
  GET_ITEM,
  UPDATE_ITEM
} from "../actions/todoActions";
import * as _ from "lodash";

const defaultValue = {
  list: []
};

export default (state = defaultValue, action) => {
  const newState = _.cloneDeep(state);
  switch (action.type) {
    case ADD_ITEM:
      newState.list.push(action.payload.item);
      return {
        ...newState,
        list: newState.list
      };
    case DELETE_ITEM:
      const list = newState.list.filter(
        item => item.id !== action.payload.item.id
      );
      return {
        ...newState,
        list
      };
    case UPDATE_ITEM:
      const updateData = newState.list.map(item => {
        if (item.id === action.payload.item.id) {
          return {
            ...item,
            isDone: !item.isDone
          };
        }
        return item;
      });
      return {
        ...newState,
        list: updateData
      };
    default:
      return state;
  }
};
