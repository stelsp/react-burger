import axios from "axios";
import { ACTIONS } from "../actionTypes";
import {
  API_URL,
  URL_KEY_LOGOUT,
  URL_KEY_USER,
} from "../../../constants/api-url";
import { deleteCookie, getCookie } from "../../../utils/cookie";
import { refreshTokenRequest } from "../../../utils/api";
import {
  ISetProfileValueAction,
  IGetProfileValueAction,
  IPatchProfileValueAction,
  IUserInAction,
  IUserOutAction,
} from "./types";
import { AppDispatch, AppThunk } from "../../types";

// profile
export const setProfileValue = (
  field: string,
  value: string
): ISetProfileValueAction => ({
  type: ACTIONS.PROFILE_SET_VALUE,
  field,
  value,
});

export const getProfileValue = (
  name: string,
  login: string
): IGetProfileValueAction => ({
  type: ACTIONS.PROFILE_GET_VALUE,
  name,
  login,
});

export const patchProfileValue = (
  field: string,
  value: string
): IPatchProfileValueAction => ({
  type: ACTIONS.PROFILE_PATCH_VALUE,
  field,
  value,
});

export const userIn = (): IUserInAction => ({ type: ACTIONS.PROFILE_USER_IN });
export const userOut = (): IUserOutAction => ({
  type: ACTIONS.PROFILE_USER_OUT,
});

export const getProfileInfo: AppThunk = () => {
  refreshTokenRequest();
  return (dispatch: AppDispatch) => {
    (async () => {
      try {
        const res = await axios.get(`${API_URL}${URL_KEY_USER}`, {
          headers: {
            Authorization: getCookie("accessToken"),
          },
        });
        dispatch(getProfileValue(res.data.user.name, res.data.user.email));
      } catch (err: any) {
        console.log(err.response);
      }
    })();
  };
};

export const patchProfileInfo: AppThunk = (
  name: string,
  email: string,
  password: string
) => {
  return (dispatch: AppDispatch) => {
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
      } catch (err: any) {
        console.log(err.response);
      }
    })();
  };
};

export const logOutRequest: AppThunk = () => {
  return (dispatch: AppDispatch) => {
    (async () => {
      try {
        await axios.post(`${API_URL}${URL_KEY_LOGOUT}`, {
          token: getCookie("refreshToken"),
        });
        deleteCookie("accessToken");
        deleteCookie("refreshToken");
        dispatch(userOut());
      } catch (err: any) {
        console.log(err.response);
      }
    })();
  };
};
