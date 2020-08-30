import DefaultTheme from './DefaultTheme';

import createTheme from './ThemeProvider';

export const { ThemeProvider, useTheme } = createTheme(DefaultTheme);
