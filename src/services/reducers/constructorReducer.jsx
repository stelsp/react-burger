import { initialState } from "../rootReducer";
import { ACTIONS } from "../actions/actionTypes";

const constructorReducer = (state = initialState.constructor, action) => {
  switch (action.type) {
    case ACTIONS.DELETE_CONSTRUCTOR_INGR:
      return {
        ...state,
        inner: action.inner,
      };

    case ACTIONS.DRAG_OUTER:
      return {
        ...state,
        outer: action.outer,
      };

    case ACTIONS.DRAG_INNER:
      return {
        ...state,
        inner: action.inner,
      };

    default:
      return state;
  }
};

export default constructorReducer;
