import React, { useEffect, useState } from "react";
import { connect } from "react-redux";

import { newWord } from "../store/actions";
import { validateGuess } from "../store/actions";
import puzzle from "../assets/puzzle.png";

const WordsController = (props) => {
  const [word, setWord] = useState("");
  useEffect(() => {
    props.newWord(Date.now());
  }, []);

  const getMessage = (message) => {
    switch (message) {
      case "correct":
        return "That is the Correct Answer!! YOu get 10 points";
      case "wrong":
        return "Your Answer is wrong :( ,Please try again ";
      default:
        return "";
    }
  };

  const handleSubmit = (e) => {
    setWord("");
    props.validateGuess(word);
  };

  const handleEnter = (e) => {
    if (e.key === `Enter`) {
      setWord("");
      props.validateGuess(word);
    }
  };

  console.log(props);
  return (
    <div className="bg-teal-400 p-1">
      <div>
        <center>
          <img src={puzzle} className="h-10"></img>
        </center>
        <h1 style={{ fontFamily: "'Roboto Mono', monospace" }}>
          Score : {props.score}
        </h1>
      </div>

      <div className="bg-teal-100 text-slate-800 p-3 m-1">
        <h1
          style={{ fontFamily: "'Finlandica', sans-serif" }}
          className="text-3xl"
        >
          Guess The Word
        </h1>
        <input
          onChange={(e) => setWord(e.target.value)}
          value={word}
          className="m-5 p-5 h-4 text-indigo-900 bg-teal-50"
          type="text"
        ></input>
        <button
          type="submit"
          style={{ fontFamily: "'Roboto Mono', monospace" }}
          className="bg-teal-400 hover:bg-teal-500 border-1 border-black w-20 h-7 px-2  m-3 rounded-md"
          onClick={handleSubmit}
          onKeyPress={handleEnter}
        >
          submit
        </button>

        <h3 className="text-slate-900 m-1">{getMessage(props.message)}</h3>
      </div>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => ({
  score: state.words.score,
  loading: state.words.loading,
  current_word_data: state.words.current_word_data,
  current_word_hints: state.words.current_word_hints,
  message: state.words.message,
  history_selected: state.words.history_selected,
});

const mapDispatchToProps = {
  newWord,
  validateGuess,
};

export default connect(mapStateToProps, mapDispatchToProps)(WordsController);
