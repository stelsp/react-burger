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
} from "../services/actions/constructorActions";
import {
  getIngredients,
  getIngredientsSuccess,
  getIngredientsFailed,
} from "../services/actions/ingredientsActions";
import {
  forgotPasswordFormSubmit,
  forgotPasswordFormSubmitSuccess,
  forgotPasswordFormSubmitFailed,
} from "../services/actions/forgotPasswordActions";
import {
  resetPasswordFormSubmit,
  resetPasswordFormSubmitSuccess,
  resetPasswordFormSubmitFailed,
} from "../services/actions/resetPasswordActions";
import {
  registerFormSubmit,
  registerFormSubmitSuccess,
  registerFormSubmitFailed,
} from "../services/actions/registerActions";
import {
  loginFormSubmit,
  loginFormSubmitSuccess,
  loginFormSubmitFailed,
} from "../services/actions/loginActions";
import { getProfileValue } from "../services/actions/profileActions";

import { getCookie, setCookie } from "./cookie";

export const getData = () => {
  return (dispatch) => {
    dispatch(getIngredients());
    axios
      .get(`${API_URL}${URL_KEY_INGREDIENTS}`)
      .then(({ data }) => dispatch(getIngredientsSuccess(data.data)))
      .catch(() => dispatch(getIngredientsFailed()));
  };
};

export const postOrder = (ingredientsIDs) => {
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
      })
      .then(() => dispatch(getProfileInfo()))
      .then(() => dispatch(loginFormSubmitSuccess()))
      .catch(() => dispatch(loginFormSubmitFailed()));
  };
};

export const getProfileInfo = () => {
  return (dispatch) => {
    axios
      .get(`${API_URL}${URL_KEY_USER}`, {
        headers: {
          Authorization: getCookie("token"),
        },
      })
      .then(({ data }) =>
        dispatch(getProfileValue(data.user.name, data.user.email))
      )
      .catch((err) => console.log(err));
  };
};
