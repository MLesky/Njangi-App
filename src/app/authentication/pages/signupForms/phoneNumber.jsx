import React from 'react';
import { useState } from "react";
import {
    FacebookOutlined,
    Google,
} from "@mui/icons-material";
import {
    Box,
    Stack,
    Typography,
    TextField,
    Paper,
    Button,
    MenuItem,
    Select,
    InputLabel,
    FormControl,
    Grid,
} from "@mui/material";
import { Link } from "react-router-dom";
import { logo } from "../../../../assets/index";
import { appName, routeNames } from "../../../../utils";
import { useNavigate } from "react-router-dom";

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

const SignUpWithPhoneNumber = () => {
    const [phoneNumber, setPhoneNumber] = useState("");
    const [zipCode, setZipCode] = useState("");
    const [numberError, setNumberError] = useState("");
    const [zipCodeError, setZipCodeError] = useState("");
    const navigate = useNavigate();

    const handleZipCodeChange = (event) => {
        setZipCode(event.target.value);
        console.log(zipCode)
        if (zipCode !== "") {
          setZipCodeError("");
        }
      };
    
      const handleNumberChange = (event) => {
        setPhoneNumber(event.target.value);
        if (phoneNumber !== "") {
          setNumberError("");
        }
      };
    
    const handleSubmit = e => {

        if (zipCode === "") {
            setZipCodeError("Select code");
          }
          if (phoneNumber === "") {
            setNumberError("Please enter Phone Number");
          }
    
          if (zipCode !== "" && phoneNumber !== "") {
            navigate(routeNames.verifyCode);
          }
    }

    return (
        <Grid 
          container 
          spacing={2}
          justifyContent='center'
          alignItems='center'
          >
          <Grid item xs={12} md={6}>
          <Box
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
          </Grid>

          <Grid item xs={12} md={6} sx={{ paddingBottom: {xs:5, md:0}}}>
            <Box
                sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                }}
            >
                <Paper className="form-card">
                        <Stack spacing={2} className="form-card-content">
                            <Stack
                                direction="row"
                                spacing={2}
                                alignItems="center"
                                justifyContent="center"
                            >
                                <img src={logo} className="logo-s3" alt='Fund Savy logo' />
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
                                Already have an account? <Link to={routeNames.login}>Log In</Link>
                            </Typography>
                            <Typography variant='body1'
                                color='white'
                            >Please enter the following information</Typography>
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
                          +{zipCode.code}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                  <TextField
                    sx={{ flexGrow: 1 }}
                    id="phoneNumber"
                    type="number"
                    label="Enter Phone Number"
                    variant="filled"
                    className="light-input-field"
                    value={phoneNumber}
                    helperText={numberError}
                    error={numberError !== ""}
                    required
                    onChange={handleNumberChange}
                  />
                </Stack>
                            <Button variant="contained" size="large" sx={{ padding: "10px" }} onClick={handleSubmit}>
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
                </Paper>
            </Box>
          </Grid>

        </Grid>
    );
}

export default SignUpWithPhoneNumber;