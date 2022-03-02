import axios from "axios";
import {
  API_URL,
  URL_KEY_INGREDIENTS,
  URL_KEY_ORDERS,
} from "../constants/api-url";

import {
  toggleLoadingOrder,
  getOrder,
  getOrderSuccess,
  getOrderFailed,
  getIngredients,
  getIngredientsSuccess,
  getIngredientsFailed,
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
      .then(({ data }) => {
        dispatch(getOrderSuccess(data));
      })
      .catch(() => dispatch(getOrderFailed()));
  };
};
