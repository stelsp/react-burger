import { ACTIONS } from "../actions/actionTypes";
import { TIngredient } from "../types/data";
import { TContructorActions } from "../actions/constructorActions/types";
import { TIngredientsActions } from "../actions/ingredientsActions/types";

type TInitialState = {
  outer: TIngredient | undefined | string;
  inner: TIngredient[] | undefined;
};

const initialState: TInitialState = {
  outer: "", // bun
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
        outer: "",
        inner: [],
      };

    default:
      return state;
  }
};

export default constructorReducer;
