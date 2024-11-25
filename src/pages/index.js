import React from 'react';
import { CalculatorProvider } from '../context/CalculatorContext';
import Calculator from '../components/Calculator';

const HomePage = () => {
  return (
    <CalculatorProvider>
      <div className="flex items-center justify-center h-screen bg-gray-100">
        <Calculator />
      </div>
    </CalculatorProvider>
  );
};

export default HomePage;
