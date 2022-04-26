import { compose, createStore, applyMiddleware } from "redux";
import rootReducer from "./rootReducer";
import thunk from "redux-thunk";
import { ACTIONS } from "./actions/actionTypes";
import { getCookie } from "../utils/cookie";

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

export const socketMiddleware = (wsUrl, wsActions) => {
  return (store) => {
    let socket = null;

    return (next) => (action) => {
      const { dispatch, getState } = store;
      const { type, payload } = action;
      const {
        wsInit,
        wsInitUser,
        wsSendMessage,
        onOpen,
        onClose,
        close,
        onError,
        onMessage,
      } = wsActions;
      const { isLoggedIn } = getState().profile;

      if (type === wsInit) {
        socket = new WebSocket(`${wsUrl}/all`);
      }
      if (type === wsInitUser && isLoggedIn) {
        socket = new WebSocket(
          `${wsUrl}?token=${getCookie("accessToken").split(" ")[1]}`
        );
      }

      if (socket) {
        socket.onopen = (event) => {
          dispatch({ type: onOpen, payload: event });
        };

        socket.onerror = (event) => {
          dispatch({ type: onError, payload: event });
        };

        socket.onmessage = (event) => {
          const { data } = event;
          const parsedData = JSON.parse(data);

          dispatch({ type: onMessage, payload: parsedData });
        };

        socket.onclose = (event) => {
          dispatch({ type: onClose, payload: event });
        };

        if (type === close) {
          socket.close();
        }

        if (type === wsSendMessage) {
          const message = { ...payload, token: getCookie("accessToken") };
          socket.send(JSON.stringify(message));
        }
      }

      next(action);
    };
  };
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
