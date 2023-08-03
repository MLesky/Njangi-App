import { Outlet } from "react-router-dom";
import {Box, } from "@mui/material";
import { backgroundImageEngineers } from "../../../assets/index";

// TODO: change styles for input fields

const SignUpWrapper = () => {

    return (
        <Box
            className="dark-bg-image"
            sx={{
                height: "100vh",
                width: "100vw",
                backgroundImage: `url(${backgroundImageEngineers})`,
                display: "flex",
                justifyContent: "center",
            }}
        >
            <Outlet />
        </Box>
    );
};

export default SignUpWrapper;
