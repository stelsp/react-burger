import { ACTIONS } from "../actionTypes";
import { TIngredient } from "../../types/data";

export interface IGetIngredientsAction {
  readonly type: typeof ACTIONS.GET_INGREDIENTS;
}

export interface IGetIngredientsSuccessAction {
  readonly type: typeof ACTIONS.GET_INGREDIENTS_SUCCESS;
  readonly ingredients: TIngredient[];
}

export interface IGetIngredientsFailedAction {
  readonly type: typeof ACTIONS.GET_INGREDIENTS_FAILED;
}

export interface ISetCurrentIngredientAction {
  readonly type: typeof ACTIONS.SET_CURRENT_INGREDIENT;
  readonly currentIngredient: TIngredient;
}

export interface ISetCurrentTabAction {
  readonly type: typeof ACTIONS.SET_CURRENT_TAB;
  readonly currentTab: string;
}

export interface IDragIngredientAction {
  readonly type:
    | typeof ACTIONS.DRAG_INNER_INGREDIENT
    | typeof ACTIONS.DRAG_OUTER_INGREDIENT;
  readonly inner?: TIngredient[];
  readonly outer?: TIngredient;
}

export interface ISortIngredientAction {
  readonly type: typeof ACTIONS.SORT_INNER_INGREDIENT;
  readonly card?: TIngredient;
  readonly index?: any;
  readonly atIndex?: any;
  readonly inner: TIngredient[];
}

export type TIngredientsActions =
  | IGetIngredientsAction
  | IGetIngredientsSuccessAction
  | IGetIngredientsFailedAction
  | ISetCurrentIngredientAction
  | ISetCurrentTabAction
  | IDragIngredientAction
  | ISortIngredientAction;
