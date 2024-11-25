import React, { createContext, useState } from 'react';

export const CalculatorContext = createContext();

export const CalculatorProvider = ({ children }) => {
  const [currentValue, setCurrentValue] = useState('0');
  const [expression, setExpression] = useState(''); // Nueva expresión completa.
  const [operation, setOperation] = useState(null);
  const [prevValue, setPrevValue] = useState(null);

  const contextValue = {
    currentValue,
    setCurrentValue,
    expression,
    setExpression,
    operation,
    setOperation,
    prevValue,
    setPrevValue,
  };

  return (
    <CalculatorContext.Provider value={contextValue}>
      {children}
    </CalculatorContext.Provider>
  );
};
