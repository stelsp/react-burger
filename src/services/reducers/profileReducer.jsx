import { ACTIONS } from "../actions/actionTypes";

const initialState = {
  name: "",
  login: "",
  password: "",
  isLoggedIn: false,
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTIONS.PROFILE_GET_VALUE: {
      return {
        ...state,
        name: action.name,
        login: action.login,
      };
    }
    case ACTIONS.PROFILE_SET_VALUE: {
      return {
        ...state,
        [action.field]: action.value,
      };
    }
    case ACTIONS.PROFILE_PATCH_VALUE: {
      return {
        ...state,
        [action.field]: action.value,
      };
    }
    case ACTIONS.PROFILE_USER_IN: {
      return {
        ...state,
        isLoggedIn: true,
      };
    }
    case ACTIONS.PROFILE_USER_OUT: {
      return {
        ...state,
        isLoggedIn: false,
      };
    }

    default:
      return state;
  }
};

export default profileReducer;
