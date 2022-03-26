import { initialState } from "../rootReducer";
import { ACTIONS } from "../actions/actionTypes";

const loginReducer = (state = initialState.login, action) => {
  switch (action.type) {
    case ACTIONS.LOGIN_FORM_SET_VALUE: {
      return {
        ...state,
        form: {
          ...state.form,
          [action.field]: action.value,
        },
      };
    }
    case ACTIONS.LOGIN_FORM_SUBMIT: {
      return {
        ...state,
        loginRequest: true,
        loginFailed: false,
      };
    }
    case ACTIONS.LOGIN_FORM_SUBMIT_SUCCESS: {
      return {
        ...state,
        form: {
          // При успешной регистрацией сбрасываем форму до исходного состояния
          ...state.form,
        },
        loginRequest: false,
      };
    }
    case ACTIONS.LOGIN_FORM_SUBMIT_FAILED: {
      return {
        ...state,
        loginRequest: false,
        loginFailed: true,
      };
    }

    default:
      return state;
  }
};

export default loginReducer;
