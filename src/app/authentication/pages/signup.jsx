import { useState } from "react";
import {
    FacebookOutlined,
    Google,
    Visibility,
    VisibilityOff,
} from "@mui/icons-material";
import {
    Box,
    Stack,
    Typography,
    TextField,
    Paper,
    Button,
    FormControl,
    InputAdornment,
    FilledInput,
    IconButton,
    InputLabel,
} from "@mui/material";
import { Link } from "react-router-dom";
import { backgroundImageEngineers, logo } from "../../../assets/index";
import { appName } from "../../../utils/constants";

// TODO: change styles for input fields

const SignUpPage = () => {
    const [showPassword, setShowPassword] = useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    return (
        <Box
            className="dark-bg-image"
            sx={{
                height: "100vh",
                width: "100vw",
                backgroundImage: `url(${backgroundImageEngineers})`,
                display: "flex",
                justifyContent: "space-between",
            }}
        >
            <Box width="50%"
                sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    padding: '25px',                
                    }}>
                <Stack alignItems="center" width={400}>
                    <img src={logo} alt="logo" className="logo-s1" width={100} />
                    <Typography variant="h6" align="center" color="white">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis
                        quidem temporibus magnam est voluptate obcaecati iure nihil earum
                        qui enim.
                    </Typography>
                </Stack>
            </Box>

            <Box
                width="50%"
                sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                }}
            >
                <Paper className="form-card">
                    <form>
                        <Stack spacing={2} className="form-card-content">
                            <Stack
                                direction="row"
                                spacing={2}
                                alignItems="center"
                                justifyContent="center"
                            >
                                <img src={logo} className="logo-s3" />
                                <Typography
                                    className="title-text"
                                    variant="h5"
                                    color="primary"
                                    textTransform="uppercase"
                                >
                                    {appName}
                                </Typography>
                            </Stack>
                            <Typography
                                variant="h4"
                                color="white"
                                className="title-text"
                                align="center"
                            >
                                Create New Account
                            </Typography>
                            <Typography color="white" variant="h6">
                                Already have an account? <Link to="">Log In</Link>
                            </Typography>
                            <Typography variant='body1'
                            color='white'
                            >Please enter the following information</Typography>
                            <TextField
                                id="userEmail"
                                label="Enter Email Address"
                                variant="filled"
                                sx={{
                                    backgroundColor: "rgb(255, 255, 255, 0.7)",
                                }}
                            />
                           <TextField
                                id="userPhoneNumber"
                                label="Enter Phone Number"
                                variant="filled"
                                sx={{
                                    backgroundColor: "rgb(255, 255, 255, 0.7)",
                                }}
                            />
                            <Button variant="contained" size="large" sx={{ padding: "10px" }}>
                                continue
                            </Button>

                            <Button
                                variant="outlined"
                                sx={{
                                    color: "white",
                                    display: "flex",
                                    alignItems: "center",
                                    padding: "10px",
                                }}
                                size="large"
                            >
                                <Google sx={{ color: "red" }} />
                                <Typography sx={{ marginLeft: 1 }}>Continue with Google</Typography>
                            </Button>

                            <Button
                                variant="outlined"
                                sx={{
                                    color: "white",
                                    display: "flex",
                                    alignItems: "center",
                                    padding: "10px",
                                }}
                                size="large"
                            >
                                <FacebookOutlined sx={{ color: "blue" }} />
                                <Typography sx={{ marginLeft: 1 }}>
                                    Continue with Facebook
                                </Typography>
                            </Button>
                        </Stack>
                    </form>
                </Paper>
            </Box>
        </Box>
    );
};

export default SignUpPage;
