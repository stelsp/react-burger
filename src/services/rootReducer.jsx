import { combineReducers } from "redux";
import ingredientsReducer from "./reducers/ingredientsReducer";
import orderReducer from "./reducers/orderReducer";
import constructorReducer from "./reducers/constructorReducer";
import currentIngredientReducer from "./reducers/currentIngredientReducer";
import loginReducer from "./reducers/loginReducer";

export const initialState = {
  ingredients: {
    category: {
      bun: [],
      sauce: [],
      main: [],
    },
    ingredientsRequest: false,
    ingredientsFailed: false,

    currentTab: "one",
  },
  constructor: {
    outer: "", // bun
    inner: [], // main + sauce
  },
  order: {
    order: null,
    orderRequest: false,
    orderFailed: false,
  },
  currentIngredient: null,
  login: {
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
        newPassword: "",
        emailCode: "",
      },
      resetPasswordRequest: false,
      resetPasswordFailed: false,
    },
  },
};

const rootReducer = combineReducers({
  ingredients: ingredientsReducer,
  order: orderReducer,
  burgerConstructor: constructorReducer,
  currentIngredient: currentIngredientReducer,
  login: loginReducer,
});

export default rootReducer;
