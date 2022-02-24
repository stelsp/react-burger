import axios from "axios";
import {
  API_URL,
  URL_KEY_INGREDIENTS,
  URL_KEY_ORDERS,
} from "../constants/api-url";

import {
  toggleLoadingData,
  toggleLoadingOrder,
  getData,
  getOrder,
  getConstructorIngr,
} from "../services/actions/actions";

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
