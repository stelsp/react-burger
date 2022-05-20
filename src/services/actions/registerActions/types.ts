import { ACTIONS } from "../actionTypes";

export interface ISetRegisterFormValueAction {
  readonly type: typeof ACTIONS.REGISTER_FORM_SET_VALUE;
  readonly field: string;
  readonly value: string;
}

export interface IRegisterFormSubmitAction {
  readonly type: typeof ACTIONS.REGISTER_FORM_SUBMIT;
}

export interface IRegisterFormSubmitSuccessAction {
  readonly type: typeof ACTIONS.REGISTER_FORM_SUBMIT_SUCCESS;
}

export interface IRegisterFormSubmitFailedAction {
  readonly type: typeof ACTIONS.REGISTER_FORM_SUBMIT_FAILED;
}

export type TRegisterActions =
  | ISetRegisterFormValueAction
  | IRegisterFormSubmitAction
  | IRegisterFormSubmitSuccessAction
  | IRegisterFormSubmitFailedAction;
