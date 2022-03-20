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
    case ACTIONS.RESET_PASSWORD_FORM_SUBMIT: {
      return {
        ...state,
        resetPasswordRequest: true,
        resetPasswordFailed: false,
      };
    }
    case ACTIONS.RESET_PASSWORD_FORM_SUBMIT_SUCCESS: {
      return {
        ...state,
        form: {
          // При успешной регистрацией сбрасываем форму до исходного состояния
          ...initialState.resetPassword.form,
        },
        resetPasswordRequest: false,
      };
    }
    case ACTIONS.RESET_PASSWORD_FORM_SUBMIT_FAILED: {
      return {
        ...state,
        resetPasswordRequest: false,
        resetPasswordFailed: true,
      };
    }

    default:
      return state;
  }
};

export default resetPasswordReducer;
