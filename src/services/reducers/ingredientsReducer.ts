import { ACTIONS } from "../actions/actionTypes";
import { TIngredientsActions } from "../actions/ingredientsActions/types";
import { TIngredient } from "../types/data";

type TInitialState = {
  ingredients: TIngredient[] | [] | undefined;
  ingredientsRequest: boolean;
  ingredientsFailed: boolean;
  currentTab: string;
};

const initialState: TInitialState = {
  ingredients: [],
  ingredientsRequest: false,
  ingredientsFailed: false,
  currentTab: "bun",
};

const ingredientsReducer = (
  state = initialState,
  action: TIngredientsActions
): TInitialState => {
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
