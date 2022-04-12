import { ACTIONS } from "./actionTypes";

// register
export const setRegisterFormValue = (field, value) => ({
  type: ACTIONS.REGISTER_FORM_SET_VALUE,
  field,
  value,
});
export const registerFormSubmit = () => ({
  type: ACTIONS.REGISTER_FORM_SUBMIT,
});
export const registerFormSubmitSuccess = () => ({
  type: ACTIONS.REGISTER_FORM_SUBMIT_SUCCESS,
});
export const registerFormSubmitFailed = () => ({
  type: ACTIONS.REGISTER_FORM_SUBMIT_FAILED,
});
