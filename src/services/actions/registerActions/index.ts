import axios from "axios";
import { ACTIONS } from "../actionTypes";
import { API_URL, URL_KEY_REGISTER } from "../../../constants/api-url";
import { postLoginRequest } from "../loginActions";
import {
  ISetRegisterFormValueAction,
  IRegisterFormSubmitAction,
  IRegisterFormSubmitSuccessAction,
  IRegisterFormSubmitFailedAction,
} from "./types";

// register
export const setRegisterFormValue = (
  field: string,
  value: string
): ISetRegisterFormValueAction => ({
  type: ACTIONS.REGISTER_FORM_SET_VALUE,
  field,
  value,
});

export const registerFormSubmit = (): IRegisterFormSubmitAction => ({
  type: ACTIONS.REGISTER_FORM_SUBMIT,
});

export const registerFormSubmitSuccess =
  (): IRegisterFormSubmitSuccessAction => ({
    type: ACTIONS.REGISTER_FORM_SUBMIT_SUCCESS,
  });

export const registerFormSubmitFailed =
  (): IRegisterFormSubmitFailedAction => ({
    type: ACTIONS.REGISTER_FORM_SUBMIT_FAILED,
  });

export const postRegisterRequest = (
  email: string,
  password: string,
  name: string
) => {
  return (dispatch: any) => {
    dispatch(registerFormSubmit());
    (async () => {
      try {
        await axios.post(`${API_URL}${URL_KEY_REGISTER}`, {
          email: email,
          password: password,
          name: name,
        });
        await dispatch(registerFormSubmitSuccess());
        dispatch(postLoginRequest(email, password));
      } catch (err: any) {
        console.log(err.response);
        dispatch(registerFormSubmitFailed());
      }
    })();
  };
};
