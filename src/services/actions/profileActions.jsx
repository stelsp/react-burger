import { ACTIONS } from "./actionTypes";

// profile
export const setProfileValue = (field, value) => ({
  type: ACTIONS.PROFILE_SET_VALUE,
  field,
  value,
});
export const getProfileValue = (name, login) => ({
  type: ACTIONS.PROFILE_GET_VALUE,
  name,
  login,
});
export const patchProfileValue = (field, value) => ({
  type: ACTIONS.PROFILE_PATCH_VALUE,
  field,
  value,
});
export const logIn = () => ({ type: ACTIONS.PROFILE_LOG_IN });
export const logOut = () => ({ type: ACTIONS.PROFILE_LOG_OUT });
