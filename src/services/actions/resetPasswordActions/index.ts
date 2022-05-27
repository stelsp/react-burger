import axios from "axios";
import { ACTIONS } from "../actionTypes";
import { API_URL, URL_KEY_PASSWORD_RESET } from "../../../constants/api-url";
import { AppDispatch, AppThunk } from "../../types";

// resetPassword
export const setResetPasswordFormValue = (field: string, value: string) => ({
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

export const postResetPasswordRequest: AppThunk = (
  password: string,
  token: string
) => {
  return (dispatch: AppDispatch) => {
    dispatch(resetPasswordFormSubmit());
    (async () => {
      try {
        await axios.post(`${API_URL}${URL_KEY_PASSWORD_RESET}`, {
          password: password,
          token: token,
        });
        dispatch(resetPasswordFormSubmitSuccess());
      } catch (err: any) {
        console.log(err.response);
        dispatch(resetPasswordFormSubmitFailed());
      }
    })();
  };
};
