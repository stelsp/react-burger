import axios from "axios";
import { ACTIONS } from "../actionTypes";
import { API_URL, URL_KEY_ORDERS } from "../../../constants/api-url";
import { getCookie } from "../../../utils/cookie";

import { TIngredient } from "../../types/data";
import { TOrderSuccess } from "../../types/data";

import {
  IGetOrderAction,
  IGetOrderSuccessAction,
  IGetOrderFailedAction,
  IResetConstructorAction,
  IDeleteConstructorIngredientAction,
} from "./types";
import { AppDispatch, AppThunk } from "../../types";

// constructor
export const getOrder = (): IGetOrderAction => ({
  type: ACTIONS.GET_ORDER,
});

export const getOrderSuccess = (
  order: TOrderSuccess | null
): IGetOrderSuccessAction => ({
  type: ACTIONS.GET_ORDER_SUCCESS,
  order,
});

export const getOrderFailed = (): IGetOrderFailedAction => ({
  type: ACTIONS.GET_ORDER_FAILED,
});

export const resetConstructor = (): IResetConstructorAction => ({
  type: ACTIONS.RESET_CONSTRUCTOR,
});

export const deleteConstructorIngredient = (
  inner: TIngredient[],
  id: string
): IDeleteConstructorIngredientAction => ({
  type: ACTIONS.DELETE_CONSTRUCTOR_INGREDIENT,
  inner: inner?.filter((el) => el.id !== id),
});

export const postOrder: AppThunk = (ingredientsIDs: string[]) => {
  return (dispatch: AppDispatch) => {
    dispatch(getOrder());
    (async () => {
      try {
        const res = await axios.post(
          `${API_URL}${URL_KEY_ORDERS}`,
          {
            ingredients: ingredientsIDs,
          },
          {
            headers: {
              Authorization: getCookie("accessToken"),
            },
          }
        );
        dispatch(getOrderSuccess(res.data));
        console.log(res);
      } catch (err: any) {
        console.log(err.response);

        dispatch(getOrderFailed());
      }
    })();
  };
};
