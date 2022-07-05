import React from "react";

const Hints = () => {
  return (
    <div className="flex flex-col">
      <div className="container bg-zinc-200 p-10">
        <h1 className="text-left">definition</h1>
      </div>
      <div className="container bg-zinc-100 p-10">
        <h1 className="text-left">jumbled letters</h1>
      </div>
      <div className="container bg-zinc-200 p-10">
        <h1 className="text-left">Word length</h1>
      </div>
      <div className="container bg-zinc-100 p-10">
        <h1 className="text-left">First letter</h1>
      </div>
      <div className="container bg-zinc-200 p-10">
        <h1 className="text-left">Last letter</h1>
      </div>
      <div className="container bg-zinc-100 p-10">
        <h1 className="text-left">Synonym</h1>
      </div>
      <div className="container bg-zinc-200 p-10">
        <h1 className="text-left">Antonym</h1>
      </div>
    </div>
  );
};

export default Hints;
