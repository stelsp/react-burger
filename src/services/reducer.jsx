import { ACTIONS } from "./actionTypes";

const initialState = {
  ingredients: {
    currentIngredient: {},
    category: {
      bun: [],
      sauce: [],
      main: [],
    },
    loading: true,
  },
  constructor: {
    outer: {}, // bun
    inner: [], // main + sauce
  },
  order: {
    order: null,
    loading: false,
  },
};
export const ingredientsReducer = (
  state = initialState.ingredients,
  action
) => {
  switch (action.type) {
    case ACTIONS.GET_INGR:
      return {
        ...state,
        category: {
          ...state.category,
          bun: action.bun,
          sauce: action.sauce,
          main: action.main,
        },
      };

    case ACTIONS.TOGGLE_LOADING_DATA:
      return {
        ...state,
        loading: action.loading,
      };

    default:
      return state;
  }
};

export const orderReducer = (state = initialState.order, action) => {
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

export const constructorReducer = (
  state = initialState.constructor,
  action
) => {
  switch (action.type) {
    case ACTIONS.GET_CONSTRUCTOR_INGR:
      return {
        ...state,
        outer: action.outer,
        inner: action.inner,
      };

    default:
      return state;
  }
};
