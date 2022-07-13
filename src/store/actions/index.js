import axios from "axios";
import actions from "./ActionTypes";
import store from "..";
const config = require("../../config");

function randomWord() {
  return get(`/words/randomWord`);
}
function definition(word) {
  return get(`/word/${word}/definitions`);
}
function examples(word) {
  return get(`/word/${word}/examples`);
}
function relatedWords(word) {
  return get(`/word/${word}/relatedWords`);
}

function get(apiPath) {
  return axios
    .get(config.apiHost + apiPath, {
      params: {
        api_key: config.apiKey,
      },
    })
    .then((res) => {
      return { status: true, data: res.data };
    })
    .catch((error) => {
      return { status: false, data: error.response };
    });
}

export const revealHint = (index) => (dispatch, getState) => {
  let { current_word_hints } = getState().words;
  let hint = current_word_hints[index];
  hint.status = true;
  current_word_hints[index] = hint;
  dispatch({
    type: actions.REVEAL_HINT,
    payload: { hint, current_word_hints: [...current_word_hints] },
  });
};

export const reset = () => async (dispatch) => {
  dispatch(newWord());
  dispatch({
    type: actions.RESET_GAME,
  });
};
export const newWord = (date) => async (dispatch) => {
  dispatch({ type: actions.LOADING_NEW_WORD });
  let new_word = await randomWord();
  let word = new_word.data.word;
  let ex = await examples(word);
  let related_words = await relatedWords(word);
  let def = await definition(word);
  let payload = processWord({
    word,
    ex: ex.data.examples,
    def: def.data,
    related: related_words.data,
  });
  dispatch({
    type: actions.NEW_WORD,
    payload,
  });
};

export const skip = () => async (dispatch, getState) => {
  let { current_word_data, score, gameScore, current_word_hints, history ,inpArr } =
    getState().words;
  dispatch(newWord());
  history = history || [];
  history.push({
    inpArr : inpArr,
    word: current_word_data.word,
    data: current_word_data,
    score: score,
    gameScore: gameScore - 5,
    hints: current_word_hints,
    message: "wrong",
  });
  dispatch({
    type: actions.SKIP,
    payload: { history: history },
  });
};

export const playing = () => async (dispatch) => {
  dispatch({
    type: actions.PLAYING,
  });
};
export const showHints = (index) => async (dispatch, getState) => {
  let words = getState().words;
  dispatch({
    type: actions.SHOW_HINTS,
    payload: {
      current_word_hints: words.current_word_hints,
      score: words.score,
      word: words.current_word_data.word,
      history_selected: true,
      index_selected: index,
    },
  });
};

export const validateGuess = (inpWord) => async (dispatch, getState) => {
  let { current_word_data, score, gameScore, current_word_hints, history ,inpArr} =
    getState().words;
  console.log(current_word_data, inpWord);
  console.log(history);

  if (inpWord === current_word_data.word) {
    history.push({
      inpArr : [...inpArr, {word : inpWord , is_correct: true}],
      data: current_word_data,
      score: score,
      gameScore: gameScore + 10,
      hints: current_word_hints,
      message: "correct",
    });
    console.log([...inpArr, {word : inpWord , is_correct: true}])
    console.log(history);
    dispatch({
      type: actions.SUCCESS,
      payload: { history: history },
    });
    dispatch({
      type: actions.LOADING_NEW_WORD,
    });
    setTimeout(() => {
      dispatch({ type: actions.RESET_MATCH });
    }, 2000);
    dispatch(newWord());
  } else {
    dispatch({
      type: actions.FAILURE,
      payload: {inpArr : [...inpArr, {word : inpWord , is_correct: false}]},
    });
  }
};
const processWord = ({ word, ex, def, related }) => {
  console.log(related);
  let synData = related.find((ele) => ele.relationshipType === "synonym");
  let antData = related.find((ele) => ele.relationshipType === "antonym");
  let syn = (synData && synData.words) || [],
    ant = (antData && antData.words) || [];
  let new_word_hints = [],
    new_word_data = {
      word: word,
      ex,
      def,
      ant,
      syn,
    };
  new_word_hints.push({
    status: true,
    default: true,
    text: def.pop().text,
    type: "def",
  });
  new_word_hints.push({
    status: false,
    score: -2,
    text: word.charAt(0),
    type: "first_letter",
  });
  new_word_hints.push({
    status: false,
    score: -1,
    text: word.charAt(word.length - 1),
    type: "last_letter",
  });
  def.map((d) =>
    new_word_hints.push({
      status: false,
      score: -3,
      text: d.text,
      type: "def",
    })
  );
  // ex.map((d) =>
  //   new_word_hints.push({
  //     status: false,
  //     score: -3,
  //     text: d.text,
  //     type: "ex",
  //   })
  // );
  syn.map((d) =>
    new_word_hints.push({
      status: false,
      score: -2,
      text: d,
      type: "syn",
    })
  );
  ant.map((d) =>
    new_word_hints.push({
      status: false,
      score: -1,
      text: d,
      type: "ant",
    })
  );

  return { new_word_data, new_word_hints };
};
