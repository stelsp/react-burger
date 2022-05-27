import { ACTIONS } from "../actions/actionTypes";
import { TForgotPasswordFormActions } from "../actions/forgotPasswordActions/types";

type TInitialState = {
  form: {
    email: string;
  };
  forgotPasswordRequest: boolean;
  forgotPasswordFailed: boolean;
};

const initialState: TInitialState = {
  form: {
    email: "",
  },
  forgotPasswordRequest: false,
  forgotPasswordFailed: false,
};

const forgotPasswordReducer = (
  state = initialState,
  action: TForgotPasswordFormActions
): TInitialState => {
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
    case ACTIONS.FORGOT_PASSWORD_FORM_SUBMIT: {
      return {
        ...state,
        forgotPasswordRequest: true,
        forgotPasswordFailed: false,
      };
    }
    case ACTIONS.FORGOT_PASSWORD_FORM_SUBMIT_SUCCESS: {
      return {
        ...state,
        form: {
          // При успешной регистрацией сбрасываем форму до исходного состояния
          email: "",
        },
        forgotPasswordRequest: false,
      };
    }
    case ACTIONS.FORGOT_PASSWORD_FORM_SUBMIT_FAILED: {
      return {
        ...state,
        forgotPasswordRequest: false,
        forgotPasswordFailed: true,
      };
    }

    default:
      return state;
  }
};

export default forgotPasswordReducer;
