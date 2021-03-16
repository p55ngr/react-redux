import { CHANGE_TITLE, ADD_POST, postActionType } from "./types";

export const changeTitle = (newTitle: string): postActionType => {
  return {
    type: CHANGE_TITLE,
    payload: newTitle,
  };
};
export const addPost = (
  posts: Array<string>,
  newPost: string
): postActionType => {
  return {
    type: ADD_POST,
    payload: posts.concat(newPost),
  };
};
