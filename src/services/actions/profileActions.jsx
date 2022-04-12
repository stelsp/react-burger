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

export const userIn = () => ({ type: ACTIONS.PROFILE_USER_IN });
export const userOut = () => ({ type: ACTIONS.PROFILE_USER_OUT });
