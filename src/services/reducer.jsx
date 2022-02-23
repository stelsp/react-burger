import { ACTIONS } from "./actionTypes";

const initialState = {
  data: [], // FIXME: по ТЗ нужно, но по факту вроде как нет
  bun: [],
  sauce: [],
  main: [],
  order: null,
  loadingData: true,
  loadingOrder: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTIONS.GET_DATA:
      return {
        ...state,
        data: action.data,
      };

    case ACTIONS.GET_INGR:
      return {
        ...state,
        bun: action.bun,
        sauce: action.sauce,
        main: action.main,
      };

    case ACTIONS.GET_ORDER:
      return {
        ...state,
        order: action.order,
      };

    case ACTIONS.TOGGLE_LOADING_DATA:
      return {
        ...state,
        loadingData: action.loading,
      };

    case ACTIONS.TOGGLE_LOADING_ORDER:
      return {
        ...state,
        loadingOrder: action.loading,
      };

    default:
      return state;
  }
};

export default reducer;
