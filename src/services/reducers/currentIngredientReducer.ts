import { ACTIONS } from "../actions/actionTypes";
import { TIngredientsActions } from "../actions/ingredientsActions/types";
import { TIngredient } from "../types/data";

type TInitialState = {
  currentIngredient: TIngredient | undefined | null;
};

const initialState: TInitialState = {
  currentIngredient: null,
};

const currentIngredientReducer = (
  state = initialState,
  action: TIngredientsActions
): TInitialState => {
  switch (action.type) {
    case ACTIONS.SET_CURRENT_INGREDIENT:
      return {
        ...state,
        currentIngredient: action.currentIngredient,
      };

    default:
      return state;
  }
};

export default currentIngredientReducer;
