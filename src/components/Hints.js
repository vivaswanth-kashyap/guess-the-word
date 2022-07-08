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
  return (
    <div className="flex flex-col">
      {current_word_hints.map((hint, index) => {
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
});

const mapDispatchToProps = {
  revealHint,
};

export default connect(mapStateToProps, mapDispatchToProps)(Hints);
