import React from "react";
import { connect } from "react-redux";

import { validateguess } from "../store/actions";
import puzzle from "../assets/puzzle.png";

const Hero = (props) => {
  console.log(props);
  return (
    <div className="bg-teal-500 p-1">
      <div>
        <center>
          <img src={puzzle} className="h-10"></img>
        </center>
        <h1>Score : {props.score}</h1>
      </div>

      <div className="bg-teal-200 text-slate-800 p-3 m-1">
        <h1 className="text-3xl">Guess The Word</h1>
        <input
          className="m-5 p-5 h-4 text-indigo-900 bg-red-100"
          type="text"
        ></input>
        <button
          type="submit"
          className="bg-teal-500 w-20 h-7 px-2 pt-1 pb-3 m-3 rounded-md"
          onClick={(e) => props.validateguess("word")}
        >
          submit
        </button>
      </div>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => ({
  score: state.words.score,
});

const mapDispatchToProps = {
  validateguess,
};

export default connect(mapStateToProps, mapDispatchToProps)(Hero);
