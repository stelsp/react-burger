import axios from "axios";
import { setCookie } from "../../utils/cookie";
import { ACTIONS } from "./actionTypes";
import { API_URL, URL_KEY_LOGIN } from "../../constants/api-url";
import { userIn } from "./profileActions";

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

export const postLoginRequest = (email, password) => {
  return (dispatch) => {
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
      } catch (err) {
        console.log(err.response);
        dispatch(loginFormSubmitFailed());
      }
    })();
  };
};
