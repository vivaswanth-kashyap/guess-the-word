import React from "react";
import { connect } from "react-redux";
import { revealHint } from "../store/actions";
const Hints = ({ current_word_hints, ...props }) => {
  if (props.loading) return "Loading new word";
  const findType = (hint) => {
    switch (hint.type) {
      case "def":
        return "Definition";
      case "ex":
        return "Example";
      case "ant":
        return "Antonym";
      case "syn":
        return "Synonym";
      case "first_letter":
        return "First Letter";
      case "last_letter":
        return "Last letter";
      default:
        return;
    }
  };
  console.log(props);
  let hints_list = props.history_selected
    ? (props.history[props.index_selected] || {}).hints
    : current_word_hints;
  let guess_list = props.history_selected ? (props.history[props.index_selected] || {}).inpArr : props.inpArr;
  return (
    <div className="flex flex-col">
      <div style={{ fontFamily: "'Roboto Mono', monospace" }} className="container flex flex-row rounded-md p-7 m-1 text-left bg-zinc-200">guesses:
      {guess_list.map((guess , index) => {
        return(
          <div key={index} className = {`rounded-sm p-2 m-1 ${
            guess.is_correct ? "bg-lime-200 hover:bg-lime-300" : "bg-red-300 hover:bg-red-400"
          }`}><h3 style={{width : "max-content"}} className="text-left">{guess.word}</h3></div>
        )
      })}</div>
      {hints_list.map((hint, index) => {
        return (
          <div
            key={index}
            className={`container rounded-md p-7 m-1 ${
              hint.default
                ? "bg-lime-200"
                : hint.status
                ? "bg-zinc-100"
                : " bg-zinc-200"
            }`}
          >
            <h1
              style={{ fontFamily: "'Roboto Mono', monospace" }}
              className="text-left"
            >
              {findType(hint)}
            </h1>
            {!hint.status ? (
              <button
                onClick={(e) => props.revealHint(index)}
                style={{ fontFamily: "'Roboto Mono', monospace" }}
                className="bg-teal-400 hover:bg-teal-500 active:bg-teal-600 focus:outline-none focus:ring focus:ring-teal-300 ... w-40 h-7  rounded-md"
              >
                Reveal Hint
              </button>
            ) : (
              <h1
                style={{ fontFamily: "'Roboto Mono', monospace" }}
                className="text-left"
              >
                {hint.text}
              </h1>
            )}

            <h3 className="text-right text-red-400">
              {hint.default ? "Free" : Math.abs(hint.score)}
            </h3>
          </div>
        );
      })}
    </div>
  );
};

const mapStateToProps = (state, ownProps) => ({
  loading: state.words.loading,
  current_word_hints: state.words.current_word_hints,
  index_selected: state.words.index_selected,
  history_selected: state.words.history_selected,
  history: state.words.history,
  inpArr: state.words.inpArr,
});

const mapDispatchToProps = {
  revealHint,
};

export default connect(mapStateToProps, mapDispatchToProps)(Hints);
