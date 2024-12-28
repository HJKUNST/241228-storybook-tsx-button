import React from 'react';
import { ThemeProvider } from 'react-jss'; //Adding a global decorator in preview ... wrapping all stories with the 'ThemeProvider'
import { theme } from '../src/theme/theme'; //Adjusting the import path to theme file

export const decorators = [
  (Story) => (
    <ThemeProvider theme={theme}>
      <Story />
    </ThemeProvider>
  ),
];

/*
[Original Setting]
// @type { import('@storybook/react').Preview }
const preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },

};
export default preview; */
