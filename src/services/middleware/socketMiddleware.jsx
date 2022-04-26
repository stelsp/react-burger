import { getCookie } from "../../utils/cookie";

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
