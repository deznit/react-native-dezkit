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
// import { useTheme } from '../../core/Theming';
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
   * default is false
   */
  uppercase?: boolean;
  /*
   * - colour of background for outline = false
   * - color of border outline = true
   */
  color?: string;
  /*
   * - will show spinner if set to true
   * - default is false
   */

  loading?: boolean;
  /*
   * - label text to be rendered inside button
   */
  children?: React.ReactNode;
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
  theme?: any;
  onPress?: () => void;
};

const Button = ({ type, outline = false, color, onPress }: ButtonProps) => {
  // const theme = useTheme();
  // TODO: check for text only button style
  const buttonTypeStyle =
    type === 'rounded' ? styles.roundedButton : styles.defaultButton;

  const buttonColor = outline
    ? [styles.outlineButton, { borderColor: color }]
    : { backgroundColor: color };

  const textColor = outline ? { color } : null;
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.button, buttonTypeStyle, buttonColor]}
    >
      <View style={styles.content}>
        <Text style={[styles.label, textColor]}>Default</Text>
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
  outlineButton: {
    borderWidth: 1,
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  label: {
    marginHorizontal: 16,
    marginVertical: 8,
    color: 'white',
    textAlign: 'center',
    fontSize: 24,
  },
});
