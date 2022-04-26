import axios from "axios";
import { ACTIONS } from "./actionTypes";
import { API_URL, URL_KEY_LOGOUT, URL_KEY_USER } from "../../constants/api-url";
import { deleteCookie, getCookie } from "../../utils/cookie";
// import { refreshTokenRequest } from "../../utils/api";

// profile
export const setProfileValue = (field, value) => ({
  type: ACTIONS.PROFILE_SET_VALUE,
  field,
  value,
});

export const getProfileValue = (name, login) => ({
  type: ACTIONS.PROFILE_GET_VALUE,
  name,
  login,
});

export const patchProfileValue = (field, value) => ({
  type: ACTIONS.PROFILE_PATCH_VALUE,
  field,
  value,
});

export const getProfileInfo = () => {
  // refreshTokenRequest();
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
        console.log(err.response);
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
        console.log(err.response);
      }
    })();
  };
};

export const logOutRequest = () => {
  return (dispatch) => {
    (async () => {
      try {
        await axios.post(`${API_URL}${URL_KEY_LOGOUT}`, {
          token: getCookie("refreshToken"),
        });
        deleteCookie("accessToken");
        deleteCookie("refreshToken");
        await dispatch(userOut());
      } catch (err) {
        console.log(err.response);
      }
    })();
  };
};

export const userIn = () => ({ type: ACTIONS.PROFILE_USER_IN });
export const userOut = () => ({ type: ACTIONS.PROFILE_USER_OUT });
