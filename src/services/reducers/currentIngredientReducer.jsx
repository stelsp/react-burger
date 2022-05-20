import { ACTIONS } from "../actions/actionTypes";

const initialState = {
  currentIngredient: null,
};

const currentIngredientReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTIONS.SET_CURRENT_INGREDIENT:
      return action.currentIngredient;

    default:
      return state;
  }
};

export default currentIngredientReducer;
