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
import { PicturePicker } from "../../../../components";
import { useUserAuth } from "../../../../context/UserAuthContext";
import { database } from "../../../../firebase";
import { collection, doc, setDoc, updateDoc, Timestamp } from "firebase/firestore";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage"; 


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

  const { signUp } = useUserAuth();

  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      try {
        const userCredential = await signUp(email, password);
        console.log("Sign-up successful", userCredential);
        const user = userCredential.user;

        if (user) {
          const userDocRef = doc(database, "users", user.uid);
          await setDoc(userDocRef, {
            username,
            email,
          });

          if (selectedPhoto) {
            const storageRef = ref(getStorage(), `userPhotos/${user.uid}`);
            await uploadBytes(storageRef, selectedPhoto);
            const photoURL = await getDownloadURL(storageRef);

            await updateDoc( userDocRef, {
              photoURL, 
              username, 
            });
          }

          navigate(routeNames.home);
        }
      } catch (error) {
        console.error("Sign up error:", error);
      }
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

            <PicturePicker selectedPhoto={selectedPhoto} setSelectedPhoto={setSelectedPhoto} photoError={photoError} setPhotoError={setPhotoError} />

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