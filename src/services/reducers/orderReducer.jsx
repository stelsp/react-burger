import { ACTIONS } from "../actions/actionTypes";

const initialState = {
  order: null,
  orderRequest: false,
  orderFailed: false,
};

const orderReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTIONS.GET_ORDER:
      return {
        ...state,
        orderRequest: true,
        orderFailed: false,
      };

    case ACTIONS.GET_ORDER_SUCCESS:
      return {
        ...state,
        order: action.order,
        orderRequest: false,
      };

    case ACTIONS.GET_ORDER_FAILED:
      return {
        ...state,
        order: null,
        orderFailed: true,
        orderRequest: false,
      };

    default:
      return state;
  }
};

export default orderReducer;
