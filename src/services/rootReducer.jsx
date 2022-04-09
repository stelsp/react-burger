import { combineReducers } from "redux";
import ingredientsReducer from "./reducers/ingredientsReducer";
import orderReducer from "./reducers/orderReducer";
import constructorReducer from "./reducers/constructorReducer";
import currentIngredientReducer from "./reducers/currentIngredientReducer";
import loginReducer from "./reducers/loginReducer";
import registerReducer from "./reducers/registerReducer";
import forgotPasswordReducer from "./reducers/forgotPasswordReducer";
import resetPasswordReducer from "./reducers/resetPasswordReducer";
import profileReducer from "./reducers/profileReducer";

export const initialState = {
  ingredients: {
    ingredients: [],
    ingredientsRequest: false,
    ingredientsFailed: false,
    currentTab: "bun",
  },
  currentIngredient: null,
  constructor: {
    outer: "", // bun
    inner: [], // main + sauce
  },
  order: {
    order: null,
    orderRequest: false,
    orderFailed: false,
  },
  login: {
    form: {
      email: "",
      password: "",
    },
    loginRequest: false,
    loginFailed: false,
  },
  register: {
    form: {
      name: "",
      email: "",
      password: "",
    },
    registrationRequest: false,
    registrationFailed: false,
  },
  forgotPassword: {
    form: {
      email: "",
    },
    forgotPasswordRequest: false,
    forgotPasswordFailed: false,
  },
  resetPassword: {
    form: {
      token: "",
      password: "",
    },
    resetPasswordRequest: false,
    resetPasswordFailed: false,
  },
  profile: {
    name: "",
    login: "",
    password: "",
    user: false,
  },
};

const rootReducer = combineReducers({
  ingredients: ingredientsReducer,
  order: orderReducer,
  burgerConstructor: constructorReducer,
  currentIngredient: currentIngredientReducer,
  login: loginReducer,
  register: registerReducer,
  forgotPassword: forgotPasswordReducer,
  resetPassword: resetPasswordReducer,
  profile: profileReducer,
});

export default rootReducer;
