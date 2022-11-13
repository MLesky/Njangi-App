import { Box, ListItemAvatar, Stack, Typography, Toolbar, Avatar } from "@mui/material";

export default function ChatScreen({allChats, chatItemStyles, title}){
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
            <Stack direction='column' sx={{
                    width: {
                        mobile: '100%',
                        laptop: '60%'
                    },
                    boxShadow: 5,
                    height: '100%',
                    borderTopLeftRadius: radius,
                    borderBottomLeftRadius: radius,
                }}>
                <Box sx={{
                    width: '100%',
                    bgcolor: 'primary.main',
                    height: 40,
                    border: 'none',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderTopLeftRadius: radius,
                    borderTopRightRadius: {
                        mobile: 0,
                        tablet: '10px',
                        laptop: 0,
                    }
                }}>
                    <Typography variant='subtitle2' sx={{
                        fontWeight: 'bold',
                        color: 'white.main',
                        
                    }}>{title}</Typography>
                </Box>
                <ListItemAvatar>
                    {/* all chats here */}
                </ListItemAvatar>
            </Stack>
            <Stack direction='column' sx={{
                width: '100%',
                display: {
                    mobile: 'none',
                    laptop: 'flex'
                }
                }}>
                <Box sx={{
                    height: 40, 
                    bgcolor:'primary.main',
                    borderTopRightRadius: radius,
                    }}>
                    {/* <ChatBox chat={chat}/> */}
                </Box>
            </Stack>
        </Box>
    )
}