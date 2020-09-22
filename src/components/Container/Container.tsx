import React from 'react';
import { StyleSheet, View, StyleProp, ViewStyle } from 'react-native';
import { useTheme } from '../../core/Theming';
import type { ColorType } from '../../types';

type ContainerProps = {
  children: React.ReactNode;
  /*
   * - Color of container background
   * - if provided will use the color or else will depent on theme dark or light
   */
  color?: ColorType;
  /*
   * - provides stle object to override any default style eg. flex
   * -
   */
  style?: StyleProp<ViewStyle>;
};

const Container = ({ children, color, style }: ContainerProps) => {
  const theme = useTheme();
  let backgroundColor;
  if (!color) {
    backgroundColor = theme.colors.background;
  } else {
    backgroundColor = theme.colors[color];
  }
  return (
    <View style={[styles.container, { backgroundColor }, style]}>
      {children}
    </View>
  );
};

export default Container;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
