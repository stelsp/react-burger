import { initialState } from "../rootReducer";
import { ACTIONS } from "../actions/actionTypes";

const orderReducer = (state = initialState.order, action) => {
  switch (action.type) {
    case ACTIONS.GET_ORDER:
      return {
        ...state,
        order: action.order,
      };

    case ACTIONS.TOGGLE_LOADING_ORDER:
      return {
        ...state,
        loading: action.loading,
      };

    default:
      return state;
  }
};

export default orderReducer;
