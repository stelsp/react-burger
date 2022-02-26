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
  inner: [...sauce.slice(0, 1), ...main.slice(1, 2)],
});
export const deleteConstructorIngr = (inner, id) => ({
  type: ACTIONS.DELETE_CONSTRUCTOR_INGR,
  inner: inner.filter((el) => el._id !== id),
});
export const dragIngr = (inner, ingr) => {
  if (ingr.type !== "bun")
    return {
      type: ACTIONS.DRAG_INNER,
      inner: [...inner, ingr],
    };
  if (ingr.type === "bun")
    return {
      type: ACTIONS.DRAG_OUTER,
      outer: ingr,
    };
};

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
