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