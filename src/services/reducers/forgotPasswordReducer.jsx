import { initialState } from "../rootReducer";
import { ACTIONS } from "../actions/actionTypes";

const forgotPasswordReducer = (state = initialState.forgotPassword, action) => {
  switch (action.type) {
    case ACTIONS.FORGOT_PASSWORD_FORM_SET_VALUE: {
      return {
        ...state,
        form: {
          ...state.form,
          [action.field]: action.value,
        },
      };
    }

    default:
      return state;
  }
};

export default forgotPasswordReducer;
