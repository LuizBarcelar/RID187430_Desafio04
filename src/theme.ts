import { createTheme, responsiveFontSizes } from "@mui/material";

const commonSettings = {
  typography: {
    fontFamily: "Poppins, sans-serif",
    h1: {
      fontSize: "4rem",
      fontWeight: 600,
    },
    h2: {
      fontSize: "2.5rem",
      fontWeight: 600,
    },
    h3: {
      fontSize: "2rem",
      fontWeight: 600,
    },
    h4: {
      fontSize: "1.5rem",
      fontWeight: 600,
    },
  },
};

const lightTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#0F1624',
    },
    background: {
      default: '#ffffff',
      paper: '#f5f5f5',
    },
    text: {
      primary: '#000000',
    },
  },
  ...commonSettings,
});

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#fffff',
    },
    background: {
      default: '#0F1624',
      paper: '#1a1a2e',
    },
    text: {
      primary: '#ffffff',
    },
  },
  ...commonSettings,
});

export const themes = {
  light: responsiveFontSizes(lightTheme),
  dark: responsiveFontSizes(darkTheme),
};
