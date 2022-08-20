import { useState, useRef } from 'react';

enum Operators {
  subtract,
  add,
  multiply,
  divide,
}

export const useCalculator = () => {
  const [number, setNumber] = useState('100');
  const [previousNumber, setPreviousNumber] = useState('0');

  const lastOperation = useRef<Operators>();

  const clean = () => {
    setNumber('0');
    setPreviousNumber('0');
  };

  const buildNumber = (numberText: string) => {
    if (number.includes('.') && numberText === '.') {
      return;
    }

    if (number.startsWith('0') || number.startsWith('-0')) {
      if (numberText === '.') {
        setNumber(number + numberText);
      } else if (numberText === '0' && number.includes('.')) {
        setNumber(number + numberText);
      } else if (numberText !== '0' && !number.includes('.')) {
        setNumber(numberText);
      } else if (numberText === '0' && !number.includes('.')) {
        setNumber(number);
      } else {
        setNumber(number + numberText);
      }
    } else {
      setNumber(number + numberText);
    }
  };

  const positiveNegative = () => {
    if (number.includes('-')) {
      setNumber(number.replace('-', ''));
    } else {
      setNumber('-' + number);
    }
  };

  const deleteNumber = () => {
    if ((number.length === 2 && number.includes('-')) || number.length === 1) {
      setNumber('0');
    } else {
      setNumber(number.slice(0, -1));
    }
  };

  const changeNumberToPrevious = () => {
    if (number.endsWith('.')) {
      setPreviousNumber(number.slice(0, -1));
    } else {
      setPreviousNumber(number);
    }
    setNumber('0');
  };

  const divide = () => {
    changeNumberToPrevious();
    lastOperation.current = Operators.divide;
  };

  const multiply = () => {
    changeNumberToPrevious();
    lastOperation.current = Operators.multiply;
  };

  const add = () => {
    changeNumberToPrevious();
    lastOperation.current = Operators.add;
  };

  const subtract = () => {
    changeNumberToPrevious();
    lastOperation.current = Operators.subtract;
  };

  const calculate = () => {
    const num1 = Number(number);
    const num2 = Number(previousNumber);

    switch (lastOperation.current) {
      case Operators.add:
        setNumber(`${num1 + num2}`);
        break;
      case Operators.subtract:
        setNumber(`${num2 - num1}`);
        break;
      case Operators.multiply:
        setNumber(`${num1 * num2}`);
        break;
      case Operators.divide:
        if (num2 !== 0) {
          setNumber(`${num2 / num1}`);
        } else {
          return;
        }
        break;
    }

    setPreviousNumber('0');
  };

  return {
    number,
    previousNumber,
    clean,
    buildNumber,
    positiveNegative,
    deleteNumber,
    divide,
    multiply,
    add,
    subtract,
    calculate,
  };
};
