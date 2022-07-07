import React, { useEffect, useState } from "react";
import { connect } from "react-redux";

import { newWord } from "../store/actions";
import { validateGuess } from "../store/actions";
import puzzle from "../assets/puzzle.png";

const WordsController = (props) => {
  const [word, setWord] = useState(0);
  useEffect(() => {
    props.newWord(Date.now());
  }, []);

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
          onChange={(e) => setWord(word)}
          className="m-5 p-5 h-4 text-indigo-900 bg-teal-50"
          type="text"
        ></input>
        <button
          type="submit"
          style={{ fontFamily: "'Roboto Mono', monospace" }}
          className="bg-teal-400 hover:bg-teal-500 border-1 border-black w-20 h-7 px-2  m-3 rounded-md"
          onClick={(e) => props.validateGuess(word)}
        >
          submit
        </button>
      </div>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => ({
  score: state.words.score,
  loading: state.words.loading,
  current_word_data: state.words.current_word_data,
  current_word_hints: state.words.current_word_hints,
});

const mapDispatchToProps = {
  newWord,
  validateGuess,
};

export default connect(mapStateToProps, mapDispatchToProps)(WordsController);
