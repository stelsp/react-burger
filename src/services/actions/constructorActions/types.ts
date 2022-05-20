import { ACTIONS } from "../actionTypes";
import { TIngredient } from "../../types/data";

export interface IGetOrderAction {
  readonly type: typeof ACTIONS.GET_ORDER;
}
export interface IGetOrderSuccessAction {
  readonly type: typeof ACTIONS.GET_ORDER_SUCCESS;
  readonly order: string[];
}
export interface IGetOrderFailedAction {
  readonly type: typeof ACTIONS.GET_ORDER_FAILED;
}
export interface IResetConstructorAction {
  readonly type: typeof ACTIONS.RESET_CONSTRUCTOR;
}
export interface IDeleteConstructorIngredientAction {
  readonly type: typeof ACTIONS.DELETE_CONSTRUCTOR_INGREDIENT;
  readonly inner: TIngredient[];
  readonly id?: string;
}

export type TContructorActions =
  | IGetOrderAction
  | IGetOrderSuccessAction
  | IGetOrderFailedAction
  | IResetConstructorAction
  | IDeleteConstructorIngredientAction;
