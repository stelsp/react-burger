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

    default:
      return state;
  }
};

export default registerReducer;
