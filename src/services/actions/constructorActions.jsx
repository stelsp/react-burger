import axios from "axios";
import { ACTIONS } from "./actionTypes";
import { API_URL, URL_KEY_ORDERS } from "../../constants/api-url";

// constructor
export const getOrder = () => ({
  type: ACTIONS.GET_ORDER,
});

export const getOrderSuccess = (order) => ({
  type: ACTIONS.GET_ORDER_SUCCESS,
  order,
});

export const getOrderFailed = () => ({
  type: ACTIONS.GET_ORDER_FAILED,
});

export const postOrder = (ingredientsIDs) => {
  return (dispatch) => {
    dispatch(getOrder());
    (async () => {
      try {
        const res = await axios.post(`${API_URL}${URL_KEY_ORDERS}`, {
          ingredients: ingredientsIDs,
        });
        dispatch(getOrderSuccess(res.data));
      } catch (err) {
        console.log(err.response);

        dispatch(getOrderFailed());
      }
    })();
  };
};

export const resetConstructor = () => ({
  type: ACTIONS.RESET_CONSTRUCTOR,
});

export const deleteConstructorIngredient = (inner, id) => ({
  type: ACTIONS.DELETE_CONSTRUCTOR_INGREDIENT,
  inner: inner.filter((el) => el.id !== id),
});
