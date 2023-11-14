import React from "react";

export const App = () => {
  return (
    <>
      <div className="w-screen h-screen flex justify-center items-center overflow-x-hidden">
        <h1
          className="sm:text-6xl text-2xl text-center font-bold"
          style={{
            backgroundImage: "radial-gradient(at center bottom, rgb(253, 230, 138), rgb(124, 58, 237), rgb(12, 74, 110))",
            WebkitBackgroundClip: "text",
            color: "transparent",
          }}
        >
          Muhammad Fernandes
        </h1>
      </div>
    </>
  );
};
