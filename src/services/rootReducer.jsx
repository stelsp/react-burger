import { combineReducers } from "redux";
import {
  ingredientsReducer,
  orderReducer,
  constructorReducer,
} from "./reducer";

const rootReducer = combineReducers({
  ingredientsReducer,
  constructorReducer,
  orderReducer,
});

export default rootReducer;
