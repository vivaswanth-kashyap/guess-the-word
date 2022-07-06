import React from "react";

const Hints = () => {
  return (
    <div className="flex flex-col">
      <div className="container bg-zinc-200 rounded-md m-1">
        <h1
          style={{ fontFamily: "'Roboto Mono', monospace" }}
          className="text-left my-2 mx-8"
        >
          Guess : {}
        </h1>
      </div>
      <div className="container bg-lime-200 rounded-md p-7 m-1">
        <h1
          style={{ fontFamily: "'Roboto Mono', monospace" }}
          className="text-left"
        >
          Definition
        </h1>
        <h3 className="text-right text-red-400">free </h3>
      </div>
      <div className="container bg-zinc-100 rounded-md p-7 m-1">
        <h1
          style={{ fontFamily: "'Roboto Mono', monospace" }}
          className="text-left"
        >
          jumbled letters
        </h1>
        <button
          style={{ fontFamily: "'Roboto Mono', monospace" }}
          className="bg-teal-400 hover:bg-teal-500 active:bg-teal-600 focus:outline-none focus:ring focus:ring-teal-300 ... w-40 h-7  rounded-md"
        >
          Reveal Hint
        </button>
        <h3 className="text-right text-red-400">4 points</h3>
      </div>
      <div className="container bg-zinc-200 rounded-md p-7 m-1">
        <h1
          style={{ fontFamily: "'Roboto Mono', monospace" }}
          className="text-left"
        >
          Word length
        </h1>
        <button
          style={{ fontFamily: "'Roboto Mono', monospace" }}
          className="bg-teal-400 hover:bg-teal-500 active:bg-teal-600 focus:outline-none focus:ring focus:ring-teal-300 ... w-40 h-7  rounded-md"
        >
          Reveal Hint
        </button>
        <h3 className="text-right text-red-400">2 points</h3>
      </div>
      <div className="container bg-zinc-100 rounded-md p-7 m-1">
        <h1
          style={{ fontFamily: "'Roboto Mono', monospace" }}
          className="text-left"
        >
          First letter
        </h1>
        <button
          style={{ fontFamily: "'Roboto Mono', monospace" }}
          className="bg-teal-400 hover:bg-teal-500 active:bg-teal-600 focus:outline-none focus:ring focus:ring-teal-300 ... w-40 h-7  rounded-md"
        >
          Reveal Hint
        </button>
        <h3 className="text-right text-red-400">2 points</h3>
      </div>
      <div className="container bg-zinc-200 rounded-md p-7 m-1">
        <h1
          style={{ fontFamily: "'Roboto Mono', monospace" }}
          className="text-left"
        >
          Last letter
        </h1>
        <button
          style={{ fontFamily: "'Roboto Mono', monospace" }}
          className="bg-teal-400 hover:bg-teal-500 active:bg-teal-600 focus:outline-none focus:ring focus:ring-teal-300 ... w-40 h-7  rounded-md"
        >
          Reveal Hint
        </button>
        <h3 className="text-right text-red-400">1 point</h3>
      </div>
      <div className="container bg-zinc-100 rounded-md p-7 m-1">
        <h1
          style={{ fontFamily: "'Roboto Mono', monospace" }}
          className="text-left"
        >
          Definition
        </h1>
        <button
          style={{ fontFamily: "'Roboto Mono', monospace" }}
          className="bg-teal-400 hover:bg-teal-500 active:bg-teal-600 focus:outline-none focus:ring focus:ring-teal-300 ... w-40 h-7  rounded-md"
        >
          Reveal Hint
        </button>
        <h3 className="text-right text-red-400">3 points</h3>
      </div>
      <div className="container bg-zinc-200 rounded-md p-7 m-1">
        <h1
          style={{ fontFamily: "'Roboto Mono', monospace" }}
          className="text-left"
        >
          Synonym
        </h1>
        <button
          style={{ fontFamily: "'Roboto Mono', monospace" }}
          className="bg-teal-400 hover:bg-teal-500 active:bg-teal-600 focus:outline-none focus:ring focus:ring-teal-300 ... w-40 h-7  rounded-md"
        >
          Reveal Hint
        </button>
        <h3 className="text-right text-red-400">2 points</h3>
      </div>
      <div className="container bg-zinc-100 rounded-md p-7 m-1">
        <h1
          style={{ fontFamily: "'Roboto Mono', monospace" }}
          className="text-left"
        >
          Antonym
        </h1>
        <button
          style={{ fontFamily: "'Roboto Mono', monospace" }}
          className="bg-teal-400 hover:bg-teal-500 active:bg-teal-600 focus:outline-none focus:ring focus:ring-teal-300 ... w-40 h-7  rounded-md"
        >
          Reveal Hint
        </button>
        <h3 className="text-right text-red-400">1 point</h3>
      </div>
    </div>
  );
};

export default Hints;
