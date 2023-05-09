import { createTheme } from "@mui/material/styles";

let theme = createTheme({
  palette: {
    primary: {
    // light:
      main: "#6930c3",
    // dark:
    },
    secondary: {
      main: "#64dfdf",
    },

    custom: {
        light: '#f5efff',
        dark: '#252525'
    }
  },
});

export default theme;