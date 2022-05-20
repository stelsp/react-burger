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
import { AppDispatch, AppThunk } from "../../types";

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

export const postRegisterRequest: AppThunk = (
  email: string,
  password: string,
  name: string
) => {
  return (dispatch: AppDispatch) => {
    dispatch(registerFormSubmit());
    (async () => {
      try {
        await axios.post(`${API_URL}${URL_KEY_REGISTER}`, {
          email: email,
          password: password,
          name: name,
        });
        dispatch(registerFormSubmitSuccess());
        dispatch<any>(postLoginRequest(email, password));
      } catch (err: any) {
        console.log(err.response);
        dispatch(registerFormSubmitFailed());
      }
    })();
  };
};
