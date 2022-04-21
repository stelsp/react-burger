import axios from "axios";
import { API_URL, URL_KEY_TOKEN } from "../constants/api-url";
import { getCookie, setCookie } from "./cookie";

export const refreshTokenRequest = () => {
  (async () => {
    try {
      const res = await axios.post(`${API_URL}${URL_KEY_TOKEN}`, {
        token: getCookie("refreshToken"),
      });
      console.log(res);
      setCookie("refreshToken", res.data.refreshToken);
      setCookie("accessToken", res.data.accessToken);
    } catch (err) {
      console.log(err.response);
    }
  })();
};
