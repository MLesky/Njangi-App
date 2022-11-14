import React from "react";
import { useState } from "react";

import { AppBar, Toolbar, Stack, Typography, Button, IconButton, Box, SwipeableDrawer } from "@mui/material";
import { AddCircleOutline, MoreVert, VisibilityOff, Menu, Close } from "@mui/icons-material";

import SideBar from "../layouts/SideBar";
import { SearchBox } from "../layouts/materials";
import image from './image.jpg'
import ChatScreen from "./ChatPage";

// import Notification from "./Notification";

const HomePage = ({data, notif, style}) => {
    const [chats, setChats] = useState({}); // edit this to fetch all chats
    const [groups, setGroups] = useState([
        {
            name: 'Money Masters',
            id: 1,
            profile_pic: image,
            no_unread: 5,
            no_members: 22,
            last_message: {sender: 'Goerge', message: 'I already sent the money bro', time: '9:45 AM'}
        },
    ]); // edit this to fetch all groups
    
    const [isDrawerOpen, setIsDrawerOpen] = useState(false)

    const chatItemStyles = {
       box: {
        width: '100%',
        height: 50,
        display: 'flex',
        justifyContent: 'space-evenly',
        borderBottom: 'solid 3px',
        borderColor: 'primary.main'
       },
    }

    const displayResponsive = {
        display: {
            mobile: 'none',
            tablet: 'flex'
        }
    }
    return (
        <>
            <AppBar position='sticky' sx={{height: '50px', bgcolor:'primary.main',}}>
                <Toolbar variant='dense' sx={{display: 'flex', justifyContent: 'space-between'}}>
                    <IconButton 
                        sx={{display: {tablet: 'none'}}}
                        onClick = {() => setIsDrawerOpen(true)}
                    >
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
            <Box id="homepage"  sx={{
                display: 'flex',
                height: 'calc(100vh - 110px)',
                maxHeight: 1000,
                width: '100%',
                alignItems: 'center',
                justifyContent: 'space-between',
               overflow: 'auto'
            }}>
                <SwipeableDrawer bgcolor='primary.light'
                    anchor='left'
                    height='100vh'
                    sx={{display: {tablet: 'none'}}}
                    open={isDrawerOpen}
                    onClose = {() => setIsDrawerOpen(false)}
                    >
                    
                    <Box height='100%' display='flex' flexDirection='column' alignItems='center' bgcolor='primary.main'>
                        <Box width='100%' display='flex' justifyContent='right'>
                            <IconButton onClick={() => setIsDrawerOpen(false)}><Close color="white"/></IconButton>
                        </Box>
                        <SideBar sx={{display: {mobile: 'flex', tablet: 'none'}}}/>
                    </Box>
                </SwipeableDrawer>
                <SideBar sx={{boxShadow: 10, display: {mobile: 'none', tablet: 'flex'}}} />
                <Box sx={{
                    height: '100%',
                    width: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                }}
                    >
                       <ChatScreen chats={groups} chatItemStyles={chatItemStyles} title={'All Groups'}/> 
                </Box>
            </Box>
        </>
    )
}
 
export default HomePage;