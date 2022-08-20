import React from 'react';
import { View, Text } from 'react-native';
import { styles } from '../theme/appTheme';
import { ButtonCalc } from '../components/ButtonCalc';
import { useCalculator } from '../hooks/useCalculator';

export const CalculatorScreen = () => {
  const {
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
  } = useCalculator();

  return (
    <View style={styles.calculatorContainer}>
      {previousNumber !== '0' && (
        <Text style={styles.smallResult}>{previousNumber}</Text>
      )}
      <Text style={styles.result} numberOfLines={1} adjustsFontSizeToFit>
        {number}
      </Text>

      <View style={styles.row}>
        <ButtonCalc text="C" color="gray" action={clean} />
        <ButtonCalc text="+/-" color="gray" action={positiveNegative} />
        <ButtonCalc text="del" color="gray" action={deleteNumber} />
        <ButtonCalc text="/" color="orange" action={divide} />
      </View>

      <View style={styles.row}>
        <ButtonCalc text="7" action={buildNumber} />
        <ButtonCalc text="8" action={buildNumber} />
        <ButtonCalc text="9" action={buildNumber} />
        <ButtonCalc text="X" color="orange" action={multiply} />
      </View>

      <View style={styles.row}>
        <ButtonCalc text="4" action={buildNumber} />
        <ButtonCalc text="5" action={buildNumber} />
        <ButtonCalc text="6" action={buildNumber} />
        <ButtonCalc text="-" color="orange" action={subtract} />
      </View>

      <View style={styles.row}>
        <ButtonCalc text="1" action={buildNumber} />
        <ButtonCalc text="2" action={buildNumber} />
        <ButtonCalc text="3" action={buildNumber} />
        <ButtonCalc text="+" color="orange" action={add} />
      </View>

      <View style={styles.row}>
        <ButtonCalc text="0" width="wideWidth" action={buildNumber} />
        <ButtonCalc text="." action={buildNumber} />
        <ButtonCalc text="=" color="orange" action={calculate} />
      </View>
    </View>
  );
};
