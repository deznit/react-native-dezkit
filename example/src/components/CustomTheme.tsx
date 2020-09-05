import { DefaultTheme } from 'react-native-dezkit';

export const CustomTheme = {
  dark: false,
  colors: {
    ...DefaultTheme.colors,
    primary: '#0ead69',
    secondary: '#f4f5f7',
    default: '#172B4D',
  },
  borderWidth: DefaultTheme.borderWidth,
};
