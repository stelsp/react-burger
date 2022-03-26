import axios from "axios";
import {
  API_URL,
  URL_KEY_INGREDIENTS,
  URL_KEY_ORDERS,
  URL_KEY_PASSWORD_FORGOT,
  URL_KEY_PASSWORD_RESET,
  URL_KEY_REGISTER,
  URL_KEY_LOGIN,
  URL_KEY_USER,
} from "../constants/api-url";

import {
  getOrder,
  getOrderSuccess,
  getOrderFailed,
  getIngredients,
  getIngredientsSuccess,
  getIngredientsFailed,
  forgotPasswordFormSubmit,
  forgotPasswordFormSubmitSuccess,
  forgotPasswordFormSubmitFailed,
  resetPasswordFormSubmit,
  resetPasswordFormSubmitSuccess,
  resetPasswordFormSubmitFailed,
  registerFormSubmit,
  registerFormSubmitSuccess,
  registerFormSubmitFailed,
  loginFormSubmit,
  loginFormSubmitSuccess,
  loginFormSubmitFailed,
  setProfileValue,
} from "../services/actions/actions";

import { getCookie, setCookie } from "./cookie";

export const fetchData = () => {
  return (dispatch) => {
    dispatch(getIngredients());
    axios
      .get(`${API_URL}${URL_KEY_INGREDIENTS}`)
      .then(({ data }) => dispatch(getIngredientsSuccess(data.data)))
      .catch(() => dispatch(getIngredientsFailed()));
  };
};

export const fetchOrder = (ingredientsIDs) => {
  return (dispatch) => {
    dispatch(getOrder());
    axios
      .post(`${API_URL}${URL_KEY_ORDERS}`, {
        ingredients: ingredientsIDs,
      })
      .then(({ data }) => dispatch(getOrderSuccess(data)))
      .catch(() => dispatch(getOrderFailed()));
  };
};

export const postForgotPasswordRequest = (email) => {
  return (dispatch) => {
    dispatch(forgotPasswordFormSubmit());
    axios
      .post(`${API_URL}${URL_KEY_PASSWORD_FORGOT}`, {
        email: email,
      })
      .then(() => dispatch(forgotPasswordFormSubmitSuccess()))
      .catch(() => dispatch(forgotPasswordFormSubmitFailed()));
  };
};

export const postResetPasswordRequest = (password, token) => {
  return (dispatch) => {
    dispatch(resetPasswordFormSubmit());
    axios
      .post(`${API_URL}${URL_KEY_PASSWORD_RESET}`, {
        password: password,
        token: token,
      })
      .then(() => dispatch(resetPasswordFormSubmitSuccess()))
      .catch(() => dispatch(resetPasswordFormSubmitFailed()));
  };
};

export const postRegisterRequest = (email, password, name) => {
  return (dispatch) => {
    dispatch(registerFormSubmit());
    axios
      .post(`${API_URL}${URL_KEY_REGISTER}`, {
        email: email,
        password: password,
        name: name,
      })
      .then(() => dispatch(registerFormSubmitSuccess()))
      .catch(() => dispatch(registerFormSubmitFailed()));
  };
};

export const postLoginRequest = (email, password) => {
  return (dispatch) => {
    dispatch(loginFormSubmit());
    axios
      .post(`${API_URL}${URL_KEY_LOGIN}`, {
        email: email,
        password: password,
      })
      .then(({ data }) => {
        setCookie("token", data.accessToken);
        dispatch(loginFormSubmitSuccess());
      })
      .then(() => dispatch(fetchUserInfo()))
      .catch(() => dispatch(loginFormSubmitFailed()));
  };
};

export const fetchUserInfo = () => {
  return (dispatch) => {
    axios
      .get(`${API_URL}${URL_KEY_USER}`, {
        headers: {
          Authorization: getCookie("token"),
        },
      })
      .then((res) => {
        console.log(res);
        dispatch(setProfileValue(res.data.user.name, res.data.user.email));
      })
      .catch((err) => console.log(err));
  };
};
