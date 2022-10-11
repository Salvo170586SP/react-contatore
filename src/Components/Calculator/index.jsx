import style from "./style.module.scss";
import React, { useState } from "react";

const Calculator = () => {
  let [number, setNumber] = useState(0);

  let reset = () => {
    setNumber(0);
  };

  let plusNumber = () => {
    setNumber(number + 1);
  };

  let lessNumber = () => {
    if (number !== 0) {
      setNumber(number - 1);
    }
  };

  return (
    <>
      <div className={style.calc}>
        <div className={style.num}>
          <h1>{number}</h1>
        </div>
        <button className="ButtonLight" onClick={() => plusNumber()}>
          +
        </button>
        <button className="ButtonAlert" onClick={() => reset()}>
          Reset
        </button>
        <button className="ButtonLight" onClick={() => lessNumber()}>
          -
        </button>
      </div>
    </>
  );
};

export default Calculator;
