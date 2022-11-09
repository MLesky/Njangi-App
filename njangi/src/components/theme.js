import { createTheme } from "@mui/material";

const lightTheme = createTheme({
    palette: {
        mode: "light",
        primary: {
            light: '#9177e1',
            main: '#5837d0',
            dark: '#2a157d'
        },
        secondary: {
            light: '#b2faff',
            main: '#7de5ed',
            dark: '#42bec7'
        },
    },
    breakpoints: {
        values: {
            mobile: 0,
            tablet: 480,
            laptops: 720,
            desktop: 1024
        }
    },
});

export default lightTheme;