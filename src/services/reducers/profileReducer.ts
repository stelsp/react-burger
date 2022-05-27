import { ACTIONS } from "../actions/actionTypes";
import { TProfileActions } from "../actions/profileActions/types";

type TInitialState = {
  name: string;
  login: string;
  password: string;
  isLoggedIn: boolean;
};

const initialState: TInitialState = {
  name: "",
  login: "",
  password: "",
  isLoggedIn: false,
};

const profileReducer = (
  state = initialState,
  action: TProfileActions
): TInitialState => {
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
