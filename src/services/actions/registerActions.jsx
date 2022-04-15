import axios from "axios";
import { ACTIONS } from "./actionTypes";
import { API_URL, URL_KEY_REGISTER } from "../../constants/api-url";
import { postLoginRequest } from "./loginActions";

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

export const postRegisterRequest = (email, password, name) => {
  return (dispatch) => {
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
      } catch (err) {
        console.log(err.response);
        dispatch(registerFormSubmitFailed());
      }
    })();
  };
};
