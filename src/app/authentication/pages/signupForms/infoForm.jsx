import {
  Box,
  Paper,
  Stack,
  Typography,
  TextField,
  Button,
  FormControl,
  InputAdornment,
  FilledInput,
  IconButton,
  InputLabel,
  FormHelperText,
  Avatar,
} from "@mui/material";
import {
  Visibility,
  VisibilityOff,
} from "@mui/icons-material";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { logo } from "../../../../assets";
import { appName, routeNames } from "../../../../utils";

// TODO: Stylize Input fields
const FillInInfoForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  const [usernameError, setUsernameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");
  const [photoError, setPhotoError] = useState("");

  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      navigate(routeNames.home);
    }
  };

  const validateForm = () => {
    let isValid = true;
    if (username.trim().length === 0) {
      setUsernameError("Username is required");
      isValid = false;
    } else {
      setUsernameError('');
    }
    if (!/\S+@\S+\.\S+/.test(email)) {
      setEmailError("Please enter valid email");
      isValid = false;
    } else {
      setEmailError("");
    }
    if (password.trim().length < 8) {
      setPasswordError("Password must be at least 8 characters long");
      isValid = false;
    } else {
      setPasswordError("");
    }
    if (confirmPassword !== password) {
      setConfirmPasswordError("Passwords do not match");
      isValid = false;
    } else {
      setConfirmPasswordError("");
    }
    return isValid;
  };

  const handlePhotoChange = (e) => {
    const file = e.target.files[0];
    if (file && file.type.split("/")[0] === "image" && file.size <= 1000000) {
      setPhotoError("");
      setSelectedPhoto(URL.createObjectURL(file));
    } else {
      setPhotoError("Invalid file type or size (must be an image file with a size less than or equal to 1 MB).");
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
          width: {xs: '100%', sm: '400px'},
          height: {xs: '100%', sm: 'fit-content',}
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
              {photoError !== "" && (
                <Typography sx={{ color: "red" }}>{photoError}</Typography>
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
              error={usernameError !== ''}
              helperText={usernameError}
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
              error={emailError !== ''}
              helperText={emailError}
            />

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
                value={password}
                error={passwordError !== ""}
                onChange={(e) => setPassword(e.target.value)}
                type={showPassword ? "text" : "password"}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={() => {
                        setShowPassword(true)
                        setTimeout(() => {
                          setShowPassword(false)
                        }, 1500);
                      }}
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

            <TextField
              type={showPassword ? "text" : "password"}
              id="confirm-password"
              label="Confirm Password"
              variant="filled"
              className="light-input-field"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              error={confirmPasswordError !== ''}
              helperText={confirmPasswordError}
            />

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