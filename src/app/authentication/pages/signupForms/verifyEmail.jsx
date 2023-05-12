import { useState } from "react";
import {
    Box,
    Stack,
    Typography,
    Paper,
    Button,
    Checkbox,
} from "@mui/material";
import { Link } from "react-router-dom";

const VerifyPinForm = () => {
    const [isTermsAccepted, setIsTermsAccepted] = useState(false);

    return (
        <Box
            width="50%"
            sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
            }}
        >
            <Paper className="form-card" justifyContent='start' sx={{ padding: '40px 20px' }}>
                <Stack spacing={2}>
                    <Typography variant="h5" color='secondary'>Verify Your Email</Typography>
                    <Typography color='secondary'>Please type in the code we just sent to mbahlesky2@gmail.com</Typography>
                    <Stack direction='row' spacing={2}>
                        <Box sx={{
                            border: '2px solid white',
                            width: '40px',
                            height: '50px',
                            borderRadius: '5px'
                        }}></Box>
                        <Box sx={{
                            border: '2px solid white',
                            width: '40px',
                            height: '50px',
                            borderRadius: '5px'
                        }}></Box>
                        <Box sx={{
                            border: '2px solid white',
                            width: '40px',
                            height: '50px',
                            borderRadius: '5px'
                        }}></Box>
                        <Box sx={{
                            border: '2px solid white',
                            width: '40px',
                            height: '50px',
                            borderRadius: '5px'
                        }}></Box>
                        <Box sx={{
                            border: '2px solid white',
                            width: '40px',
                            height: '50px',
                            borderRadius: '5px'
                        }}></Box>
                        <Box sx={{
                            border: '2px solid white',
                            width: '40px',
                            height: '50px',
                            borderRadius: '5px'
                        }}></Box>
                    </Stack>
                    <Box><Button variant='text'>Resend Code</Button></Box>
                    <Stack direction='row' spacing={1} alignItems='start'>
                        <Checkbox checked={isTermsAccepted} sx={{
                            color: 'white',
                            '&.Mui-checked': {
                                color: 'white',
                            },
                        }} onChange={(e) => setIsTermsAccepted(!isTermsAccepted)} />
                        <Typography variant='body1' sx={{ color: 'white' }}>By continuing, you agree that we create an account for you (unless already created), and accept our Terms and Conditions and Privacy Policy.</Typography>
                    </Stack>
                    <Stack direction='row' justifyContent='space-between'>
                        <Button variant='contained'>Back</Button>
                        <Button variant='contained'>Continue</Button>
                    </Stack>
                </Stack>
            </Paper>
        </Box>
    );
}

export default VerifyPinForm;