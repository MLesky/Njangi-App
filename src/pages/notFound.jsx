import { Box, Stack, Typography, Link, Button } from "@mui/material";
import { page404 } from "../assets";


const ErrorPage = () => {
    return ( 
        <Box sx={{
            height: '100vh',
            width: '100vw',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
        }}>
            <Stack alignItems='center' spacing={2}>
                <Typography variant='h4' className='title-text'>
                    Oops!
                </Typography>
                <img src={page404} alt='page not found' height='400px'/>
                <a href='/' style={{
                    padding: '10px',
                    cursor: 'pointer',
                    color: 'primary'
                }}>
                 Go To HomePage   
                </a>
            </Stack>
        </Box>
     );
}
 
export default ErrorPage;