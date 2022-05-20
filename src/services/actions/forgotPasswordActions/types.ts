import { ACTIONS } from "../actionTypes";

export interface ISetForgotPasswordFormValueAction {
  readonly type: typeof ACTIONS.FORGOT_PASSWORD_FORM_SET_VALUE;
  readonly field: string;
  readonly value: string;
}
export interface IForgotPasswordFormSubmitAction {
  readonly type: typeof ACTIONS.FORGOT_PASSWORD_FORM_SUBMIT;
}
export interface IForgotPasswordFormSubmitSuccessAction {
  readonly type: typeof ACTIONS.FORGOT_PASSWORD_FORM_SUBMIT_SUCCESS;
}
export interface IForgotPasswordFormSubmitFailedAction {
  readonly type: typeof ACTIONS.FORGOT_PASSWORD_FORM_SUBMIT_FAILED;
}

export type TForgotPasswordFormActions =
  | ISetForgotPasswordFormValueAction
  | IForgotPasswordFormSubmitAction
  | IForgotPasswordFormSubmitSuccessAction
  | IForgotPasswordFormSubmitFailedAction;
