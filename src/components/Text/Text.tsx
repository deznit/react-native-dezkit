import React from 'react';
import { StyleSheet, Text as RnText, StyleProp, TextStyle } from 'react-native';
import { useTheme } from '../../core/Theming';
import type { ColorType } from '../../types';

type TextProps = {
  children: React.ReactNode;
  /*
   * - type of text with different font size
   * - default is paragraph
   */
  type?: 'title' | 'heading' | 'subheading' | 'paragraph' | 'tagline';
  /*
   * - Color of text
   * - if provided will use the color or else will depent on theme dark or light
   */
  color?: ColorType;
  /*
   * - provides stle object to override any default style eg. font sizes
   * -
   */
  style?: StyleProp<TextStyle>;
};

const Text = ({
  children,
  type = 'paragraph',
  color,

  style,
}: TextProps) => {
  const theme = useTheme();
  const typeStyle = styles[type];

  let colorStyle;
  if (color) {
    colorStyle = { color: theme.colors[color] };
  } else {
    colorStyle = theme.dark
      ? { color: theme.colors.textLight }
      : { color: theme.colors.textDark };
  }

  return <RnText style={[typeStyle, colorStyle, style]}>{children}</RnText>;
};

export default Text;

const styles = StyleSheet.create({
  title: {
    fontSize: 32,
    marginVertical: 2,
    fontWeight: 'bold',
  },
  heading: {
    fontSize: 24,
    marginVertical: 2,
  },
  paragraph: {
    fontSize: 18,
    marginVertical: 2,
  },

  subheading: {
    fontSize: 20,
    marginVertical: 2,
  },

  tagline: {
    fontSize: 16,
  },
});
