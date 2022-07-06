import React from "react";

const History = () => {
  return (
    <div className="h-100 bg-zinc-200 m-1 p-5 rounded-md">
      <button
        style={{ fontFamily: "'Roboto Mono', monospace" }}
        className="bg-red-300 px-2 w-50 h-7 border-2  border-black rounded-md m-1 hover:bg-red-400 focus:bg-red-400 focus:ring "
      >
        get new word ( 4pts )
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
            {0}
          </h3>
        </div>
      </div>
      <button
        style={{ width: "max-content", fontFamily: "'Roboto Mono', monospace" }}
        className="bg-red-300  h-7 border-2 m-5 text-slate-800  px-2 border-black rounded-md m-1 hover:bg-red-400"
      >
        {" "}
        Reset Game!
      </button>
    </div>
  );
};

export default History;
