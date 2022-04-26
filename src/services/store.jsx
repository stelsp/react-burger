import { compose, createStore, applyMiddleware } from "redux";
import rootReducer from "./rootReducer";
import thunk from "redux-thunk";
import { ACTIONS } from "./actions/actionTypes";
import { socketMiddleware } from "./middleware/socketMiddleware";

const wsActions = {
  wsInit: ACTIONS.WS_CONNECTION_START,
  wsInitUser: ACTIONS.WS_CONNECTION_USER_START,
  wsSendMessage: ACTIONS.WS_SEND_MESSAGE,
  onOpen: ACTIONS.WS_CONNECTION_SUCCESS,
  onClose: ACTIONS.WS_CONNECTION_CLOSED,
  close: ACTIONS.WS_CONNECTION_CLOSE,
  onError: ACTIONS.WS_CONNECTION_ERROR,
  onMessage: ACTIONS.WS_GET_MESSAGE,
};

const composeEnhancers =
  typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose;

const enhancer = composeEnhancers(
  applyMiddleware(
    thunk,
    socketMiddleware("wss://norma.nomoreparties.space/orders", wsActions)
  )
);

const store = createStore(rootReducer, enhancer);

export default store;
