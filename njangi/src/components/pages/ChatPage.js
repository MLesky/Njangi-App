import { Box, ListItemAvatar, Stack, Typography, Toolbar, Avatar, List, ListItem, ListItemText, Divider, Badge, SmallAvatar, ListSubheader } from "@mui/material";
import { Link } from 'react-router-dom'

import ChatBox from "../layouts/ChatBox";

export default function ChatScreen({chats, chatItemStyles, title}){
    const radius = {
            mobile: 0,
            tablet: '10px',
            laptop: '30px',
        }
    return (
        <Box id='all-chats'
            sx={{
                display: 'flex',
                boxShadow: 4,
                height: {
                    mobile: '100%',
                    laptop: '90%'
                },
                width: {
                    mobile: '100%',
                    tablet: '85%',
                    laptop: '85%'
                },
                minHeight: 500,
                borderRadius: radius,
            }}
        >
                <List sx={{
                    width: '100%',
                    height: '100%',
                    width: {
                        mobile: '100%',
                        laptop: '60%'
                    },
                    boxShadow: 5,
                    height: '100%',
                    borderTopLeftRadius: radius,
                    borderBottomLeftRadius: radius,
                    p: 0,
                    overflowY: 'auto',
                }}>
                    <ListSubheader  sx={{
                            borderTopLeftRadius: radius,
                            borderTopRightRadius: {
                                tablet: '10px',
                                laptop: 0,
                            },
                            height: 50,
                            display: 'flex',
                            bgcolor: 'primary.main',
                            alignItems: 'end',
                            m: 0,
                        }}>
                        <ListItemText primary={
                            <Typography sx={{
                                color: 'white.main', 
                                fontWeight: 'bold',
                                textAlign: 'center',
                            }}>
                                {title}
                            </Typography>
                        }/>
                    </ListSubheader>
                    <Divider />
                    {chats.map(chat => (
                        <>
                        <ListItem button>
                            <ListItemAvatar>
                                <Avatar src={chat.profile_pic} alt={chat.name} />
                            </ListItemAvatar>
                            <ListItemText 
                                primary={
                                    <Typography variant='h6' fontWeight='bold' noWrap>
                                        {chat.name}
                                    </Typography>
                                }
                                secondary={
                                    <Typography variant='subtitle2' lineHeight='20px' fontSize='0.8em' noWrap>
                                        {chat.last_message.sender}: {chat.last_message.message}
                                    </Typography>
                                }  />
                            <Stack spacing={1} sx={{
                                height: '100%',
                                alignItems: 'center',
                                ml: 1,
                            }}>
                                <Badge>
                                    <Avatar sx={{
                                        color: 'white.main',
                                        bgcolor: 'error.main',
                                        width: 20,
                                        height: 20,
                                        fontSize: '0.8em',
                                    }}>{chat.no_unread}</Avatar>
                                </Badge>
                                <Typography variant='caption' color='primary.main' fontWeight='bold' fontSize='0.7em' noWrap>{chat.last_message.time}</Typography>
                            </Stack>
                        </ListItem>
                        <Divider />
                        </>
                    ))}
                </List>
                <ChatBox chat={chats[0]} boxRadius={radius}/>
        </Box>
    )
}