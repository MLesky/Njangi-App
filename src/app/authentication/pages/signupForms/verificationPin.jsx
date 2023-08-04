import React from "react";
import { useState } from "react";
import { Box, Stack, Typography, Paper, Button, Checkbox } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { MuiOtpInput } from "mui-one-time-password-input";
import { routeNames } from "../../../../utils";

// TODO : remove otp code hint
const VerifyPinForm = () => {
  const otpCode = '123456';
  const navigate = useNavigate();
  const [otp, setOtp] = useState("");
  const [otpError, setOtpError] = useState("");
  const [isTermsAccepted, setIsTermsAccepted] = useState(false);
  const [termsMessage, setTermsMessage] = useState('');

  const handleOtpChange = (newValue) => {
    setOtp(newValue);
    setOtpError('');
    if (newValue === otpCode && isTermsAccepted) {
        navigate('../' + routeNames.fillInfo);
      }
  };

  const handleSubmit = (event) => {
    if(otp === ''){
        setOtpError("Please enter the Code Sent")
    } else if (otp !== otpCode) {
        setOtpError("Wrong OTP (123456)");
    } else if (otp === otpCode && !isTermsAccepted) {
        setTermsMessage('Please Accept The Terms');
    } else if (otp === otpCode && isTermsAccepted) {
        navigate('../' + routeNames.fillInfo);
    }
  };

  const validateChar = (value, index) => {
    let isNumber = typeof value === "number";
    let isString = typeof value === "string";
    return (isNumber || isString) && !isNaN(Number(value));
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: {xs: '100%', md: '50%'}
      }}
    >
      <Paper
        className="form-card"
        justifyContent="start"
        sx={{ padding: "40px 20px" }}
      >
        <Stack spacing={2}>
          <Typography variant="h5" color="secondary">
            Verify Your Email
          </Typography>
          <Typography color="secondary">
            Please type in the code we just sent to +237679682626
          </Typography>
          <MuiOtpInput
            sx={{
              maxWidth: 400,
              gap: {
                xs: 1,
                md: 2,
              },
              border: {xs: 'none'}
            }}
            value={otp}
            length={6}
            onChange={handleOtpChange}
            validateChar={validateChar}
            TextFieldsProps={{
              placeholder: "-",
              className: "light-otp-field",
              error: otpError === "",
            }}
          />
            <Typography color='error' variant='caption'>{otpError}</Typography>
          <Box>
            <Button variant="text">Resend Code</Button>
          </Box>
          <Stack direction="row" spacing={1} alignItems="start">
            <Checkbox
              checked={isTermsAccepted}
              sx={{
                color: "white",
                "&.Mui-checked": {
                  color: "white",
                },
              }}
              onChange={(e) => {setIsTermsAccepted(!isTermsAccepted);}}
            />
            <Typography variant="body1" sx={{ color: "white" }}>
              By continuing, you agree that we create an account for you (unless
              already created), and accept our Terms and Conditions and Privacy
              Policy.
            </Typography>
          </Stack>
          <Typography color='error' variant='caption'>{termsMessage}</Typography>
          <Stack direction="row" justifyContent="space-between">
            <Link to="../">
              <Button variant="contained">Back</Button>
            </Link>
            <Button variant="contained" onClick={handleSubmit}>
              Continue
            </Button>
          </Stack>
        </Stack>
      </Paper>
    </Box>
  );
};

export default VerifyPinForm;

