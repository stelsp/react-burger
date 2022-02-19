import { ACTIONS } from "./actionTypes";

export const add = (description) => ({
  type: ACTIONS.ADDED,
  payload: {
    description,
  },
});

export const remove = (id) => ({
  type: ACTIONS.REMOVED,
  payload: {
    id,
  },
});

export const resolve = (id) => ({
  type: ACTIONS.RESOLVED,
  payload: {
    id,
  },
});
