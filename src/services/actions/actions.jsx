import { ACTIONS } from "./actionTypes";

// DATA
export const toggleLoadingData = (loading) => ({
  type: ACTIONS.TOGGLE_LOADING_DATA,
  loading,
});
export const getData = (ingredients) => ({
  type: ACTIONS.GET_INGR,
  bun: ingredients.filter((el) => el.type === "bun"),
  sauce: ingredients.filter((el) => el.type === "sauce"),
  main: ingredients.filter((el) => el.type === "main"),
});

// ORDER
export const toggleLoadingOrder = (loading) => ({
  type: ACTIONS.TOGGLE_LOADING_ORDER,
  loading,
});
export const getOrder = (order) => ({
  type: ACTIONS.GET_ORDER,
  order,
});

// CONSTRUCTOR INGR
export const getConstructorIngr = (bun, sauce, main) => ({
  type: ACTIONS.GET_CONSTRUCTOR_INGR,
  outer: bun.find((el) => el.type === "bun"),
  inner: [...sauce.slice(2, 6), ...main.slice(2, 6)],
});

// CURRENT INGR
export const getCurrentIngr = (currentIngredient) => ({
  type: ACTIONS.GET_CURRENT_INGR,
  currentIngredient,
});

// CURRENT TAB
export const setCurrentTab = (currentTab) => ({
  type: ACTIONS.SET_CURRENT_TAB,
  currentTab,
});
