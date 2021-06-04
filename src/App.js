import React, { useRef, useState } from "react";

const App = () => {
  const [valueN, setValueN] = useState("");
  const [newResult, setNewResult] = useState(null);
  const arrValues = useRef([]);

  const setValue = (valueInput) => {
    const val = Number(valueInput);
    if (val) {
      setValueN(val);
    }
  };

  const setArray = () => {
    arrValues.current = [];
    let i = 1;
    while (i < valueN + 1) {
      arrValues.current.push(i);
      i++;
    }
    searchPositions();
  };
  const searchPositions = () => {
    const newArray = arrValues.current.map((num) => validations(num));
    setNewResult(newArray);
  };

  const validations = (numberToValidate) => {
    let replaceToString = [];
    const replaceStrings = ["Fizz", "Buzz", "Jazz"];
    if (numberToValidate % 3 === 0) {
      replaceToString.push(replaceStrings[0]);
    }
    if (numberToValidate % 5 === 0) {
      replaceToString.push(replaceStrings[1]);
    }
    if (numberToValidate % 7 === 0) {
      replaceToString.push(replaceStrings[2]);
    }

    if (replaceToString.length > 0) {
      return replaceToString.join("");
    } else {
      return numberToValidate;
    }
  };

  return (
    <div className="App">
      <input value={valueN} onChange={(e) => setValue(e.target.value)} />
      <button onClick={() => setArray()}>Go</button>
      {newResult && (
        <div>
          {newResult.map((item) => {
            return (
              <span
                key={item}
                style={{
                  display: "block",
                  color: Number(item) ? "black" : "blue"
                }}
              >
                {item}
              </span>
            );
          })}
        </div>
      )}
    </div>
  );
};
export default App;
