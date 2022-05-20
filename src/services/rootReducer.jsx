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
import wsReducer from "./reducers/wsReducer";

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
  ws: wsReducer,
});

export default rootReducer;
