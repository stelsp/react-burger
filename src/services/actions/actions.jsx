import { ACTIONS } from "./actionTypes";
import { nanoid } from "@reduxjs/toolkit";
import update from "immutability-helper";

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

export const resetConstructor = () => ({
  type: ACTIONS.RESET_CONSTRUCTOR,
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

export const sortIngredient = (card, index, atIndex, inner) => ({
  type: ACTIONS.SORT_INNER_INGREDIENT,
  inner: update(inner, {
    $splice: [
      [index, 1],
      [atIndex, 0, card],
    ],
  }),
});

// login
export const setLoginFormValue = (field, value) => ({
  type: ACTIONS.LOGIN_FORM_SET_VALUE,
  field,
  value,
});
export const loginFormSubmit = () => ({
  type: ACTIONS.LOGIN_FORM_SUBMIT,
});
export const loginFormSubmitSuccess = () => ({
  type: ACTIONS.LOGIN_FORM_SUBMIT_SUCCESS,
});
export const loginFormSubmitFailed = () => ({
  type: ACTIONS.LOGIN_FORM_SUBMIT_FAILED,
});
// register
export const setRegisterFormValue = (field, value) => ({
  type: ACTIONS.REGISTER_FORM_SET_VALUE,
  field,
  value,
});
export const registerFormSubmit = () => ({
  type: ACTIONS.REGISTER_FORM_SUBMIT,
});
export const registerFormSubmitSuccess = () => ({
  type: ACTIONS.REGISTER_FORM_SUBMIT_SUCCESS,
});
export const registerFormSubmitFailed = () => ({
  type: ACTIONS.REGISTER_FORM_SUBMIT_FAILED,
});
// forgotPassword
export const setForgotPasswordFormValue = (field, value) => ({
  type: ACTIONS.FORGOT_PASSWORD_FORM_SET_VALUE,
  field,
  value,
});
export const forgotPasswordFormSubmit = () => ({
  type: ACTIONS.FORGOT_PASSWORD_FORM_SUBMIT,
});
export const forgotPasswordFormSubmitSuccess = () => ({
  type: ACTIONS.FORGOT_PASSWORD_FORM_SUBMIT_SUCCESS,
});
export const forgotPasswordFormSubmitFailed = () => ({
  type: ACTIONS.FORGOT_PASSWORD_FORM_SUBMIT_FAILED,
});
// resetPassword
export const setResetPasswordFormValue = (field, value) => ({
  type: ACTIONS.RESET_PASSWORD_FORM_SET_VALUE,
  field,
  value,
});
export const resetPasswordFormSubmit = () => ({
  type: ACTIONS.RESET_PASSWORD_FORM_SUBMIT,
});
export const resetPasswordFormSubmitSuccess = () => ({
  type: ACTIONS.RESET_PASSWORD_FORM_SUBMIT_SUCCESS,
});
export const resetPasswordFormSubmitFailed = () => ({
  type: ACTIONS.RESET_PASSWORD_FORM_SUBMIT_FAILED,
});
// profile
export const getProfileValue = (field, value) => ({
  type: ACTIONS.PROFILE_GET_VALUE,
  field,
  value,
});
export const setProfileValue = (name, login) => ({
  type: ACTIONS.PROFILE_SET_VALUE,
  name,
  login,
});
