import { initialState } from "../rootReducer";
import { ACTIONS } from "../actions/actionTypes";

const ingredientsReducer = (state = initialState.ingredients, action) => {
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

    case ACTIONS.GET_CURRENT_INGR:
      return {
        ...state,
        currentIngredient: action.currentIngredient,
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
