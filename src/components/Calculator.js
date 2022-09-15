import React, { useState } from 'react';
import './Calculator.css';
import Calculate from '../logic/Calculate';

const Calculator = () => {
  const [data, setData] = useState({
    total: '0',
    next: null,
    operation: null,
  });
  const btns = ['AC', '+/-', '%', '÷', '7', '8', '9', 'x', '4', '5', '6', '-', '1', '2', '3', '+', '0', '.', '='];

  const clickHandler = (e) => {
    if (!e.target.name) return;

    const { next, total, operation } = Calculate(data, e.target.name);

    if (next === null && total === null) {
      setData({ ...data, total: '0' });
    } else {
      setData({ next, total, operation });
    }
  };
  const { total, next } = data;
  return (
    <div className="container">
      {next ? (
        <div key="screen" className="screen">{next}</div>
      ) : (
        <div key="screen1" className="screen">{total}</div>
      )}
      <div key="screen2" className="btn-column">
        {btns.map((btnName) => (
          <button
            onClick={clickHandler}
            name={btnName}
            type="button"
            className={`btn ${btnName === '0' ? 'btn-zero' : ''} ${
              btnName === '=' ? 'btn-equal' : ''
            }`}
            key={btnName}
          >
            {btnName}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Calculator;
