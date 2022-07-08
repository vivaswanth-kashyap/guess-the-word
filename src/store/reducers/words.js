import ActionTypes from "../actions/ActionTypes";
import actions from "../actions/ActionTypes";

const INITIAL_STATE = {
  score: 0,
  gameScore: 0,
  loading: true,
  current_word_data: null,
  message: null,
  current_word_hints: null,
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
    case actions.SUCCESS:
      return {
        ...state,
        score: state.score + 10,
        gameScore: state.gameScore + 10,
        message: "correct",
      };
    case actions.FAILURE:
      return {
        ...state,
        score: state.score - 3,
        state: state.gameScore - 3,
        message: "wrong",
      };
    case actions.RESET_MATCH:
      return { ...state, message: null };
    case actions.HISTORY:
      return { ...state, history: payload.history };
    case actions.SKIP:
      return { ...state, score: state.score - 5, gameScore: 0 };
    case actions.RESET_GAME:
      return { ...INITIAL_STATE, score: 0 };
    default:
      return { ...state };
  }
};

export default words;
