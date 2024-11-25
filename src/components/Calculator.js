import React from 'react';
import { useCalculator } from '../hooks/useCalculator';

const Calculator = () => {
  const { currentValue, expression, handleNumber, handleOperation, calculate, clear } =
    useCalculator();

  const buttons = [
    { label: '7', type: 'number' },
    { label: '8', type: 'number' },
    { label: '9', type: 'number' },
    { label: '/', type: 'operator' },
    { label: '4', type: 'number' },
    { label: '5', type: 'number' },
    { label: '6', type: 'number' },
    { label: '*', type: 'operator' },
    { label: '1', type: 'number' },
    { label: '2', type: 'number' },
    { label: '3', type: 'number' },
    { label: '-', type: 'operator' },
    { label: 'C', type: 'special' },
    { label: '0', type: 'number' },
    { label: '=', type: 'equal' },
    { label: '+', type: 'operator' },
    { label: '%', type: 'operator' },
    { label: '√', type: 'operator' },
  ];

  return (
    <div className="calculator">
      <div className="display">
        <div className="expression">{expression}</div>
        <div>{currentValue}</div>
      </div>
      <div className="buttons">
        {buttons.map((btn) => (
          <button
            key={btn.label}
            className={`btn ${btn.type === 'special' ? 'special' : ''} ${
              btn.type === 'equal' ? 'equal' : ''
            }`}
            onClick={() => {
              if (btn.label === 'C') clear();
              else if (btn.label === '=') calculate();
              else if (['+', '-', '*', '/', '%', '√'].includes(btn.label))
                handleOperation(btn.label);
              else handleNumber(btn.label);
            }}
          >
            {btn.label}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Calculator;
