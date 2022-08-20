import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import { styles } from '../theme/appTheme';

interface Props {
  text: string;
  color?: 'gray' | 'darkGray' | 'orange';
  width?: 'wideWidth' | 'normalWidth';
  action: (numberText: string) => void;
}

export const ButtonCalc = ({
  text,
  color = 'darkGray',
  width = 'normalWidth',
  action,
}: Props) => {
  return (
    <TouchableOpacity onPress={() => action(text)}>
      <View style={[styles.button, styles[color], styles[width]]}>
        <Text
          style={[
            styles.buttonText,
            color !== 'gray' ? styles.textWhite : null,
          ]}>
          {text}
        </Text>
      </View>
    </TouchableOpacity>
  );
};
