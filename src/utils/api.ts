import axios from "axios";
import { API_URL, URL_KEY_TOKEN } from "../constants/api-url";
import { getCookie, setCookie, deleteCookie } from "./cookie";

export const refreshTokenRequest = () => {
  (async () => {
    try {
      const res = await axios.post(`${API_URL}${URL_KEY_TOKEN}`, {
        token: getCookie("refreshToken"),
      });
      deleteCookie("refreshToken");
      deleteCookie("accessToken");
      setCookie("refreshToken", res.data.refreshToken);
      setCookie("accessToken", res.data.accessToken);
    } catch (err: any) {
      console.log(err.response);
    }
  })();
};
