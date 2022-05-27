type TACTIONS = {
  // ingredients
  GET_INGREDIENTS: "GET_INGREDIENTS";
  GET_INGREDIENTS_SUCCESS: "GET_INGREDIENTS_SUCCESS";
  GET_INGREDIENTS_FAILED: "GET_INGREDIENTS_FAILED";

  SET_CURRENT_INGREDIENT: "SET_CURRENT_INGREDIENT";
  SET_CURRENT_TAB: "SET_CURRENT_TAB";

  // constructor
  GET_ORDER: "GET_ORDER";
  GET_ORDER_SUCCESS: "GET_ORDER_SUCCESS";
  GET_ORDER_FAILED: "GET_ORDER_FAILED";

  DRAG_INNER_INGREDIENT: "DRAG_INNER_INGREDIENT";
  DRAG_OUTER_INGREDIENT: "DRAG_OUTER_INGREDIENT";
  SORT_INNER_INGREDIENT: "SORT_INNER_INGREDIENT";
  RESET_CONSTRUCTOR: "RESET_CONSTRUCTOR";

  DELETE_CONSTRUCTOR_INGREDIENT: "DELETE_CONSTRUCTOR_INGREDIENT";

  TOGGLE_LOADING_ORDER: "TOGGLE_LOADING_ORDER";
  // profile
  PROFILE_GET_VALUE: "PROFILE_GET_VALUE";
  PROFILE_SET_VALUE: "PROFILE_SET_VALUE";
  PROFILE_PATCH_VALUE: "PROFILE_PATCH_VALUE";
  PROFILE_USER_IN: "PROFILE_USER_IN";
  PROFILE_USER_OUT: "PROFILE_USER_OUT";
  // login
  LOGIN_FORM_SET_VALUE: "LOGIN_FORM_SET_VALUE";
  LOGIN_FORM_SUBMIT: "LOGIN_FORM_SUBMIT";
  LOGIN_FORM_SUBMIT_SUCCESS: "LOGIN_FORM_SUBMIT_SUCCESS";
  LOGIN_FORM_SUBMIT_FAILED: "LOGIN_FORM_SUBMIT_FAILED";
  // register
  REGISTER_FORM_SET_VALUE: "REGISTER_FORM_SET_VALUE";
  REGISTER_FORM_SUBMIT_SUCCESS: "REGISTER_FORM_SUBMIT_SUCCESS";
  REGISTER_FORM_SUBMIT: "REGISTER_FORM_SUBMIT";
  REGISTER_FORM_SUBMIT_FAILED: "REGISTER_FORM_SUBMIT_FAILED";
  // forgotPassword
  FORGOT_PASSWORD_FORM_SET_VALUE: "FORGOT_PASSWORD_FORM_SET_VALUE";
  FORGOT_PASSWORD_FORM_SUBMIT: "FORGOT_PASSWORD_FORM_SUBMIT";
  FORGOT_PASSWORD_FORM_SUBMIT_SUCCESS: "FORGOT_PASSWORD_FORM_SUBMIT_SUCCESS";
  FORGOT_PASSWORD_FORM_SUBMIT_FAILED: "FORGOT_PASSWORD_FORM_SUBMIT_FAILED";
  // resetPassword
  RESET_PASSWORD_FORM_SET_VALUE: "RESET_PASSWORD_FORM_SET_VALUE";
  RESET_PASSWORD_FORM_SUBMIT: "RESET_PASSWORD_FORM_SUBMIT";
  RESET_PASSWORD_FORM_SUBMIT_SUCCESS: "RESET_PASSWORD_FORM_SUBMIT_SUCCESS";
  RESET_PASSWORD_FORM_SUBMIT_FAILED: "RESET_PASSWORD_FORM_SUBMIT_FAILED";

  // WS
  WS_CONNECTION_START: "WS_CONNECTION_START";
  WS_CONNECTION_USER_START: "WS_CONNECTION_USER_START";
  WS_CONNECTION_SUCCESS: "WS_CONNECTION_SUCCESS";
  WS_CONNECTION_ERROR: "WS_CONNECTION_ERROR";
  WS_GET_MESSAGE: "WS_GET_MESSAGE";
  WS_CONNECTION_CLOSED: "WS_CONNECTION_CLOSED";
  WS_CONNECTION_CLOSE: "WS_CONNECTION_CLOSE";
  WS_SEND_MESSAGE: "WS_SEND_MESSAGE";
};

