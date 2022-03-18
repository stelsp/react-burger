import { initialState } from "../rootReducer";
import { ACTIONS } from "../actions/actionTypes";

const loginReducer = (state = initialState.login, action) => {
  switch (action.type) {
    case ACTIONS.LOGIN_FORM_SET_VALUE: {
      return {
        ...state,
        login: {
          ...state.login,
          form: {
            ...state.form,
            [action.field]: action.value,
          },
        },
      };
    }

    default:
      return state;
  }
};

export default loginReducer;
