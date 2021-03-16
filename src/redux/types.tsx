export const CHANGE_TITLE = "CHANGE_TITLE";
export const ADD_POST = "ADD_POST";

interface changeTitleActionType {
  type: typeof CHANGE_TITLE;
  payload: string;
}

interface addPostActionType {
  type: typeof ADD_POST;
  payload: Array<string>;
}

export type postActionType = changeTitleActionType | addPostActionType;
