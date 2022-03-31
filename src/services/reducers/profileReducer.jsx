import { initialState } from "../rootReducer";
import { ACTIONS } from "../actions/actionTypes";

const profileReducer = (state = initialState.profile, action) => {
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
        user: true,
      };
    }
    case ACTIONS.PROFILE_USER_OUT: {
      return {
        ...state,
        user: false,
      };
    }

    default:
      return state;
  }
};

export default profileReducer;
