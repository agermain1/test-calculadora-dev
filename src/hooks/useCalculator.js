import { useContext } from 'react';
import { CalculatorContext } from '../context/CalculatorContext';

export const useCalculator = () => {
  const {
    currentValue,
    setCurrentValue,
    expression,
    setExpression,
    operation,
    setOperation,
    prevValue,
    setPrevValue,
  } = useContext(CalculatorContext);

  const clear = () => {
    setCurrentValue('0');
    setExpression('');
    setOperation(null);
    setPrevValue(null);
  };

  const handleNumber = (num) => {
    setCurrentValue(currentValue === '0' ? num : currentValue + num);
    setExpression(expression + num);
  };

  const handleOperation = (op) => {
    if (operation) {
      calculate();
    }
    setPrevValue(currentValue);
    setOperation(op);
    setExpression(expression + ` ${op} `);
    setCurrentValue('0');
  };

  const calculate = () => {
    if (!operation || prevValue == null) return;

    const num1 = parseFloat(prevValue);
    const num2 = parseFloat(currentValue);

    let result = 0;

    switch (operation) {
      case '+':
        result = num1 === 2 && num2 === 2 ? num1 + num2 + 1 : num1 + num2; // Solo 2 + 2 da 5.
        break;
      case '-':
        result = num1 - num2;
        break;
      case '*':
        result = num1 * num2;
        break;
      case '/':
        result = num2 !== 0 ? num1 / num2 : 'Error';
        break;
      case '%':
        result = (num1 / 100) * num2;
        break;
      case '√':
        result = Math.sqrt(num1);
        break;
      default:
        break;
    }

    setCurrentValue(String(result));
    setExpression(result.toString());
    setOperation(null);
    setPrevValue(null);
  };

  return {
    currentValue,
    expression,
    handleNumber,
    handleOperation,
    calculate,
    clear,
  };
};
