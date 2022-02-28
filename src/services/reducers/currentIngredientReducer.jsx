import { initialState } from "../rootReducer";
import { ACTIONS } from "../actions/actionTypes";

const currentIngredientReducer = (
  state = initialState.currentIngredient,
  action
) => {
  switch (action.type) {
    case ACTIONS.SET_CURRENT_INGREDIENT:
      return action.currentIngredient;

    default:
      return state;
  }
};

export default currentIngredientReducer;
