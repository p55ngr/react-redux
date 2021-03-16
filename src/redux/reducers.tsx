import { CHANGE_TITLE, ADD_POST, postActionType } from "./types";

type initialStateType = {
  title: String;
  posts: Array<string>;
};

export const initialState: initialStateType = {
  title: "title State",
  posts: ["first post", "second post"],
};

export const rootReducer = (
  state: initialStateType = initialState,
  action: postActionType
): initialStateType => {
  switch (action.type) {
    case CHANGE_TITLE:
      return { ...state, title: action.payload };
    case ADD_POST:
      return { ...state, posts: action.payload };
  }
};
