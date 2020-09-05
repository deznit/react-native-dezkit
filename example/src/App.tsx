import React from 'react';
import { ThemeProvider } from 'react-native-dezkit';
import { CustomTheme } from './components/CustomTheme';
import { ButtonScreen, HomeScreen } from './screens';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';

// Add new typescript properties to the theme

// const CustomTheme = {
//   dark: false,
//   colors: {
//     ...DefaultTheme.colors,
//   },
//   borderWidth: DefaultTheme.borderWidth,
// };

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
              backgroundColor: CustomTheme.colors.primary,
              height: 100,
              borderBottomLeftRadius: 16,
              borderBottomRightRadius: 16,
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontSize: 32,
            },
            // headerLeft: () => (
            //   <Ionicons
            //     name="ios-arrow-back"
            //     color="white"
            //     size={32}
            //   ></Ionicons>
            // ),
          }}
        >
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Buttons" component={ButtonScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </ThemeProvider>
  );
}
