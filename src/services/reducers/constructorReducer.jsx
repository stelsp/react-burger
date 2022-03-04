import { initialState } from "../rootReducer";
import { ACTIONS } from "../actions/actionTypes";

const constructorReducer = (state = initialState.constructor, action) => {
  switch (action.type) {
    case ACTIONS.DRAG_OUTER_INGREDIENT:
      return {
        ...state,
        outer: action.outer,
      };

    case ACTIONS.DRAG_INNER_INGREDIENT:
      return {
        ...state,
        inner: action.inner,
      };

    case ACTIONS.DELETE_CONSTRUCTOR_INGREDIENT:
      return {
        ...state,
        inner: action.inner,
      };

    case ACTIONS.SORT_INNER_INGREDIENT:
      return {
        ...state,
        inner: action.inner,
      };

    default:
      return state;
  }
};

export default constructorReducer;
