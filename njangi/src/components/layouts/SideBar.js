import { Groups, Chat, ScheduleSend, Settings, Logout, Send, Call, AccountBalance } from "@mui/icons-material"

import { Box, Stack, Typography, Button, IconButton, List, ListItem, ListItemIcon, ListItemText } from "@mui/material"

export default function SideBar({sx}){
    const menuItems = [
        {
            text: 'Groups',
            icon: <Groups color='white'/>,
            path: ''
        },
        {
            text: 'Chats',
            icon: <Chat color='white'/>,
            path: ''
        },
        {
            text: 'Accounts',
            icon: <AccountBalance color='white'/>,
            path: ''
        },
        {
            text: 'Schedules',
            icon: <ScheduleSend color='white'/>,
            path: ''
        },
        {
            text: 'Transfers',
            icon: <Send color='white'/>,
            path: ''
        },
        {
            text: 'Calls',
            icon: <Call color='white'/>,
            path: ''
        }
    ]
    return (
        <Box id='sidebar'
            bgcolor='primary.main'
            height='60%'
            minHeight={500}
            overflowY='auto'
            width='fit-content'
            py={6}
            borderRadius='0 50px 50px 0'
            sx={sx}
        >
            <Stack spacing={3}>
               <List>
                {menuItems.map(item => (
                    <ListItem button>
                        <ListItemIcon>{item.icon}</ListItemIcon>
                        <ListItemText sx={{
                            color: 'white.main',
                            display: {
                                mobile: 'flex',
                                tablet: 'none',
                                laptop: 'flex'
                            }
                        }}>{item.text}</ListItemText>
                    </ListItem>
                ))}
               </List>

                <Stack direction='column' alignItems='start' pl={1}width='100%'>
                    <IconButton>
                        <Settings color='white' sx={{
                            fontSize: 35
                        }}/>
                    </IconButton>
                    <IconButton>
                        <Logout color='white' sx={{
                            fontSize: 35
                            }}/>
                    </IconButton>
                </Stack>
            </Stack>
        </Box>
    )
}