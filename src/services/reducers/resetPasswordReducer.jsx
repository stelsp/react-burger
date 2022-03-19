import { initialState } from "../rootReducer";
import { ACTIONS } from "../actions/actionTypes";

const resetPasswordReducer = (state = initialState.resetPassword, action) => {
  switch (action.type) {
    case ACTIONS.RESET_PASSWORD_FORM_SET_VALUE: {
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

export default resetPasswordReducer;
