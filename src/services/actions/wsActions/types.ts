import { ACTIONS } from "../actionTypes";
import { TwsData } from "../../types/data";

export interface IwsConnectionOpenAction {
  readonly type: typeof ACTIONS.WS_CONNECTION_START;
}

export interface IwsConnectionUserOpenAction {
  readonly type: typeof ACTIONS.WS_CONNECTION_USER_START;
}

export interface IwsConnectionSuccessAction {
  readonly type: typeof ACTIONS.WS_CONNECTION_SUCCESS;
}

export interface IwsConnectionErrorAction {
  readonly type: typeof ACTIONS.WS_CONNECTION_ERROR;
}

export interface IwsConnectionCloseAction {
  readonly type: typeof ACTIONS.WS_CONNECTION_CLOSE;
}

export interface IwsGetMessageAction {
  readonly type: typeof ACTIONS.WS_GET_MESSAGE;
  readonly payload: TwsData;
}

export interface IwsSendMessageAction {
  readonly type: typeof ACTIONS.WS_SEND_MESSAGE;
  readonly payload: TwsData;
}

export type TwsActions =
  | IwsConnectionOpenAction
  | IwsConnectionUserOpenAction
  | IwsConnectionSuccessAction
  | IwsConnectionErrorAction
  | IwsConnectionCloseAction
  | IwsGetMessageAction
  | IwsSendMessageAction;
