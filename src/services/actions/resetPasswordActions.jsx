import axios from "axios";
import { ACTIONS } from "./actionTypes";
import { API_URL, URL_KEY_PASSWORD_RESET } from "../../constants/api-url";

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

export const postResetPasswordRequest = (password, token) => {
  return (dispatch) => {
    dispatch(resetPasswordFormSubmit());
    (async () => {
      try {
        await axios.post(`${API_URL}${URL_KEY_PASSWORD_RESET}`, {
          password: password,
          token: token,
        });
        dispatch(resetPasswordFormSubmitSuccess());
      } catch (err) {
        console.log(err.response);
        dispatch(resetPasswordFormSubmitFailed());
      }
    })();
  };
};
