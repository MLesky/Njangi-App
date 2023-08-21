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
import { Link } from "react-router-dom";
import { backgroundImageWoman, logo } from "../../../assets/index";
import { appName, routeNames } from "../../../utils";
import { useUserAuth } from "../../../context/UserAuthContext";

const ChangePassword = () => {
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const { resetPassword } = useUserAuth();

  const handleResetPassword = async (event) => {
    event.preventDefault();
    setError("");

    if (newPassword !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    try {
      await resetPassword(newPassword);
      setError("Password reset successfully.");
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
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            padding: "25px",
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
                    Change Password for {appName}
                </Typography>
              
              <FormControl
                variant="filled"
                className="light-input-field"
                required
              >
                <InputLabel htmlFor="newPassword">New Password</InputLabel>
                <FilledInput
                  id="newPassword"
                  value={newPassword}
                  onChange={(event) => setNewPassword(event.target.value)}
                  type="password"
                />
              </FormControl>

              <FormControl
                variant="filled"
                className="light-input-field"
                required
              >
                <InputLabel htmlFor="confirmPassword">Confirm Password</InputLabel>
                <FilledInput
                  id="confirmPassword"
                  value={confirmPassword}
                  onChange={(event) => setConfirmPassword(event.target.value)}
                  type="password"
                />
              </FormControl>

              <Button
                variant="contained"
                color="primary"
                onClick={handleResetPassword}
                sx={{ marginTop: 2 }} 
              >
                Reset
              </Button>
              {error && <FormHelperText id="component-error-text">{error}</FormHelperText>}
              
              <Typography color="white" variant="h6">
                <Link to={routeNames.forgotPassword}>Back to Forgot Password</Link>
              </Typography>

            </Stack>
          </Box>
        </Paper>
      </Box>
      
    </Stack>
  );
}

export default ChangePassword;
