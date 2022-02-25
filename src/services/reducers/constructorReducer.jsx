import { initialState } from "../rootReducer";
import { ACTIONS } from "../actions/actionTypes";

const constructorReducer = (state = initialState.constructor, action) => {
  switch (action.type) {
    case ACTIONS.GET_CONSTRUCTOR_INGR:
      return {
        ...state,
        outer: action.outer,
        inner: action.inner,
      };

    case ACTIONS.DELETE_CONSTRUCTOR_INGR:
      return {
        ...state,
        inner: action.inner,
      };

    default:
      return state;
  }
};

export default constructorReducer;