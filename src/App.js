import React from "react";
import { connect } from "react-redux";

import Hero from "./components/Hero";
import Hints from "./components/Hints";
import History from "./components/History";

import "./App.css";

function App({ counter }) {
  console.log(counter);
  return (
    <div className="App mx-auto">
      <Hero />
      <div className="flex flex-row">
        <div className="container mx-auto">
          <Hints />
        </div>
        <div className="container mx-auto">
          <History />
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = (state, ownProps) => ({
  counter: state.words.counter,
});

export default connect(mapStateToProps, null)(App);
