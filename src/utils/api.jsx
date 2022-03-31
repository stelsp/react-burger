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
  URL_KEY_TOKEN,
  URL_KEY_LOGOUT,
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
import {
  getProfileValue,
  patchProfileValue,
  userIn,
} from "../services/actions/profileActions";

import { getCookie, setCookie, deleteCookie } from "./cookie";

export const getData = () => {
  return (dispatch) => {
    dispatch(getIngredients());
    (async () => {
      try {
        const res = await axios.get(`${API_URL}${URL_KEY_INGREDIENTS}`);
        dispatch(getIngredientsSuccess(res.data.data));
      } catch (err) {
        let error = await err;
        console.log(error.response);
        dispatch(getIngredientsFailed());
      }
    })();
  };
};

export const postOrder = (ingredientsIDs) => {
  return (dispatch) => {
    dispatch(getOrder());
    (async () => {
      try {
        const res = await axios.post(`${API_URL}${URL_KEY_ORDERS}`, {
          ingredients: ingredientsIDs,
        });
        dispatch(getOrderSuccess(res.data.data));
      } catch (err) {
        let error = await err;
        console.log(error.response);
        dispatch(getOrderFailed());
      }
    })();
  };
};

export const postForgotPasswordRequest = (email, history) => {
  return (dispatch) => {
    dispatch(forgotPasswordFormSubmit());
    (async () => {
      try {
        await axios.post(`${API_URL}${URL_KEY_PASSWORD_FORGOT}`, {
          email: email,
        });
        await dispatch(forgotPasswordFormSubmitSuccess());
        history.replace({ pathname: "/reset-password" });
      } catch (err) {
        let error = await err;
        console.log(error.response);
        dispatch(forgotPasswordFormSubmitFailed());
      }
    })();
  };
};

export const postResetPasswordRequest = (password, token) => {
  return (dispatch) => {
    dispatch(resetPasswordFormSubmit());
    (async () => {
      try {
        await axios.post(`${API_URL}${URL_KEY_PASSWORD_RESET}`, {
          password: password,
          token: token,
        });
        dispatch(resetPasswordFormSubmitSuccess());
      } catch (err) {
        let error = await err;
        console.log(error.response);
        dispatch(resetPasswordFormSubmitFailed());
      }
    })();
  };
};

export const postRegisterRequest = (email, password, name, history) => {
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
        dispatch(postLoginRequest(email, password, history));
      } catch (err) {
        let error = await err;
        console.log(error.response);
        dispatch(registerFormSubmitFailed());
      }
    })();
  };
};

export const postLoginRequest = (email, password, history) => {
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
        await dispatch(getProfileInfo());
        await dispatch(loginFormSubmitSuccess());
        await dispatch(userIn());
        history.replace({ pathname: "/" });
      } catch (err) {
        let error = await err;
        console.log(error.response);
        dispatch(loginFormSubmitFailed());
      }
    })();
  };
};

export const getProfileInfo = () => {
  return (dispatch) => {
    (async () => {
      try {
        const res = await axios.get(`${API_URL}${URL_KEY_USER}`, {
          headers: {
            Authorization: getCookie("accessToken"),
          },
        });
        dispatch(getProfileValue(res.data.user.name, res.data.user.email));
      } catch (err) {
        let error = await err;
        console.log(error.response);
      }
    })();
  };
};

export const patchProfileInfo = (name, email, password) => {
  return (dispatch) => {
    (async () => {
      try {
        const res = await axios.patch(
          `${API_URL}${URL_KEY_USER}`,
          { name: name, email: email, password: password },
          {
            headers: {
              Authorization: getCookie("accessToken"),
            },
          }
        );
        dispatch(patchProfileValue(name, res.data.user.name));
        dispatch(patchProfileValue(email, res.data.user.email));
        dispatch(patchProfileValue(password, res.data.user.password));
      } catch (err) {
        let error = await err;
        console.log(error.response);
      }
    })();
  };
};

export const refreshTokenRequest = () => {
  (async () => {
    try {
      const res = await axios.post(`${API_URL}${URL_KEY_TOKEN}`, {
        token: getCookie("refreshToken"),
      });
      setCookie("refreshToken", res.data.refreshToken);
      setCookie("accessToken", res.data.accessToken);
    } catch (err) {
      const error = await err;
      console.log(error.response);
    }
  })();
};
// TODO: добавить диспатч isAuth: true/false в зависимости от наличия accessToken
export const logOutRequest = () => {
  return (dispatch) => {
    (async () => {
      try {
        await axios.post(`${API_URL}${URL_KEY_LOGOUT}`, {
          token: getCookie("refreshToken"),
        });
        deleteCookie("accessToken");
        deleteCookie("refreshToken");
      } catch (err) {
        const error = await err;
        console.log(error.response);
      }
    })();
  };
};
