import { Middleware, MiddlewareAPI } from "redux";
import { getCookie } from "../../utils/cookie";
import { AppDispatch, IwsActions, RootState } from "../types/index";

export const wsMiddleware = (
  wsUrl: string,
  wsActions: IwsActions
): Middleware => {
  return (store: MiddlewareAPI<AppDispatch, RootState>) => {
    let socket: WebSocket | null = null;

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
        socket.onopen = (event: Event) => {
          dispatch({ type: onOpen, payload: event });
        };

        socket.onerror = (event: Event) => {
          dispatch({ type: onError, payload: event });
        };

        socket.onmessage = (event: MessageEvent) => {
          const { data } = event;
          const parsedData = JSON.parse(data);

          dispatch({ type: onMessage, payload: parsedData });
        };

        socket.onclose = (event: Event) => {
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
