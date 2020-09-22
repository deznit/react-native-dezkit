import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { ThemeProvider } from 'react-native-dezkit';
import { CustomTheme } from './components/CustomTheme';
import { ButtonScreen, HomeScreen, TextScreen } from './screens';

const Stack = createStackNavigator();
export default function App() {
  return (
    <ThemeProvider theme={CustomTheme}>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Home"
          headerMode="screen"
          screenOptions={{
            headerStyle: {
              backgroundColor: CustomTheme.colors.accent,
              height: 100,
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontSize: 32,
            },
          }}
        >
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Buttons" component={ButtonScreen} />
          <Stack.Screen name="Text" component={TextScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </ThemeProvider>
  );
}
