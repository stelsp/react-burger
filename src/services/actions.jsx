import { ACTIONS } from "./actionTypes";

export const getData = (data) => ({
  type: ACTIONS.GET_DATA,
  data,
});

export const setLoadingFalse = (bool) => ({
  type: ACTIONS.SET_LOADING_FALSE,
  bool,
});
