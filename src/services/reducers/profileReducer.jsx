import { initialState } from "../rootReducer";
import { ACTIONS } from "../actions/actionTypes";

const profileReducer = (state = initialState.profile, action) => {
  switch (action.type) {
    case ACTIONS.PROFILE_GET_VALUE: {
      return {
        ...state,
        [action.field]: action.value,
      };
    }
    case ACTIONS.PROFILE_SET_VALUE: {
      return {
        ...state,
        [action.field]: action.value,
      };
    }

    default:
      return state;
  }
};

export default profileReducer;