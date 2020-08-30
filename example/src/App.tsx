import React from 'react';
import { StyleSheet, View } from 'react-native';
import { ThemeProvider, DefaultTheme, Button } from 'react-native-dezkit';
// Add new typescript properties to the theme

const CustomTheme = {
  dark: false,
  colors: {
    ...DefaultTheme.colors,
  },
  borderWidth: DefaultTheme.borderWidth,
};

export default function App() {
  const onPress = () => {
    console.log('hello');
  };
  return (
    <ThemeProvider theme={CustomTheme}>
      <View style={styles.container}>
        <Button
          type="default"
          uppercase={false}
          color="primary"
          onPress={onPress}
          disabled
        >
          Default Button
        </Button>
        <Button type="text">Text Button</Button>
        <Button type="rounded">Rounded Button</Button>
        <Button type="rounded" outline>
          Rounded Button
        </Button>
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
