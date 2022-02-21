import { ACTIONS } from "./actionTypes";

const reducer = (state = [], action) => {
  switch (action.type) {
    case ACTIONS.GET_DATA:
      return [...state, { data: action.payload }];

    case ACTIONS.SET_LOADING_FALSE:
      return [...state, { loading: action.payload }];

    default:
      return state;
  }
};

export default reducer;
