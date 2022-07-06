import React from "react";
import { connect } from "react-redux";

import Hero from "./components/Hero";
import Hints from "./components/Hints";
import History from "./components/History";

import "./App.css";

function App({ counter }) {
  console.log(counter);
  return (
    <div className="App mx-auto grow">
      <Hero />
      <div className="flex flex-row bg-teal-50 p-10 space-x-10">
        <div className="container  grow">
          <Hints />
        </div>
        <div className="container">
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
