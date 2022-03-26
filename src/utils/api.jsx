import axios from "axios";
import {
  API_URL,
  URL_KEY_INGREDIENTS,
  URL_KEY_ORDERS,
  URL_KEY_PASSWORD_FORGOT,
  URL_KEY_PASSWORD_RESET,
  URL_KEY_REGISTER,
  URL_KEY_LOGIN,
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
} from "../services/actions/actions";

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
      .catch(() => dispatch(loginFormSubmitFailed()));
  };
};

export function getCookie(name) {
  const matches = document.cookie.match(
    new RegExp("(?:^|; )" + name.replace(/([$?*|{}\\^])/g, "\\$1") + "=([^;]*)")
  );
  return matches ? decodeURIComponent(matches[1]) : undefined;
}

export function setCookie(name, value, props) {
  props = props || {};
  let exp = props.expires;
  if (typeof exp == "number" && exp) {
    const d = new Date();
    d.setTime(d.getTime() + exp * 1000);
    exp = props.expires = d;
  }
  if (exp && exp.toUTCString) {
    props.expires = exp.toUTCString();
  }
  value = encodeURIComponent(value);
  let updatedCookie = name + "=" + value;
  for (const propName in props) {
    updatedCookie += "; " + propName;
    const propValue = props[propName];
    if (propValue !== true) {
      updatedCookie += "=" + propValue;
    }
  }
  document.cookie = updatedCookie;
}
