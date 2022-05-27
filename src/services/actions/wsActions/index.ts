import { ACTIONS } from "../actionTypes";
import { TwsData } from "../../types/data";
import {
  IwsConnectionOpenAction,
  IwsConnectionUserOpenAction,
  IwsConnectionSuccessAction,
  IwsConnectionErrorAction,
  IwsConnectionCloseAction,
  IwsGetMessageAction,
  IwsSendMessageAction,
} from "./types";

export const wsConnectionOpen = (): IwsConnectionOpenAction => ({
  type: ACTIONS.WS_CONNECTION_START,
});

export const wsConnectionUserOpen = (): IwsConnectionUserOpenAction => ({
  type: ACTIONS.WS_CONNECTION_USER_START,
});

export const wsConnectionSuccess = (): IwsConnectionSuccessAction => ({
  type: ACTIONS.WS_CONNECTION_SUCCESS,
});

export const wsConnectionError = (error: any): IwsConnectionErrorAction => ({
  type: ACTIONS.WS_CONNECTION_ERROR,
  payload: error,
});

export const wsConnectionClose = (): IwsConnectionCloseAction => ({
  type: ACTIONS.WS_CONNECTION_CLOSE,
});

export const wsGetMessage = (data: TwsData): IwsGetMessageAction => ({
  type: ACTIONS.WS_GET_MESSAGE,
  payload: data,
});

export const wsSendMessage = (data: TwsData): IwsSendMessageAction => ({
  type: ACTIONS.WS_SEND_MESSAGE,
  payload: data,
});
