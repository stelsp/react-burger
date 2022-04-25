import { compose, createStore, applyMiddleware } from "redux";
import rootReducer from "./rootReducer";
import thunk from "redux-thunk";
import { ACTIONS } from "./actions/actionTypes";
import { getCookie } from "../utils/cookie";

const token = getCookie("accessToken");

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

export const socketMiddleware = (wsUrl, wsActions, token) => {
  return (store) => {
    let socket = null;

    return (next) => (action) => {
      const { dispatch } = store;
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

      if (type === wsInit) {
        socket = new WebSocket(`${wsUrl}/all`);
      }
      if (type === wsInitUser && token) {
        socket = new WebSocket(`${wsUrl}?token=${token.split(" ")[1]}`);
        console.log(socket);
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
          const { success, ...restParsedData } = parsedData;

          dispatch({ type: onMessage, payload: restParsedData });
        };

        socket.onclose = (event) => {
          dispatch({ type: onClose, payload: event });
        };

        if (type === close) {
          socket.close();
        }

        if (type === wsSendMessage) {
          const message = { ...payload, token: token };
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
    socketMiddleware("wss://norma.nomoreparties.space/orders", wsActions, token)
  )
);

const store = createStore(rootReducer, enhancer);

export default store;
