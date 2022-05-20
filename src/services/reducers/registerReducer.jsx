import { ACTIONS } from "../actions/actionTypes";

const initialState = {
  form: {
    name: "",
    email: "",
    password: "",
  },
  registrationRequest: false,
  registrationFailed: false,
};

const registerReducer = (state = initialState, action) => {
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
          name: "",
          email: "",
          password: "",
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
