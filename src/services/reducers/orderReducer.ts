import { ACTIONS } from "../actions/actionTypes";
import { TContructorActions } from "../actions/constructorActions/types";

type TInitialState = {
  order: null | string[];
  orderRequest: boolean;
  orderFailed: boolean;
};

const initialState: TInitialState = {
  order: null,
  orderRequest: false,
  orderFailed: false,
};

const orderReducer = (
  state = initialState,
  action: TContructorActions
): TInitialState => {
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
