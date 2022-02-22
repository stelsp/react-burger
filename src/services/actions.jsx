import { ACTIONS } from "./actionTypes";
import axios from "axios";
import {
  API_URL,
  URL_KEY_INGREDIENTS,
  URL_KEY_ORDERS,
} from "../constants/api-url";

const toggleLoadingData = (payload) => ({
  type: ACTIONS.TOGGLE_LOADING_DATA,
  loading: payload,
});

const toggleLoadingOrder = (payload) => ({
  type: ACTIONS.TOGGLE_LOADING_ORDER,
  loading: payload,
});

const getData = (payload) => ({
  type: ACTIONS.GET_DATA,
  data: payload,
});

export const getOrder = (payload) => ({
  type: ACTIONS.GET_ORDER,
  order: payload,
});

// fetchData/fetchOrder - надо перенести в отдельный файл

export const fetchData = () => {
  return (dispatch) => {
    dispatch(toggleLoadingData(true));
    axios
      .get(`${API_URL}${URL_KEY_INGREDIENTS}`)
      .then(({ data }) => {
        dispatch(getData(data.data));
      })
      .catch((err) => console.log(err))
      .finally(() => dispatch(toggleLoadingData(false)));
  };
};

export const fetchOrder = (ingredientsIDs) => {
  return (dispatch) => {
    dispatch(toggleLoadingOrder(true));
    axios
      .post(`${API_URL}${URL_KEY_ORDERS}`, {
        ingredients: ingredientsIDs,
      })
      .then(({ data }) => {
        dispatch(getOrder(data));
      })
      .catch((err) => console.log(err))
      .finally(() => dispatch(toggleLoadingOrder(false)));
  };
};
