import { ACTIONS } from "./actionTypes";
import { nanoid } from "@reduxjs/toolkit";

// ingredients
export const setIngredients = (ingredients) => ({
  type: ACTIONS.SET_INGREDIENTS,
  bun: ingredients.filter((el) => el.type === "bun"),
  sauce: ingredients.filter((el) => el.type === "sauce"),
  main: ingredients.filter((el) => el.type === "main"),
});

export const setCurrentIngredient = (currentIngredient) => ({
  type: ACTIONS.SET_CURRENT_INGREDIENT,
  currentIngredient,
});

export const setCurrentTab = (currentTab) => ({
  type: ACTIONS.SET_CURRENT_TAB,
  currentTab,
});

export const toggleLoadingIngredients = (loading) => ({
  type: ACTIONS.TOGGLE_LOADING_DATA,
  loading,
});

// constructor
export const setOrder = (order) => ({
  type: ACTIONS.SET_ORDER,
  order,
});

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

export const deleteConstructorIngredient = (inner, id) => ({
  type: ACTIONS.DELETE_CONSTRUCTOR_INGREDIENT,
  inner: inner.filter((el) => el.id !== id),
});

export const toggleLoadingOrder = (loading) => ({
  type: ACTIONS.TOGGLE_LOADING_ORDER,
  loading,
});
