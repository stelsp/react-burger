import { ThunkAction } from "redux-thunk";
import { Action, ActionCreator } from "redux";
import store from "../store";
import { TIngredientsActions } from "../actions/ingredientsActions/types";
import { TContructorActions } from "../actions/constructorActions/types";
import { TLoginActions } from "../actions/loginActions/types";
import { TProfileActions } from "../actions/profileActions/types";
import { TRegisterActions } from "../actions/registerActions/types";
import { TForgotPasswordFormActions } from "../actions/forgotPasswordActions/types";
import { TResetPasswordFormActions } from "../actions/resetPasswordActions/types";

export type RootState = ReturnType<typeof store.getState>;

// Типизация всех экшенов приложения
type TApplicationActions =
  | TIngredientsActions
  | TContructorActions
  | TLoginActions
  | TProfileActions
  | TRegisterActions
  | TForgotPasswordFormActions
  | TResetPasswordFormActions;

// Типизация thunk в нашем приложении
export type AppThunk<TReturn = void> = ActionCreator<
  ThunkAction<TReturn, Action, RootState, TApplicationActions>
>;

// Типизация метода dispatch для проверки на валидность отправляемого экшена
export type AppDispatch = typeof store.dispatch;
