import axios from "axios";
import {
  API_URL,
  URL_KEY_INGREDIENTS,
  URL_KEY_ORDERS,
} from "../constants/api-url";

import {
  toggleLoadingIngredients,
  toggleLoadingOrder,
  setOrder,
  setIngredients,
} from "../services/actions/actions";

export const fetchData = () => {
  return (dispatch) => {
    dispatch(toggleLoadingIngredients(true));
    axios
      .get(`${API_URL}${URL_KEY_INGREDIENTS}`)
      .then(({ data }) => {
        dispatch(setIngredients(data.data));
      })
      .catch((err) => console.log(err))
      .finally(() => dispatch(toggleLoadingIngredients(false)));
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
        dispatch(setOrder(data));
      })
      .catch((err) => console.log(err))
      .finally(() => dispatch(toggleLoadingOrder(false)));
  };
};
