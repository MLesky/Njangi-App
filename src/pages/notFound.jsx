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
                <Typography variant='h3' sx={{color: '#535353'}}>
                    Page Not Found
                </Typography>
                <Link to='/login' sx={{
                    padding: '10px',
                    cursor: 'pointer',
                }}>
                 Go To HomePage   
                </Link>
            </Stack>
        </Box>
     );
}
 
export default ErrorPage;