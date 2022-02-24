import { ACTIONS } from "./actionTypes";
import axios from "axios";
import {
  API_URL,
  URL_KEY_INGREDIENTS,
  URL_KEY_ORDERS,
} from "../constants/api-url";

// LOADING ACTIONS
const toggleLoadingData = (loading) => ({
  type: ACTIONS.TOGGLE_LOADING_DATA,
  loading,
});
const toggleLoadingOrder = (loading) => ({
  type: ACTIONS.TOGGLE_LOADING_ORDER,
  loading,
});

// GET DATA / GET ORDER ACTIONS
const getData = (ingredients) => ({
  type: ACTIONS.GET_INGR,
  bun: ingredients.filter((el) => el.type === "bun"),
  sauce: ingredients.filter((el) => el.type === "sauce"),
  main: ingredients.filter((el) => el.type === "main"),
});
export const getOrder = (order) => ({
  type: ACTIONS.GET_ORDER,
  order,
});

// GET CONSTRUCTOR INGR ACTIONS
const getConstructorIngr = (bun, sauce, main) => ({
  type: ACTIONS.GET_CONSTRUCTOR_INGR,
  outer: bun.find((el) => el.type === "bun"),
  inner: [...sauce.slice(2, 6), ...main.slice(2, 6)],
});

// GET CURRENT INGR ACTIONS
export const getCurrentIngr = (currentIngredient) => ({
  type: ACTIONS.GET_CURRENT_INGR,
  currentIngredient,
});

// SET CURRENT TAB
export const setCurrentTab = (currentTab) => ({
  type: ACTIONS.SET_CURRENT_TAB,
  currentTab,
});

// TODO: FIXME: fetchData/fetchOrder - надо перенести в отдельный файл
export const fetchData = () => {
  return (dispatch) => {
    dispatch(toggleLoadingData(true));
    axios
      .get(`${API_URL}${URL_KEY_INGREDIENTS}`)
      .then(({ data }) => {
        dispatch(getData(data.data));
        dispatch(
          getConstructorIngr(
            getData(data.data).bun,
            getData(data.data).sauce,
            getData(data.data).main
          )
        );
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
