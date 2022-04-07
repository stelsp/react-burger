import { initialState } from "../rootReducer";
import { ACTIONS } from "../actions/actionTypes";

const ingredientsReducer = (state = initialState.ingredients, action) => {
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
