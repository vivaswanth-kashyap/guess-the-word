import actions from "../actions/ActionTypes";

const INITIAL_STATE = {
  counter: 0,
  score: 0,
};

const words = (state = INITIAL_STATE, action) => {
  let { type, payload } = action;
  switch (type) {
    case actions.RESET_STORE:
      return { ...state, counter: state.counter + payload.counter };
    case actions.SUCCESS_GUESS:
      return { ...state, score: state.score + 10 };
    case actions.WRONG_GUESS:
      return { ...state, score: state.score - 3 };
    default:
      return state;
  }
};

export default words;
