import { ACTIONS } from "./actionTypes";

// forgotPassword
export const setForgotPasswordFormValue = (field, value) => ({
  type: ACTIONS.FORGOT_PASSWORD_FORM_SET_VALUE,
  field,
  value,
});
export const forgotPasswordFormSubmit = () => ({
  type: ACTIONS.FORGOT_PASSWORD_FORM_SUBMIT,
});
export const forgotPasswordFormSubmitSuccess = () => ({
  type: ACTIONS.FORGOT_PASSWORD_FORM_SUBMIT_SUCCESS,
});
export const forgotPasswordFormSubmitFailed = () => ({
  type: ACTIONS.FORGOT_PASSWORD_FORM_SUBMIT_FAILED,
});