export const ACTIONS: TACTIONS = {
  // ingredients
  GET_INGREDIENTS: "GET_INGREDIENTS",
  GET_INGREDIENTS_SUCCESS: "GET_INGREDIENTS_SUCCESS",
  GET_INGREDIENTS_FAILED: "GET_INGREDIENTS_FAILED",

  SET_CURRENT_INGREDIENT: "SET_CURRENT_INGREDIENT",
  SET_CURRENT_TAB: "SET_CURRENT_TAB",

  // constructor
  GET_ORDER: "GET_ORDER",
  GET_ORDER_SUCCESS: "GET_ORDER_SUCCESS",
  GET_ORDER_FAILED: "GET_ORDER_FAILED",

  DRAG_INNER_INGREDIENT: "DRAG_INNER_INGREDIENT",
  DRAG_OUTER_INGREDIENT: "DRAG_OUTER_INGREDIENT",
  SORT_INNER_INGREDIENT: "SORT_INNER_INGREDIENT",
  RESET_CONSTRUCTOR: "RESET_CONSTRUCTOR",

  DELETE_CONSTRUCTOR_INGREDIENT: "DELETE_CONSTRUCTOR_INGREDIENT",

  TOGGLE_LOADING_ORDER: "TOGGLE_LOADING_ORDER",
  // profile
  PROFILE_GET_VALUE: "PROFILE_GET_VALUE",
  PROFILE_SET_VALUE: "PROFILE_SET_VALUE",
  PROFILE_PATCH_VALUE: "PROFILE_PATCH_VALUE",
  PROFILE_USER_IN: "PROFILE_USER_IN",
  PROFILE_USER_OUT: "PROFILE_USER_OUT",
  // login
  LOGIN_FORM_SET_VALUE: "LOGIN_FORM_SET_VALUE",
  LOGIN_FORM_SUBMIT: "LOGIN_FORM_SUBMIT",
  LOGIN_FORM_SUBMIT_SUCCESS: "LOGIN_FORM_SUBMIT_SUCCESS",
  LOGIN_FORM_SUBMIT_FAILED: "LOGIN_FORM_SUBMIT_FAILED",
  // register
  REGISTER_FORM_SET_VALUE: "REGISTER_FORM_SET_VALUE",
  REGISTER_FORM_SUBMIT_SUCCESS: "REGISTER_FORM_SUBMIT_SUCCESS",
  REGISTER_FORM_SUBMIT: "REGISTER_FORM_SUBMIT",
  REGISTER_FORM_SUBMIT_FAILED: "REGISTER_FORM_SUBMIT_FAILED",
  // forgotPassword
  FORGOT_PASSWORD_FORM_SET_VALUE: "FORGOT_PASSWORD_FORM_SET_VALUE",
  FORGOT_PASSWORD_FORM_SUBMIT: "FORGOT_PASSWORD_FORM_SUBMIT",
  FORGOT_PASSWORD_FORM_SUBMIT_SUCCESS: "FORGOT_PASSWORD_FORM_SUBMIT_SUCCESS",
  FORGOT_PASSWORD_FORM_SUBMIT_FAILED: "FORGOT_PASSWORD_FORM_SUBMIT_FAILED",
  // resetPassword
  RESET_PASSWORD_FORM_SET_VALUE: "RESET_PASSWORD_FORM_SET_VALUE",
  RESET_PASSWORD_FORM_SUBMIT: "RESET_PASSWORD_FORM_SUBMIT",
  RESET_PASSWORD_FORM_SUBMIT_SUCCESS: "RESET_PASSWORD_FORM_SUBMIT_SUCCESS",
  RESET_PASSWORD_FORM_SUBMIT_FAILED: "RESET_PASSWORD_FORM_SUBMIT_FAILED",

  // WS
  WS_CONNECTION_START: "WS_CONNECTION_START",
  WS_CONNECTION_USER_START: "WS_CONNECTION_USER_START",
  WS_CONNECTION_SUCCESS: "WS_CONNECTION_SUCCESS",
  WS_CONNECTION_ERROR: "WS_CONNECTION_ERROR",
  WS_GET_MESSAGE: "WS_GET_MESSAGE",
  WS_CONNECTION_CLOSED: "WS_CONNECTION_CLOSED",
  WS_CONNECTION_CLOSE: "WS_CONNECTION_CLOSE",
  WS_SEND_MESSAGE: "WS_SEND_MESSAGE",
};
