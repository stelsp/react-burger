import { ACTIONS } from "./actionTypes";
import { nanoid } from "@reduxjs/toolkit";

// ingredients
export const getIngredients = () => ({
  type: ACTIONS.GET_INGREDIENTS,
});

export const getIngredientsSuccess = (ingredients) => ({
  type: ACTIONS.GET_INGREDIENTS_SUCCESS,
  bun: ingredients.filter((el) => el.type === "bun"),
  sauce: ingredients.filter((el) => el.type === "sauce"),
  main: ingredients.filter((el) => el.type === "main"),
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

export const deleteConstructorIngredient = (inner, id) => ({
  type: ACTIONS.DELETE_CONSTRUCTOR_INGREDIENT,
  inner: inner.filter((el) => el.id !== id),
});

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
