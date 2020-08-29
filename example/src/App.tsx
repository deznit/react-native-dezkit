import React from 'react';
import { StyleSheet, View } from 'react-native';
import {
  ThemeProvider,
  useTheme,
  DefaultTheme,
  Button,
} from 'react-native-dezkit';
// Add new typescript properties to the theme

const CustomTheme = {
  dark: false,
  colors: {
    ...DefaultTheme.colors,
  },
};

export default function App() {
  const { colors } = useTheme();
  return (
    <ThemeProvider theme={CustomTheme}>
      <View style={styles.container}>
        <Button type="default" color={colors.secondary} />
      </View>
    </ThemeProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
