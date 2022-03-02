import { combineReducers } from "redux";
import ingredientsReducer from "./reducers/ingredientsReducer";
import orderReducer from "./reducers/orderReducer";
import constructorReducer from "./reducers/constructorReducer";
import currentIngredientReducer from "./reducers/currentIngredientReducer";

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
};

const rootReducer = combineReducers({
  ingredients: ingredientsReducer,
  order: orderReducer,
  constructo: constructorReducer,
  currentIngredient: currentIngredientReducer,
});

export default rootReducer;
