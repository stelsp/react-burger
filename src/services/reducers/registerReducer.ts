import { ACTIONS } from "../actions/actionTypes";
import { TRegisterActions } from "../actions/registerActions/types";

type TInitialState = {
  form: {
    name: string;
    email: string;
    password: string;
  };
  registrationRequest: boolean;
  registrationFailed: boolean;
};

const initialState: TInitialState = {
  form: {
    name: "",
    email: "",
    password: "",
  },
  registrationRequest: false,
  registrationFailed: false,
};

const registerReducer = (
  state = initialState,
  action: TRegisterActions
): TInitialState => {
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
        registrationRequest: true,
        registrationFailed: false,
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
        registrationRequest: false,
      };
    }
    case ACTIONS.REGISTER_FORM_SUBMIT_FAILED: {
      return {
        ...state,
        registrationRequest: false,
        registrationFailed: true,
      };
    }

    default:
      return state;
  }
};

export default registerReducer;
