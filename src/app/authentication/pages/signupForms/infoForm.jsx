import {
  Box,
  Paper,
  Stack,
  Typography,
  TextField,
  Input,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
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

  const navigate = useNavigate();
  const handleSubmit = e => {
    navigate('/');
  };

  return (
    <Box
      width="100%"
      minWidth="400px"
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Paper
        className="form-card"
        justifyContent="start"
        sx={{ padding: "20px 60px" }}
      >
        <form onSubmit={handleSubmit}>
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
                <Stack alignItems='center' spacing={1}>
                <Avatar alt='profile-pic' sx={{width: 100, height: 100}}/>
                <Typography sx={{color: 'white'}}>Upload Profile Picture</Typography>
                </Stack>
              </label>
              <input type="file" id="profile-image" accept="image/*" hidden/>
            </Box>

            <Stack direction="row" spacing={2} justifyContent="space-between">
              <TextField
                type="text"
                id="first-name"
                label="First Name"
                variant="filled"
                className="light-input-field"
              />

              <TextField
                type="text"
                id="second-name"
                label="Second Name"
                variant="filled"
                className="light-input-field"
              />
            </Stack>

            <Stack direction="row" spacing={2} justifyContent="space-between">
              <TextField
                type="date"
                label="Date Of Birth"
                variant="filled"
                className="light-input-field primary-focused-color"
                value=""
                focused
              />

              <FormControl
                sx={{
                  width: "50%",
                }}
                className="light-input-field"
                variant="filled"
              >
                <InputLabel id="userGender">Gender</InputLabel>
                <Select labelId="userGender" label="Gender">
                  <MenuItem value="male">Male</MenuItem>
                  <MenuItem value="female">Female</MenuItem>
                  <MenuItem value="other">Other</MenuItem>
                </Select>
              </FormControl>
            </Stack>

            <Stack direction="row" spacing={2} justifyContent="space-between">
              <FormControl
                 sx={{
                  width: "50%",
                }}
                className="light-input-field"
                variant="filled"
              >
                <InputLabel>Country</InputLabel>
                <Select label="Country">
                  <MenuItem value="cameroon">Cameroon</MenuItem>
                  <MenuItem value="USA">USA</MenuItem>
                  <MenuItem value="other">Other</MenuItem>
                </Select>
              </FormControl>
              <TextField
                type="tel"
                id="phoneNumber"
                label="Telephone Number"
                variant="filled"
                className="light-input-field"
              />
            </Stack>

            <Stack direction="row" spacing={2} justifyContent="space-between">
              <TextField
                id="city"
                label="City"
                variant="filled"
                className="light-input-field"
              />
              <TextField
                type="address"
                id="Address"
                label="Address"
                variant="filled"
                className="light-input-field"
              />
            </Stack>

            <Stack
              direction="row"
              spacing={2}
              justifyContent="space-between"
              marginTop={4}
            >
              <TextField
                type={showPassword ? "text" : "password"}
                id="password"
                label="Password"
                variant="filled"
                className="light-input-field"
              />
              <TextField
                type={showPassword ? "text" : "password"}
                id="password"
                label="Confirm Password"
                variant="filled"
                className="light-input-field"
              />
            </Stack>

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
