import { ACTIONS } from "../actionTypes";

export interface ISetResetPasswordFormValueAction {
  readonly type: typeof ACTIONS.RESET_PASSWORD_FORM_SET_VALUE;
  readonly field: string;
  readonly value: string;
}
export interface IResetPasswordFormSubmitAction {
  readonly type: typeof ACTIONS.RESET_PASSWORD_FORM_SUBMIT;
}
export interface IResetPasswordFormSubmitSuccessAction {
  readonly type: typeof ACTIONS.RESET_PASSWORD_FORM_SUBMIT_SUCCESS;
}
export interface IResetPasswordFormSubmitFailedAction {
  readonly type: typeof ACTIONS.RESET_PASSWORD_FORM_SUBMIT_FAILED;
}

export type TResetPasswordFormActions =
  | ISetResetPasswordFormValueAction
  | IResetPasswordFormSubmitAction
  | IResetPasswordFormSubmitSuccessAction
  | IResetPasswordFormSubmitFailedAction;
