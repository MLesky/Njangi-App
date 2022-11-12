import React from "react";

import { useState } from "react";

import { AppBar, Toolbar, Stack, Typography, Button, IconButton, Box } from "@mui/material";
import { AddCircleOutline, MoreVert, VisibilityOff, Menu } from "@mui/icons-material";

import SideBar from "../layouts/SideBar";
import { SearchBox } from "../layouts/materials";
import ChatScreen from "./ChatPage";

// import Notification from "./Notification";

const HomePage = ({data, notif, style}) => {
    
    const [chats, setChats] = useState({});

    const groupPage = {
        title: 'All Groups',
    }

    const chatItemStyles = {
       box: {
        width: '100%',
        height: 50,
        display: 'flex',
        justifyContent: 'space-evenly',
        borderBottom: 'solid 3px',
        borderColor: 'primary.main'
       },

       photo: {

       }
    }

    const displayResponsive = {
        display: {
            mobile: 'none',
            tablet: 'flex'
        }
    }
    return (
        <>
            <AppBar position='sticky' sx={{height: '50px', bgcolor:'primary.main'}}>
                <Toolbar variant='dense' sx={{display: 'flex', justifyContent: 'space-between'}}>
                    <IconButton sx={{
                        display: {
                            tablet: 'none',
                        }
                    }}>
                        <Menu color="white"/>
                    </IconButton>
                    <Typography fontWeight='bold' fontSize={15}>NG-Groups</Typography>
                    <Stack direction='row' spacing={2} alignItems='center'>
                        <SearchBox placeholder='Search...' bgcolor='primary.light'/>
                        <IconButton sx={displayResponsive}><AddCircleOutline color='white'/></IconButton>
                        <IconButton sx={displayResponsive}><VisibilityOff color='white'/></IconButton>
                        <IconButton><MoreVert color='white'/></IconButton>
                    </Stack>
                </Toolbar>
            </AppBar>
            <Stack id="homepage" direction='row' sx={{
                height: '95vh',
                minHeight: 'calc(100vh - 110px)',
                maxHeight: 1700,
                width: '100%',
                alignItems: 'center',
                justifyContent: 'space-between',
            }}>
                <SideBar />
                <Box sx={{
                    height: '100%',
                    width: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}
                    >
                       <ChatScreen allChats={chats} chatItemStyles={chatItemStyles} screenInfo={groupPage}/> 
                </Box>
            </Stack>
        </>
    )
}
 
export default HomePage;