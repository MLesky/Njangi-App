import { AddIcCall, ArrowBack, VideoCall, Search, MoreVert, EmojiEmotions, Mic, AttachFile, Send } from "@mui/icons-material"
import { Box, Stack, Avatar, Typography, List, ListItem, ListItemAvatar, ListItemText, IconButton, TextareaAutosize } from "@mui/material"

export default function ChatBox({chat, boxRadius}) {

    return (
        <Stack direction='column' sx={{
            width: '100%',
            display: {
                laptop: 'flex'
            }
            }}>
            <Box sx={{
                height: 50, 
                width: '100%',
                bgcolor:'primary.main',
                borderTopRightRadius: boxRadius,
                borderTopLeftRadius: {
                    mobile: 0,
                    tablet: 10,
                    laptop: 0,
                },
                display: 'flex',
                justifyContent: 'space-between',
                }}>
                <Stack direction='row' width='fit-content'>
                    <IconButton><ArrowBack sx={{
                        color: 'white.main',
                        display: {mobile: 'flex', laptop: 'none'},
                    }}/></IconButton>
                    <List sx={{
                        height: 50,
                        alignItems: 'center',
                    }}>
                        <ListItem sx={{p: 0}} button>
                            <ListItemAvatar sx={{width: 30}}>
                                <Avatar src={chat.profile_pic} alt={chat.name}
                                />
                            </ListItemAvatar>
                            <ListItemText sx={{m: 0}} primary={
                                <Typography color='white.main' noWrap>{chat.name}</Typography>
                            } secondary={
                                <Typography fontSize='0.6em' color='white.main' noWrap>{chat.no_members + ' Members'}</Typography>
                            }/>
                        </ListItem>
                    </List>

                </Stack>
                <Stack direction='row' width='170px'>
                    <IconButton><Search color='white'/></IconButton>
                    <IconButton><AddIcCall color='white' /></IconButton>
                    <IconButton><VideoCall color='white'/></IconButton>
                    <IconButton><MoreVert color='white'/></IconButton>
                </Stack>
            </Box>

            <Box sx={{
                weight: '100%',
                height: 'calc(100% - 120px)',
                overflowY: 'auto'
            }}>
                <Stack direction='column'>
                    {/* messages */}
                </Stack>
            </Box>
            <form style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                padding: '5%'
            }}>
                <IconButton><EmojiEmotions color='primary'/></IconButton>
                <TextareaAutosize  id='messagebox'
                    placeholder="Enter message..."
                    maxRows={3}
                    style={{
                        width: '80%',
                        color: 'white',
                        backgroundColor: '#3f51b5',
                        padding: 10,
                        paddingLeft: 20,
                        borderRadius: 30,
                    }}
                />
                <IconButton><Mic color='primary'/></IconButton>
                <IconButton><AttachFile color='primary'/></IconButton>
                <IconButton><Send color='primary' fontSize='large'/></IconButton>
            </form>
        </Stack>
    )
}