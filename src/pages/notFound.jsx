import { Box, Stack, Typography, Link, Button } from "@mui/material";


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
                <Typography variant='h1' class="dark-grey-text">
                    Page Not Found
                </Typography>
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