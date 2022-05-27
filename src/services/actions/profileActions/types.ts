import { ACTIONS } from "../actionTypes";

export interface ISetProfileValueAction {
  readonly type: typeof ACTIONS.PROFILE_SET_VALUE;
  readonly field: string;
  readonly value: string;
}

export interface IGetProfileValueAction {
  readonly type: typeof ACTIONS.PROFILE_GET_VALUE;
  readonly name: string;
  readonly login: string;
}

export interface IPatchProfileValueAction {
  readonly type: typeof ACTIONS.PROFILE_PATCH_VALUE;
  readonly field: string;
  readonly value: string;
}

export interface IUserInAction {
  readonly type: typeof ACTIONS.PROFILE_USER_IN;
}

export interface IUserOutAction {
  readonly type: typeof ACTIONS.PROFILE_USER_OUT;
}

export type TProfileActions =
  | ISetProfileValueAction
  | IGetProfileValueAction
  | IPatchProfileValueAction
  | IUserInAction
  | IUserOutAction;
