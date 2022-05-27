import { compose, createStore, applyMiddleware } from "redux";
import rootReducer from "./rootReducer";
import thunk from "redux-thunk";
import { ACTIONS } from "./actions/actionTypes";
import { wsMiddleware } from "./middleware/wsMiddleware";
import { IwsActions } from "./types";

const wsActions: IwsActions = {
  wsInit: ACTIONS.WS_CONNECTION_START,
  wsInitUser: ACTIONS.WS_CONNECTION_USER_START,
  wsSendMessage: ACTIONS.WS_SEND_MESSAGE,
  onOpen: ACTIONS.WS_CONNECTION_SUCCESS,
  onClose: ACTIONS.WS_CONNECTION_CLOSED,
  close: ACTIONS.WS_CONNECTION_CLOSE,
  onError: ACTIONS.WS_CONNECTION_ERROR,
  onMessage: ACTIONS.WS_GET_MESSAGE,
};

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancer = composeEnhancers(
  applyMiddleware(
    thunk,
    wsMiddleware("wss://norma.nomoreparties.space/orders", wsActions)
  )
);

const store = createStore(rootReducer, enhancer);

export default store;
