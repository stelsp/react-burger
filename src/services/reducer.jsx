import { ACTIONS } from "./actionTypes";

let id = 0;

const reducer = (state = [], action) => {
  switch (action.type) {
    case ACTIONS.ADDED:
      return [
        ...state,
        {
          id: ++id,
          description: action.payload.description,
          resolved: true,
        },
      ];
    case ACTIONS.REMOVED:
      return state.filter((bug) => bug.id !== action.payload.id);

    case ACTIONS.RESOLVED:
      return state.map((bug) =>
        bug.id !== action.payload.id ? bug : { ...bug, resolved: false }
      );

    default:
      return state;
  }
};

export default reducer;
