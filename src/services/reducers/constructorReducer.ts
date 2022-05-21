import { ACTIONS } from "../actions/actionTypes";
import { TContructorActions } from "../actions/constructorActions/types";
import { TIngredientsActions } from "../actions/ingredientsActions/types";
import { TIngredient } from "../types/data";

type TInitialState = {
  outer: TIngredient | null;
  inner: TIngredient[];
};

const initialState: TInitialState = {
  outer: null, // мб не надо будет}, // bun
  inner: [], // main + sauce
};

const constructorReducer = (
  state = initialState,
  action: TContructorActions | TIngredientsActions
): TInitialState => {
  switch (action.type) {
    case ACTIONS.DRAG_OUTER_INGREDIENT:
      return {
        ...state,
        outer: action.outer,
      };

    case ACTIONS.DRAG_INNER_INGREDIENT:
      return {
        ...state,
        inner: action.inner,
      };

    case ACTIONS.DELETE_CONSTRUCTOR_INGREDIENT:
      return {
        ...state,
        inner: action.inner,
      };

    case ACTIONS.SORT_INNER_INGREDIENT:
      return {
        ...state,
        inner: action.inner,
      };

    case ACTIONS.RESET_CONSTRUCTOR:
      return {
        ...state,
        outer: null,
        inner: [],
      };

    default:
      return state;
  }
};

export default constructorReducer;
