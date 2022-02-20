import { ACTIONS } from "./actionTypes";

const reducer = (state = [], action) => {
  switch (action.type) {
    case ACTIONS.GET_DATA:
      return action.data;

    default:
      return state;
  }
};

export default reducer;
