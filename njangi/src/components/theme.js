import { createTheme } from "@mui/material";
import { indigo } from "@mui/material/colors";

const lightTheme = createTheme({
    palette: {
        mode: "light",
        primary: {
            light: indigo[400],
            main: indigo[500],
            dark: indigo[900]
        },
        secondary: {
            light: '#b2faff',
            main: '#7de5ed',
            dark: '#42bec7'
        },
        error: {
            light: '#ffebee',
            main: '#f44336',
            dark: '#b71c1c'
        },
        white: {
            main: '#ffffff'
        }
    },
    breakpoints: {
        values: {
            mobile: 0,
            tablet: 480,
            laptop: 720,
            desktop: 1024
        }
    },
});

export default lightTheme;