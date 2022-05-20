import { ACTIONS } from "../actionTypes";

export interface ISetLoginFormValueAction {
  readonly type: typeof ACTIONS.LOGIN_FORM_SET_VALUE;
  readonly field: string;
  readonly value: string;
}

export interface ILoginFormSubmitAction {
  readonly type: typeof ACTIONS.LOGIN_FORM_SUBMIT;
}

export interface ILoginFormSubmitSuccessAction {
  readonly type: typeof ACTIONS.LOGIN_FORM_SUBMIT_SUCCESS;
}

export interface ILoginFormSubmitFailedAction {
  readonly type: typeof ACTIONS.LOGIN_FORM_SUBMIT_FAILED;
}

export type TLoginActions =
  | ISetLoginFormValueAction
  | ILoginFormSubmitAction
  | ILoginFormSubmitSuccessAction
  | ILoginFormSubmitFailedAction;
