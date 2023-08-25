import { Box, Stack, Typography, Link, Button } from "@mui/material";
import { page404 } from "../assets";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { routeNames } from "../utils";

const ErrorPage = () => {
    const navigate = useNavigate();
    const currentPath = window.location.pathname;
    // useEffect(() =>{
    //     if (currentPath.endsWith('/ng-groups')) {
    //         console.log('URL ends with /ng-groups');
    //         navigate('/' + routeNames.groups, { replace: true });
    //       } else if(currentPath.endsWith('/fund-groups')){
    //           navigate('/' + routeNames.chats, { replace: true });
    //       }
    // }, []);
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