import {
  Box,
  Paper,
  Stack,
  Typography,
  TextField,
  Checkbox,
  FormControlLabel,
  Button,
  Avatar,
} from "@mui/material";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { logo } from "../../../../assets";
import { appName } from "../../../../utils/constants";

// TODO: Stylize Input fields
const FillInInfoForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  const [usernameError, setUsernameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [confirmPasswordError, setConfirmPasswordError] = useState(false);
  const [photoError, setPhotoError] = useState(false);

  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      navigate("/");
    }
  };

  const validateForm = () => {
    let isValid = true;
    if (username.trim().length === 0) {
      setUsernameError(true);
      isValid = false;
    } else {
      setUsernameError(false);
    }
    if (!/\S+@\S+\.\S+/.test(email)) {
      setEmailError(true);
      isValid = false;
    } else {
      setEmailError(false);
    }
    if (password.trim().length < 8) {
      setPasswordError(true);
      isValid = false;
    } else {
      setPasswordError(false);
    }
    if (confirmPassword !== password) {
      setConfirmPasswordError(true);
      isValid = false;
    } else {
      setConfirmPasswordError(false);
    }
    return isValid;
  };

  const handlePhotoChange = (e) => {
    const file = e.target.files[0];
    if (file && file.type.split("/")[0] === "image" && file.size <= 1000000) {
      setPhotoError(false);
      setSelectedPhoto(URL.createObjectURL(file));
    } else {
      setPhotoError(true);
      setSelectedPhoto(null);
    }
  };

  return (
    <Box
      width="100%"
      minWidth="300px"
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Paper
        className="form-card"
        justifyContent="start"
        sx={{ 
          padding: "20px 60px", 
          width: '400px', 
          
        }}
      >
        <form onSubmit={handleSubmit} noValidate>
          <Stack spacing={1}>
            <Stack
              direction="row"
              spacing={2}
              alignItems="center"
              justifyContent="center"
            >
              <img src={logo} alt='logo' className="logo-s3" />
              <Typography
                className="title-text"
                variant="h5"
                color="primary"
                textTransform="uppercase"
              >
                {appName}
              </Typography>
            </Stack>

            <Box>
              <label htmlFor="profile-image">
                <Stack alignItems="center" spacing={1}>
                  <Avatar
                    alt="profile-pic"
                    src={selectedPhoto}
                    sx={{ width: 100, height: 100 }}
                  />
                  <Typography sx={{ color: "white" }}>
                    Upload Profile Picture
                  </Typography>
                </Stack>
              </label>
              <input
                type="file"
                id="profile-image"
                accept="image/*"
                hidden
                onChange={handlePhotoChange}
              />
              {photoError && (
                <Typography sx={{ color: "red" }}>
                  Invalid file type or size (must be an image file with a size
                  less than or equal to 1 MB).
                </Typography>
              )}
            </Box>

            <TextField
              type="text"
              id="username"
              label="Username"
              variant="filled"
              placeholder="Give yourself a username"
              className="light-input-field"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              error={usernameError}
              helperText={usernameError ? "Username is required" : ""}
            />

            <TextField
              type="email"
              id="user-email"
              label="Enter Email"
              placeholder="e.g. johndoe@email.com"
              variant="filled"
              className="light-input-field"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              error={emailError}
              helperText={emailError ? "Invalid email address" : ""}
            />

            <TextField
              type={showPassword ? "text" : "password"}
              id="password"
              label="Password"
              variant="filled"
              className="light-input-field"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              error={passwordError}
              helperText={
                passwordError
                  ? "Password must be at least 8 characters long"
                  : ""
              }
            />
            <TextField
              type={showPassword ? "text" : "password"}
              id="confirm-password"
              label="Confirm Password"
              variant="filled"
              className="light-input-field"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              error={confirmPasswordError}
              helperText={
                confirmPasswordError ? "Passwords do not match" : ""
              }
            />

            <Box>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={showPassword}
                    sx={{
                      color: "white",
                      "&.Mui-checked": {
                        color: "white",
                      },
                    }}
                    onChange={() => setShowPassword((show) => !show)}
                  />
                }
                label="Show Password"
                sx={{
                  color: "white",
                }}
              />
            </Box>

            <Stack direction="row" justifyContent="space-between" marginTop={2}>
              <Link to="../verify-email">
                <Button variant="contained">Back</Button>
              </Link>
              <Button type="submit" variant="contained">Sign Up</Button>
            </Stack>
          </Stack>
        </form>
      </Paper>
    </Box>
  );
};

export default FillInInfoForm;