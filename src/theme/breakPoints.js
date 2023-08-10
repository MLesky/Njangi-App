import { useMediaQuery } from "@mui/material";

const breakpoints = () => {
    return {
        smallScreen: useMediaQuery('(max-width:600px)'),
        mediumScreen: useMediaQuery('(max-width:1024px)'),
        largeScreen: useMediaQuery('(min-width:1024px)')
    }
}