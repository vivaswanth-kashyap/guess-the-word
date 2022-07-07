import ActionTypes from "../actions/ActionTypes";
import actions from "../actions/ActionTypes";

const INITIAL_STATE = {
  score: 0,
  loading: true,
  current_word_data: null,
};

const words = (state = INITIAL_STATE, action) => {
  let { type, payload } = action;
  switch (type) {
    case actions.NEW_WORD:
      console.log(payload);
      return {
        ...state,
        current_word_data: payload.new_word_data,
        current_word_hints: payload.new_word_hints,
        loading: false,
      };
    case ActionTypes.REVEAL_HINT:
      return {
        ...state,
        score: state.score + payload.hint.score,
        current_word_hints: payload.current_word_hints,
      };
    case ActionTypes.LOADING_NEW_WORD:
      return { ...state, loading: true };
    case actions.SUCCESS_GUESS:
      return { ...state, score: state.score + 10 };
    case actions.WRONG_GUESS:
      return { ...state, score: state.score - 3 };
    default:
      return state;
  }
};

export default words;
