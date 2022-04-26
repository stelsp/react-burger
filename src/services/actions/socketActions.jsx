import { ACTIONS } from "./actionTypes";

export const wsConnectionOpen = () => ({ type: ACTIONS.WS_CONNECTION_START });

export const wsConnectionUserOpen = () => ({
  type: ACTIONS.WS_CONNECTION_USER_START,
});

export const wsConnectionSuccess = () => ({
  type: ACTIONS.WS_CONNECTION_SUCCESS,
});

export const wsConnectionError = () => ({ type: ACTIONS.WS_CONNECTION_ERROR });

export const wsConnectionClose = () => ({ type: ACTIONS.WS_CONNECTION_CLOSE });

export const wsGetMessage = (data) => ({
  type: ACTIONS.WS_GET_MESSAGE,
  payload: data,
});

export const wsSendMessage = (data) => ({
  type: ACTIONS.WS_SEND_MESSAGE,
  payload: data,
});
