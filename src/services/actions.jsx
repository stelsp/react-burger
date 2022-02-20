import { ACTIONS } from "./actionTypes";

export const getData = (data) => ({
  type: ACTIONS.GET_DATA,
  data,
});
