import React, { useState } from "react";
import {
  Box,
  Stack,
  Typography,
  Paper,
  Button,
  FormControl,
  FilledInput,
  InputLabel,
  FormHelperText,
} from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { backgroundImageWoman, logo } from "../../../assets/index";
import { appName, routeNames } from "../../../utils";
import { useUserAuth } from "../../../context/UserAuthContext";

const ForgotPassword = () => {
  const navigate = useNavigate();
  const [resetEmailSent, setResetEmailSent] = useState(false);
  const [resetEmail, setResetEmail] = useState("");
  const [error, setError] = useState("");
  const { setUpSendPasswordResetEmail } = useUserAuth();

  const handleResetEmailChange = (event) => {
    setResetEmail(event.target.value);
  };

  const handleForgotPassword = async (event) => {
    event.preventDefault();
    setError("");

    try {
      await setUpSendPasswordResetEmail(resetEmail);
      setResetEmailSent(true);
      navigate(routeNames.changePassword);
    } catch (err) {
      setError("An error occurred: " + err.message);
    }
  };

  return (
    <Stack
      className="dark-bg-image"
      direction={{ xs: 'column-reverse', md: 'row' }}
      spacing={{ xs: 2, md: 1 }}
      justifyContent='center'
      alignItems='center'
      sx={{
        height: "100vh",
        width: "100vw",
        paddingY: { xs: 3, md: 0 },
        backgroundImage: `url(${backgroundImageWoman})`,
        overflowY: 'auto'
      }}
    >

      <Box
        sx={{
          marginBottom: { xs: '300px', md: 0 }
        }}
      >
        <Paper className="form-card">
          <Box component="form" noValidate>
            <Stack spacing={2} className="form-card-content">
              <Stack
                direction="row"
                spacing={2}
                alignItems="center"
                justifyContent="center"
              >
                <img src={logo} className="logo-s3" alt="Fund Savy logo" />
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
                Reset Password for {appName}
              </Typography>

              <FormControl
                variant="filled"
                className="light-input-field"
                helperText={resetEmailSent ? "A password reset link has been sent to your email." : ""}
                error={resetEmailSent}
                required
              >
                <InputLabel htmlFor="resetEmail">Enter Email for Password Reset</InputLabel>
                <FilledInput
                  id="resetEmail"
                  value={resetEmail}
                  onChange={handleResetEmailChange} 
                  type="email"
                />
                <Button
                  variant="contained"
                  color="primary"
                  onClick={handleForgotPassword}
                  sx={{ marginTop: 2 }} 
                >
                  Send Reset Link
                </Button>
                {error && <FormHelperText id="component-error-text">{error}</FormHelperText>}
              </FormControl>


              <Typography color="white" variant="h6">
                <Link to={routeNames.login}>Back to Login</Link>
              </Typography>

              <Typography color="white" variant="h6">
                <Link to={routeNames.changePassword}>Go to change password</Link>
              </Typography>

            </Stack>
          </Box>
        </Paper>
      </Box>
      
    </Stack>
  );
}

export default ForgotPassword;
