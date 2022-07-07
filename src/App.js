import React from "react";
import { connect } from "react-redux";

import WordsController from "./components/WordsController";
import Hints from "./components/Hints";
import History from "./components/History";

import "./App.css";

function App() {
  return (
    <div className="App mx-auto grow">
      <WordsController />
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

export default App;
