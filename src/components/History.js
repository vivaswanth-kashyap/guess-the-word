import React from "react";
import { connect } from "react-redux";

import { validateGuess } from "../store/actions";

import { skip, reset } from "../store/actions";

const History = (props) => {
  console.log(props.history);
  return (
    <div className="h-100 bg-zinc-200 m-1 p-5 rounded-md">
      <button
        onClick={(e) => props.skip()}
        style={{ fontFamily: "'Roboto Mono', monospace" }}
        className="bg-red-300 px-2 w-50 h-7 border-2  border-black rounded-md m-1 hover:bg-red-400 focus:bg-red-400 focus:ring "
      >
        get new word ( 5pts )
      </button>{" "}
      <h1
        style={{ fontFamily: "'Finlandica', sans-serif" }}
        className="text-2xl m-3"
      >
        History
      </h1>
      <div>
        <div className="bg-zinc-100 mx-50 border-2 border-white rounded-md  m-1">
          <h3
            style={{ fontFamily: "'Roboto Mono', monospace" }}
            className="w-50 h-10 bottom text-left pt-2"
          >
            Playing...{" "}
          </h3>
          <h3
            style={{ fontFamily: "'Roboto Mono', monospace" }}
            className="text-right"
          >
            {props.gameScore}
          </h3>
        </div>
      </div>
      <button
        onClick={(e) => props.reset()}
        style={{ width: "max-content", fontFamily: "'Roboto Mono', monospace" }}
        className="bg-red-300  h-7 border-2 m-5 text-slate-800  px-2 border-black rounded-md m-1 hover:bg-red-400"
      >
        {" "}
        Reset Game!
      </button>
    </div>
  );
};
const mapStateToProps = (state, ownProps) => ({
  loading: state.words.loading,
  current_word_hints: state.words.current_word_hints,
  score: state.words.score,
  gameScore: state.words.gameScore,
  history: state.words.history,
});

const mapDispatchToProps = {
  skip,
  reset,
};

export default connect(mapStateToProps, mapDispatchToProps)(History);
