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
import { backgroundImageWoman, logo } from "../../../assets/index";
import { appName } from "../../../utils/constants";

// TODO: change styles for input fields

const LoginPage = () => {
    const [loginEmail, setLoginEmail] = useState('');
    const [loginPassword, setLoginPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    // TODO: handle for submittion
    const handleFormSubmit = event => {
        event.preventDefault();
        console.log('Form Submitted');
        alert(`Email: ${loginEmail} \n Password: ${loginPassword}`);

        // Email and password validation and verification
    };

    return (
        <Box
            className="dark-bg-image"
            sx={{
                height: "100vh",
                width: "100vw",
                backgroundImage: `url(${backgroundImageWoman})`,
                display: "flex",
                justifyContent: "space-between",
            }}
        >
            <Box
                width="50%"
                sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                }}
            >
                <Paper className="form-card">
                    <form onSubmit={handleFormSubmit} className='form-light'>
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
                                Log Into {appName}
                            </Typography>
                            <Typography color="white" variant="h6">
                                New here? <Link to="..\signup">Create New Account</Link>
                            </Typography>
                            <TextField
                                id="loginEmail"
                                label="Enter email"
                                variant="filled"
                                className="light-input-field"
                                value={loginEmail}
                                onChange={e => {
                                    setLoginEmail(e.target.value);
                                }}
                                sx={{
                                    backgroundColor: "rgb(255, 255, 255, 0.7)",
                                }}
                            />
                            <FormControl
                                sx={{ m: 1, backgroundColor: "rgb(255, 255, 255, 0.7)" }}
                                variant="filled"
                            >
                                <InputLabel htmlFor="loginPassword">
                                    Enter Password
                                </InputLabel>
                                <FilledInput
                                    id="loginPassword"
                                    value={loginPassword}
                                    onChange={e => {
                                        setLoginPassword(e.target.value);
                                    }}
                                    type={showPassword ? "text" : "password"}
                                    endAdornment={
                                        <InputAdornment position="end">
                                            <IconButton
                                                aria-label="toggle password visibility"
                                                onClick={handleClickShowPassword}
                                                edge="end"
                                            >
                                                {showPassword ? <VisibilityOff /> : <Visibility />}
                                            </IconButton>
                                        </InputAdornment>
                                    }
                                />
                            </FormControl>
                            <Link to="">Forgot password?</Link>

                            <Button type='submit' variant="contained" size="large" sx={{ padding: "10px" }}>
                                sign in
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
                                <Typography sx={{ marginLeft: 1 }}>Signin with Google</Typography>
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
                                    Signin with Facebook
                                </Typography>
                            </Button>
                        </Stack>
                    </form>
                </Paper>
            </Box>
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
        </Box>
    );
};

export default LoginPage;
