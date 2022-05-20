import axios from "axios";
import { ACTIONS } from "../actionTypes";
import { nanoid } from "@reduxjs/toolkit";
import update from "immutability-helper";
import { API_URL, URL_KEY_INGREDIENTS } from "../../../constants/api-url";
import { TIngredient } from "../../types/data";
import {
  IGetIngredientsAction,
  IGetIngredientsSuccessAction,
  IGetIngredientsFailedAction,
  ISetCurrentIngredientAction,
  ISetCurrentTabAction,
  IDragIngredientAction,
  ISortIngredientAction,
} from "./types";
import { AppDispatch, AppThunk } from "../../types";

// ingredients
export const getIngredients = (): IGetIngredientsAction => ({
  type: ACTIONS.GET_INGREDIENTS,
});

export const getIngredientsSuccess = (
  ingredients: TIngredient[]
): IGetIngredientsSuccessAction => ({
  type: ACTIONS.GET_INGREDIENTS_SUCCESS,
  ingredients: ingredients,
});

export const getIngredientsFailed = (): IGetIngredientsFailedAction => ({
  type: ACTIONS.GET_INGREDIENTS_FAILED,
});

export const setCurrentIngredient = (
  currentIngredient: TIngredient
): ISetCurrentIngredientAction => ({
  type: ACTIONS.SET_CURRENT_INGREDIENT,
  currentIngredient,
});

export const setCurrentTab = (currentTab: string): ISetCurrentTabAction => ({
  type: ACTIONS.SET_CURRENT_TAB,
  currentTab,
});

// dnd
export const dragIngredient = (
  inner: TIngredient[],
  ingr: TIngredient
): IDragIngredientAction => {
  return ingr.type !== "bun"
    ? {
        type: ACTIONS.DRAG_INNER_INGREDIENT,
        inner: [...inner, { ...ingr, id: nanoid() }],
      }
    : {
        type: ACTIONS.DRAG_OUTER_INGREDIENT,
        outer: ingr,
      };
};

export const sortIngredient = (
  card: TIngredient,
  index: any,
  atIndex: any,
  inner: TIngredient[]
): ISortIngredientAction => ({
  type: ACTIONS.SORT_INNER_INGREDIENT,
  inner: update(inner, {
    $splice: [
      [index, 1],
      [atIndex, 0, card],
    ],
  }),
});

export const getData: AppThunk = () => {
  return (dispatch: AppDispatch) => {
    dispatch(getIngredients());
    (async () => {
      try {
        const res = await axios.get(`${API_URL}${URL_KEY_INGREDIENTS}`);
        dispatch(getIngredientsSuccess(res.data.data));
      } catch (err: any) {
        console.log(err.response);
        dispatch(getIngredientsFailed());
      }
    })();
  };
};
