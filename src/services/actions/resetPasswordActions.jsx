import { ACTIONS } from "./actionTypes";

// resetPassword
export const setResetPasswordFormValue = (field, value) => ({
  type: ACTIONS.RESET_PASSWORD_FORM_SET_VALUE,
  field,
  value,
});
export const resetPasswordFormSubmit = () => ({
  type: ACTIONS.RESET_PASSWORD_FORM_SUBMIT,
});
export const resetPasswordFormSubmitSuccess = () => ({
  type: ACTIONS.RESET_PASSWORD_FORM_SUBMIT_SUCCESS,
});
export const resetPasswordFormSubmitFailed = () => ({
  type: ACTIONS.RESET_PASSWORD_FORM_SUBMIT_FAILED,
});
