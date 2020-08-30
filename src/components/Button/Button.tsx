import React from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  View,
  Text,
  StyleProp,
  ViewStyle,
  TextStyle,
} from 'react-native';
import { useTheme } from '../../core/Theming';
import type { ColorType } from '../../types';

type ButtonProps = {
  /*
   * - default -- with background color
   * - rounded -- default button with borderRadius = height/2
   */
  type?: 'default' | 'rounded' | 'text';
  /*
   * -- if true --> will have transparent border only button
   * - border colour will be determined by color props
   * - default is false
   */
  outline?: boolean;
  /*
   * - change in font size and padding
   * - default is  "m"contained
   * - button will be disabled
   * - default is false
   */
  disabled?: boolean;
  /*
   * - Button label will be uppercase
   * default is true
   */
  uppercase?: boolean;
  /*
   * - colour of background for outline = false
   * - color of border outline = true
   */
  color?: ColorType;
  /*
   * - will show spinner if set to true
   * - default is false
   */

  loading?: boolean;
  /*
   * - label text to be rendered inside button
   */
  children: React.ReactNode;
  /*
   * - pass styles for button here
   * - like adding padding/ margin around button
   * - change borderWidth etc
   */
  buttonStyle?: StyleProp<ViewStyle>;
  /*
   * - pass styles for button content here
   * - like adding padding around text etc
   */
  contentStyle?: StyleProp<ViewStyle>;
  /*
   * - Pass styles for label text here
   */
  textStyle?: StyleProp<TextStyle>;
  /*
   * - Function to run on press
   */

  onPress?: () => void;
};

const Button = ({
  type,
  outline = false,
  color = 'danger',
  onPress,
  children,
  uppercase = true,
  textStyle,
  buttonStyle,
  contentStyle,
  disabled,
}: ButtonProps) => {
  const theme = useTheme();
  let buttonColor;

  const buttonTypeStyle =
    type === 'rounded' ? styles.roundedButton : styles.defaultButton;

  if (type === 'default' || type === 'rounded') {
    buttonColor = outline
      ? !disabled
        ? [
            {
              borderWidth: theme.borderWidth,
              borderColor: theme.colors[color],
            },
          ]
        : [
            {
              borderWidth: theme.borderWidth,
              borderColor: theme.colors.disabled,
            },
          ]
      : !disabled
      ? { backgroundColor: theme.colors[color] }
      : { backgroundColor: theme.colors.disabled };
  } else {
    buttonColor = { backgroundColor: 'transparent' };
  }

  const textColor =
    outline || type === 'text'
      ? !disabled
        ? { color: theme.colors[color] }
        : { color: theme.colors.disabled }
      : theme.dark
      ? { color: theme.colors.textDark }
      : { color: theme.colors.textLight };

  return (
    <TouchableOpacity
      disabled={disabled}
      onPress={onPress}
      style={[styles.button, buttonTypeStyle, buttonColor, buttonStyle]}
    >
      <View style={[styles.content, contentStyle]}>
        <Text
          style={[
            styles.label,
            textColor,
            uppercase && styles.uppercase,
            textStyle,
          ]}
        >
          {children}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  button: {
    minWidth: 60,
    // backgroundColor: '#dc3545',
    borderRadius: 6,
  },
  roundedButton: {
    borderRadius: 50,
  },
  defaultButton: {
    borderRadius: 6,
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  uppercase: {
    textTransform: 'uppercase',
  },
  label: {
    marginHorizontal: 16,
    marginVertical: 8,
    color: 'white',
    textAlign: 'center',
    fontSize: 18,
  },
});
