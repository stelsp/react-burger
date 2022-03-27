import { ACTIONS } from "./actionTypes";

// login
export const setLoginFormValue = (field, value) => ({
  type: ACTIONS.LOGIN_FORM_SET_VALUE,
  field,
  value,
});
export const loginFormSubmit = () => ({
  type: ACTIONS.LOGIN_FORM_SUBMIT,
});
export const loginFormSubmitSuccess = () => ({
  type: ACTIONS.LOGIN_FORM_SUBMIT_SUCCESS,
});
export const loginFormSubmitFailed = () => ({
  type: ACTIONS.LOGIN_FORM_SUBMIT_FAILED,
});
