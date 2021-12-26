import React from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import { createMuiTheme } from '@material-ui/core/styles';

import colors from './colors';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: colors.primary,
    },
    secondary: {
      main: colors.secondary,
    },
    background: {
      default: colors.bgColor,
    },
    darkGray: {
      main: colors.darkGray
    },

    text: { primary: colors.text },
  },
});

export default function ThemeApp({ children }) {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}
