import { initialState } from "../rootReducer";
import { ACTIONS } from "../actions/actionTypes";

const ingredientsReducer = (state = initialState.ingredients, action) => {
  switch (action.type) {
    case ACTIONS.SET_INGREDIENTS:
      return {
        ...state,
        category: {
          ...state.category,
          bun: action.bun,
          sauce: action.sauce,
          main: action.main,
        },
      };

    case ACTIONS.SET_CURRENT_TAB:
      return {
        ...state,
        currentTab: action.currentTab,
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

export default ingredientsReducer;
