import React, { useState } from "react";

function Calculator() {
  const [val, setVal] = useState("");

  const handleButton = (e) => {
    const buttonValue = e.target.value;
    if (buttonValue === "AC") {
      setVal("");
    } else if (buttonValue === "DEL") {
      setVal(val.slice(0, -1));
    } else if (buttonValue === "=") {
      try {
        setVal(eval(val)); // Avoid using `eval` in production; consider a safer alternative.
      } catch {
        setVal("Error");
      }
    } else if (buttonValue === "%") {
      try {
        setVal(eval(val) * 0.01); // Same caution about `eval` applies.
      } catch {
        setVal("Error");
      }
    } else {
      setVal(val + buttonValue);
    }
  };

  return (
    <div className="text-white">
      <h1 className="text-center text-5xl text-white py-5">Calculator</h1>
      <div className="cal-box border border-gray-800 rounded p-10 m-10 sm:max-w-xs mx-auto">
        <input
          className="display h-20 rounded w-full bg-gray-900 text-right text-4xl"
          value={val}
          readOnly
        />
        <div className="button-box py-4">
          <div className="row flex justify-evenly">
            <button
              onClick={handleButton}
              value="AC"
              className="rounded w-full m-1 h-10 bg-cyan-500 hover:bg-cyan-600"
            >
              AC
            </button>
            <button
              onClick={handleButton}
              value="DEL"
              className="rounded w-full m-1 h-10 bg-cyan-500 hover:bg-cyan-600"
            >
              DEL
            </button>
            <button
              onClick={handleButton}
              value="%"
              className="rounded w-full m-1 h-10 bg-gray-700 hover:bg-gray-800"
            >
              %
            </button>
            <button
              onClick={handleButton}
              value="/"
              className="rounded w-full m-1 h-10 bg-gray-700 hover:bg-gray-800"
            >
              /
            </button>
          </div>
          <div className="row flex justify-evenly">
            <button
              onClick={handleButton}
              value="7"
              className="rounded bg-gray-900 w-full m-1 h-10 hover:bg-gray-900"
            >
              7
            </button>
            <button
              onClick={handleButton}
              value="8"
              className="rounded bg-gray-900 w-full m-1 h-10 hover:bg-gray-900"
            >
              8
            </button>
            <button
              onClick={handleButton}
              value="9"
              className="rounded w-full m-1 h-10 hover:bg-gray-900 bg-gray-900"
            >
              9
            </button>
            <button
              onClick={handleButton}
              value="*"
              className="rounded w-full m-1 h-10 bg-gray-700"
            >
              x
            </button>
          </div>
          <div className="row flex justify-evenly">
            <button
              onClick={handleButton}
              value="4"
              className="rounded w-full m-1 h-10 hover:bg-gray-900 bg-gray-900"
            >
              4
            </button>
            <button
              onClick={handleButton}
              value="5"
              className="rounded w-full m-1 h-10 hover:bg-gray-900 bg-gray-900"
            >
              5
            </button>
            <button
              onClick={handleButton}
              value="6"
              className="rounded w-full m-1 h-10 hover:bg-gray-900 bg-gray-900"
            >
              6
            </button>
            <button
              onClick={handleButton}
              value="-"
              className="rounded w-full m-1 h-10 bg-gray-700 hover:bg-gray-800"
            >
              -
            </button>
          </div>
          <div className="row flex justify-evenly">
            <button
              onClick={handleButton}
              value="1"
              className="rounded w-full m-1 h-10 hover:bg-gray-900 bg-gray-900"
            >
              1
            </button>
            <button
              onClick={handleButton}
              value="2"
              className="rounded w-full m-1 h-10 hover:bg-gray-900 bg-gray-900"
            >
              2
            </button>
            <button
              onClick={handleButton}
              value="3"
              className="rounded w-full m-1 h-10 hover:bg-gray-900 bg-gray-900"
            >
              3
            </button>
            <button
              onClick={handleButton}
              value="+"
              className="rounded w-full m-1 h-10 bg-gray-700 hover:bg-gray-800"
            >
              +
            </button>
          </div>
          <div className="row flex justify-evenly">
            <button
              onClick={handleButton}
              value="00"
              className="rounded w-full m-1 h-10 hover:bg-gray-900 bg-gray-900"
            >
              00
            </button>
            <button
              onClick={handleButton}
              value="0"
              className="rounded w-full m-1 h-10 hover:bg-gray-900 bg-gray-900"
            >
              0
            </button>
            <button
              onClick={handleButton}
              value="."
              className="rounded w-full m-1 h-10 hover:bg-gray-900 bg-gray-900"
            >
              .
            </button>
            <button
              onClick={handleButton}
              value="="
              className="rounded w-full m-1 h-10 bg-gray-700 hover:bg-gray-800"
            >
              =
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Calculator;
