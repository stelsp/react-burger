import { ACTIONS } from "../actions/actionTypes";

const initialState = {
  ingredients: [],
  ingredientsRequest: false,
  ingredientsFailed: false,
  currentTab: "bun",
};

const ingredientsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTIONS.GET_INGREDIENTS:
      return {
        ...state,
        ingredientsRequest: true,
        ingredientsFailed: false,
      };

    case ACTIONS.GET_INGREDIENTS_SUCCESS:
      return {
        ...state,
        ingredients: action.ingredients,
        ingredientsRequest: false,
      };

    case ACTIONS.GET_INGREDIENTS_FAILED:
      return {
        ...state,
        ingredients: [],
        ingredientsFailed: true,
        ingredientsRequest: false,
      };

    case ACTIONS.SET_CURRENT_TAB:
      return {
        ...state,
        currentTab: action.currentTab,
      };

    default:
      return state;
  }
};

export default ingredientsReducer;
