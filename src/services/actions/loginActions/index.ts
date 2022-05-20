import axios from "axios";
import { setCookie } from "../../../utils/cookie";
import { ACTIONS } from "../actionTypes";
import { API_URL, URL_KEY_LOGIN } from "../../../constants/api-url";
import { userIn } from "../profileActions";
import {
  ISetLoginFormValueAction,
  ILoginFormSubmitAction,
  ILoginFormSubmitSuccessAction,
  ILoginFormSubmitFailedAction,
} from "./types";
// login
export const setLoginFormValue = (
  field: string,
  value: string
): ISetLoginFormValueAction => ({
  type: ACTIONS.LOGIN_FORM_SET_VALUE,
  field,
  value,
});

export const loginFormSubmit = (): ILoginFormSubmitAction => ({
  type: ACTIONS.LOGIN_FORM_SUBMIT,
});

export const loginFormSubmitSuccess = (): ILoginFormSubmitSuccessAction => ({
  type: ACTIONS.LOGIN_FORM_SUBMIT_SUCCESS,
});

export const loginFormSubmitFailed = (): ILoginFormSubmitFailedAction => ({
  type: ACTIONS.LOGIN_FORM_SUBMIT_FAILED,
});

export const postLoginRequest = (email: string, password: string) => {
  return (dispatch: any) => {
    dispatch(loginFormSubmit());
    (async () => {
      try {
        const res = await axios.post(`${API_URL}${URL_KEY_LOGIN}`, {
          email: email,
          password: password,
        });
        setCookie("refreshToken", res.data.refreshToken);
        setCookie("accessToken", res.data.accessToken);
        await dispatch(loginFormSubmitSuccess());
        await dispatch(userIn());
      } catch (err: any) {
        console.log(err.response);
        dispatch(loginFormSubmitFailed());
      }
    })();
  };
};
