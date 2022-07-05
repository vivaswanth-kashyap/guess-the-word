import axios from "axios";
import actions from "./ActionTypes";
import store from "..";

export function resetStore() {
  axios
    .get("url")
    .then((res) => {
      return {
        type: actions.RESET_STORE,
        payload: { counter: 2 },
      };
    })
    .catch((err) => {});
  return {
    type: actions.RESET_STORE,
    payload: { counter: 2 },
  };
}

export function validateguess(word) {
  const { current_word } = store.getState().words;
  if (current_word == word) {
    return {
      type: actions.SUCCESS_GUESS,
    };
  } else {
    return {
      type: actions.WRONG_GUESS,
      payload: { counter: 2 },
    };
  }
}
