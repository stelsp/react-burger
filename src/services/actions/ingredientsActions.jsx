import axios from "axios";
import { ACTIONS } from "./actionTypes";
import { nanoid } from "@reduxjs/toolkit";
import update from "immutability-helper";
import { API_URL, URL_KEY_INGREDIENTS } from "../../constants/api-url";

// ingredients
export const getIngredients = () => ({
  type: ACTIONS.GET_INGREDIENTS,
});

export const getIngredientsSuccess = (ingredients) => ({
  type: ACTIONS.GET_INGREDIENTS_SUCCESS,
  ingredients: ingredients,
});

export const getIngredientsFailed = () => ({
  type: ACTIONS.GET_INGREDIENTS_FAILED,
});

export const setCurrentIngredient = (currentIngredient) => ({
  type: ACTIONS.SET_CURRENT_INGREDIENT,
  currentIngredient,
});

export const setCurrentTab = (currentTab) => ({
  type: ACTIONS.SET_CURRENT_TAB,
  currentTab,
});

export const getData = () => {
  return (dispatch) => {
    dispatch(getIngredients());
    (async () => {
      try {
        const res = await axios.get(`${API_URL}${URL_KEY_INGREDIENTS}`);
        dispatch(getIngredientsSuccess(res.data.data));
      } catch (err) {
        console.log(err.response);
        dispatch(getIngredientsFailed());
      }
    })();
  };
};

// dnd
export const dragIngredient = (inner, ingr) => {
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

export const sortIngredient = (card, index, atIndex, inner) => ({
  type: ACTIONS.SORT_INNER_INGREDIENT,
  inner: update(inner, {
    $splice: [
      [index, 1],
      [atIndex, 0, card],
    ],
  }),
});
