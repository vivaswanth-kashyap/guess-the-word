import actions from "../actions/ActionTypes";

const INITIAL_STATE = {
  counter: 0,
};

const words = (state = INITIAL_STATE, action) => {
  let { type, payload } = action;
  switch (type) {
    case actions.RESET_STORE:
      return { ...state, counter: state.counter + payload.counter };
      break;
    default:
      return state;
  }
};

export default words;
