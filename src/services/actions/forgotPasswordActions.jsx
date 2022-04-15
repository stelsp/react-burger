import axios from "axios";
import { API_URL, URL_KEY_PASSWORD_FORGOT } from "../../constants/api-url";
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

export const postForgotPasswordRequest = (email, history) => {
  return (dispatch) => {
    dispatch(forgotPasswordFormSubmit());
    (async () => {
      try {
        await axios.post(`${API_URL}${URL_KEY_PASSWORD_FORGOT}`, {
          email: email,
        });
        await dispatch(forgotPasswordFormSubmitSuccess());
        history.push({ pathname: "/reset-password" });
      } catch (err) {
        console.log(err.response);
        dispatch(forgotPasswordFormSubmitFailed());
      }
    })();
  };
};
