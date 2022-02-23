import { ACTIONS } from "./actionTypes";

const initialState = {
  data: {
    data: [], // FIXME: по ТЗ нужно, но по факту вроде как нет...
    loading: true,
  },
  order: {
    order: null,
    loading: false,
  },
  bun: [],
  sauce: [],
  main: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTIONS.GET_DATA:
      return {
        ...state,
        data: { ...state.data, data: action.data },
      };

    case ACTIONS.GET_ORDER:
      return {
        ...state,
        order: { ...state.order, order: action.order },
      };

    case ACTIONS.TOGGLE_LOADING_DATA:
      return {
        ...state,
        data: { ...state.data, loading: action.loading },
      };

    case ACTIONS.TOGGLE_LOADING_ORDER:
      return {
        ...state,
        order: { ...state.order, loading: action.loading },
      };

    case ACTIONS.GET_INGR:
      return {
        ...state,
        bun: action.bun,
        sauce: action.sauce,
        main: action.main,
      };

    default:
      return state;
  }
};

export default reducer;
