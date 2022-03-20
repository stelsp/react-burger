import { initialState } from "../rootReducer";
import { ACTIONS } from "../actions/actionTypes";

const registerReducer = (state = initialState.register, action) => {
  switch (action.type) {
    case ACTIONS.REGISTER_FORM_SET_VALUE: {
      return {
        ...state,
        form: {
          ...state.form,
          [action.field]: action.value,
        },
      };
    }
    case ACTIONS.REGISTER_FORM_SUBMIT: {
      return {
        ...state,
        registerRequest: true,
        registerFailed: false,
      };
    }
    case ACTIONS.REGISTER_FORM_SUBMIT_SUCCESS: {
      return {
        ...state,
        form: {
          // При успешной регистрацией сбрасываем форму до исходного состояния
          ...initialState.register.form,
        },
        registerRequest: false,
      };
    }
    case ACTIONS.REGISTER_FORM_SUBMIT_FAILED: {
      return {
        ...state,
        registerRequest: false,
        registerFailed: true,
      };
    }

    default:
      return state;
  }
};

export default registerReducer;
