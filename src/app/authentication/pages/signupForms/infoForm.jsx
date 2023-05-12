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
import { logo } from "../../../../assets";
import { appName } from "../../../../utils/constants";

// TODO: Stylize Input fields
const FillInInfoForm = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <Box
      width="50%"
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
        sx={{ padding: "40px 20px" }}
      >
        <form>
          <Stack spacing={1}>
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

            <Stack direction="row" spacing={2} justifyContent="space-between">
              <TextField
                type="text"
                id="first-name"
                label="Filled"
                variant="filled"
                sx={{
                  backgroundColor: "rgb(255, 255, 255, 0.7)",
                }}
              />

              <TextField
                type="text"
                id="second-name"
                label="Filled"
                variant="filled"
                sx={{
                  backgroundColor: "rgb(255, 255, 255, 0.7)",
                }}
              />
            </Stack>

            <Stack direction="row" spacing={2} justifyContent="space-between">
              <FormControl sx={{
                width: '50%',
                  backgroundColor: "rgb(255, 255, 255, 0.7)",
                }}>
                <InputLabel>Date Of Birth</InputLabel>
              <Input
                type="date"
              />
              </FormControl>

              <FormControl
                sx={{
                  backgroundColor: "rgb(255, 255, 255, 0.7)",
                  width: "50%",
                }}
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
                variant="filled"
                sx={{
                  backgroundColor: "rgb(255, 255, 255, 0.7)",
                  width: "50%",
                }}
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
                sx={{
                  backgroundColor: "rgb(255, 255, 255, 0.7)",
                }}
              />
            </Stack>

            <Stack direction="row" spacing={2} justifyContent="space-between">
              <TextField
                id="city"
                label="City"
                variant="filled"
                sx={{
                  backgroundColor: "rgb(255, 255, 255, 0.7)",
                }}
              />
              <TextField
                type="address"
                id="Address"
                label="Address"
                variant="filled"
                sx={{
                  backgroundColor: "rgb(255, 255, 255, 0.7)",
                }}
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
                sx={{
                  backgroundColor: "rgb(255, 255, 255, 0.7)",
                }}
              />
              <TextField
                type={showPassword ? "text" : "password"}
                id="password"
                label="Confirm Password"
                variant="filled"
                sx={{
                  backgroundColor: "rgb(255, 255, 255, 0.7)",
                }}
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
              <Button variant="contained">Back</Button>
              <Button variant="contained">Sign Up</Button>
            </Stack>

          </Stack>
        </form>
      </Paper>
    </Box>
  );
};

export default FillInInfoForm;
