import { combineReducers } from "redux";
import ingredientsReducer from "./reducers/ingredientsReducer";
import orderReducer from "./reducers/orderReducer";
import constructorReducer from "./reducers/constructorReducer";

export const initialState = {
  ingredients: {
    category: {
      bun: [],
      sauce: [],
      main: [],
    },
    loading: true,
    currentTab: "one",
    currentIngredient: null,
  },
  constructor: {
    outer: {}, // bun
    inner: [], // main + sauce
  },
  order: {
    order: null,
    loading: false,
  },
};

const rootReducer = combineReducers({
  ingredientsReducer,
  constructorReducer,
  orderReducer,
});

export default rootReducer;
