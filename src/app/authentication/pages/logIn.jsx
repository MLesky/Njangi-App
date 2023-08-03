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
  FormHelperText,
  Select,
  MenuItem,
} from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { backgroundImageWoman, logo } from "../../../assets/index";
import { appName } from "../../../utils/constants";

const zipCodes = [
  {
    country: "Cameroon",
    code: "237",
  },
  {
    country: "USA",
    code: "1",
  },
];

const LoginPage = () => {
  const navigate = useNavigate();
  const [loginNumber, setLoginNumber] = useState("");
  const [email, setEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [zipCode, setZipCode] = useState("");
  const [zipCodeError, setZipCodeError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [numberError, setNumberError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loginWithEmail, setLoginWithEmail] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleZipCodeChange = (event) => {
    setZipCode(event.target.value);
    if (zipCode !== "") {
      setZipCodeError("");
    }
  };

  const handleNumberChange = (event) => {
    setLoginNumber(event.target.value);
    if (loginNumber !== "") {
      setNumberError("");
    }
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
    if (email !== "") {
      setEmailError("");
    }
  };

  const handlePasswordChange = (event) => {
    setLoginPassword(event.target.value);
    if (loginPassword !== "") {
      setPasswordError("");
    }
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();

    // input validation
    if (loginPassword === "") {
      setPasswordError("Please enter password");
    }

    if (!loginWithEmail) {
      if (zipCode === "") {
        setZipCodeError("Select code");
      }
      if (loginNumber === "") {
        setNumberError("Please enter Phone Number");
      }

      if (zipCode !== "" && loginNumber !== "" && loginPassword != "") {
        //signin with phone number
        navigate("/");
      }
    } else {
        if (email === "") {
            setEmailError("Please enter email");
          } else if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)){
            setEmailError("Please enter valid email");
          }
    
          if (email !== "" && loginPassword != "") {
            //signin with username
            navigate("/");
          }
    }
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
          <Box component="form" onSubmit={handleFormSubmit} noValidate>
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
              <Typography color='secondary' sx={{textDecoration: 'underline', cursor: 'pointer'}} onClick={() => setLoginWithEmail(!loginWithEmail)}>
                Signup with {loginWithEmail ? 'Phone Number' : 'Email'} instead
              </Typography>
              {loginWithEmail ? (
                <TextField
                  sx={{ flexGrow: 1 }}
                  id="email"
                  type="text"
                  label="Enter Email"
                  variant="filled"
                  className="light-input-field"
                  value={email}
                  helperText={emailError}
                  error={emailError !== ""}
                  required
                  onChange={handleEmailChange}
                />
              ) : (
                <Stack direction="row" width="100%">
                  <FormControl
                    helperText={zipCodeError}
                    error={zipCodeError !== ""}
                    required
                    sx={{
                      minWidth: 90,
                      width: 130,
                    }}
                    className="light-input-field"
                    variant="filled"
                  >
                    <InputLabel>Country Code</InputLabel>
                    <Select
                      label="Country"
                      value={zipCode}
                      onChange={handleZipCodeChange}
                    >
                      {zipCodes.map((zipCode) => (
                        <MenuItem value={zipCode.code}>
                          +{zipCode.code} - {zipCode.country}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                  <TextField
                    sx={{ flexGrow: 1 }}
                    id="loginNumber"
                    type="tel"
                    label="Enter Phone Number"
                    variant="filled"
                    className="light-input-field"
                    value={loginNumber}
                    helperText={numberError}
                    error={numberError !== ""}
                    required
                    onChange={handleNumberChange}
                  />
                </Stack>
              )}

              <FormControl
                variant="filled"
                className="light-input-field"
                helperText={passwordError}
                error={passwordError !== ""}
                required
              >
                <InputLabel htmlFor="loginPassword">Enter Password</InputLabel>
                <FilledInput
                  id="loginPassword"
                  value={loginPassword}
                  onChange={handlePasswordChange}
                  type={showPassword ? "text" : "password"}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        edge="end"
                      >
                        {showPassword ? (
                          <VisibilityOff sx={{ color: "white" }} />
                        ) : (
                          <Visibility sx={{ color: "white" }} />
                        )}
                      </IconButton>
                    </InputAdornment>
                  }
                />
                <FormHelperText id="component-error-text">
                  {passwordError}
                </FormHelperText>
              </FormControl>
              <Link to="">Forgot password?</Link>

              <Button
                type="submit"
                variant="contained"
                size="large"
                sx={{ padding: "10px" }}
              >
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
                <Typography sx={{ marginLeft: 1 }}>
                  Signin with Google
                </Typography>
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
          </Box>
        </Paper>
      </Box>
      <Box
        width="50%"
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: "25px",
        }}
      >
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
