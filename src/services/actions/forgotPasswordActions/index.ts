import axios from "axios";
import { API_URL, URL_KEY_PASSWORD_FORGOT } from "../../../constants/api-url";
import { ACTIONS } from "../actionTypes";
import {
  ISetForgotPasswordFormValueAction,
  IForgotPasswordFormSubmitAction,
  IForgotPasswordFormSubmitSuccessAction,
  IForgotPasswordFormSubmitFailedAction,
} from "./types";

export const setForgotPasswordFormValue = (
  field: string,
  value: string
): ISetForgotPasswordFormValueAction => ({
  type: ACTIONS.FORGOT_PASSWORD_FORM_SET_VALUE,
  field,
  value,
});

export const forgotPasswordFormSubmit =
  (): IForgotPasswordFormSubmitAction => ({
    type: ACTIONS.FORGOT_PASSWORD_FORM_SUBMIT,
  });

export const forgotPasswordFormSubmitSuccess =
  (): IForgotPasswordFormSubmitSuccessAction => ({
    type: ACTIONS.FORGOT_PASSWORD_FORM_SUBMIT_SUCCESS,
  });

export const forgotPasswordFormSubmitFailed =
  (): IForgotPasswordFormSubmitFailedAction => ({
    type: ACTIONS.FORGOT_PASSWORD_FORM_SUBMIT_FAILED,
  });

export const postForgotPasswordRequest = (email: string, history: any) => {
  return (dispatch: any) => {
    dispatch(forgotPasswordFormSubmit());
    (async () => {
      try {
        await axios.post(`${API_URL}${URL_KEY_PASSWORD_FORGOT}`, {
          email: email,
        });
        await dispatch(forgotPasswordFormSubmitSuccess());
        history.push({ pathname: "/reset-password" });
      } catch (err: any) {
        console.log(err.response);
        dispatch(forgotPasswordFormSubmitFailed());
      }
    })();
  };
};
