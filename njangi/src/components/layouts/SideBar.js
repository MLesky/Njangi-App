import { Groups, Chat, ScheduleSend, Settings, Logout, Send, Call, AccountBalance } from "@mui/icons-material"

import { Box, Stack, Typography, Button, IconButton } from "@mui/material"

export default function SideBar({sx}){
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
                <Stack direction = 'column'>
                    <Button color='white' 
                    sx={{
                        px: {
                            mobile: 5,
                            tablet: 3
                        },
                        py: {
                            mobile: 2,
                            tablet: 1,
                        },
                        width: '100%', 
                    justifyContent:'start'}} 
                    startIcon={<Groups />}>
                        <Typography variant="caption" fontWeight='bold' sx={{display: {mobile: 'flex', tablet: 'none', laptop: 'flex'}}}>groups</Typography>
                    </Button>
                    <Button color='white' 
                    sx={{
                        px: {
                            mobile: 5,
                            tablet: 3
                        },
                        py: {
                            mobile: 2,
                            tablet: 1,
                        },
                        width: '100%', 
                    justifyContent:'start'}} 
                    startIcon={<Chat />}>
                        <Typography variant="caption" fontWeight='bold' sx={{display: {mobile: 'flex', tablet: 'none', laptop: 'flex'}}}>chats</Typography>
                    </Button>
                    <Button color='white' 
                    sx={{
                        px: {
                            mobile: 5,
                            tablet: 3
                        },
                        py: {
                            mobile: 2,
                            tablet: 1,
                        },
                        width: '100%', 
                    justifyContent:'start'}} 
                    startIcon={<AccountBalance />}>
                        <Typography variant="caption" fontWeight='bold' sx={{display: {mobile: 'flex', tablet: 'none', laptop: 'flex'}}}>accounts</Typography>
                    </Button>
                    <Button color='white' 
                    sx={{
                        px: {
                            mobile: 5,
                            tablet: 3
                        },
                        py: {
                            mobile: 2,
                            tablet: 1,
                        },
                        width: '100%', 
                    justifyContent:'start'}} 
                    startIcon={<ScheduleSend />}>
                        <Typography variant="caption" fontWeight='bold' sx={{display: {mobile: 'flex', tablet: 'none', laptop: 'flex'}}}>schedules</Typography>
                    </Button>
                    <Button color='white' 
                    sx={{
                        px: {
                            mobile: 5,
                            tablet: 3
                        },
                        py: {
                            mobile: 2,
                            tablet: 1,
                        },
                        width: '100%', 
                    justifyContent:'start'}} 
                    startIcon={<Send />}>
                        <Typography variant="caption" fontWeight='bold' sx={{display: {mobile: 'flex', tablet: 'none', laptop: 'flex'}}}>transfers</Typography>
                    </Button>
                    <Button color='white' 
                    sx={{
                        px: {
                            mobile: 5,
                            tablet: 3
                        },
                        py: {
                            mobile: 2,
                            tablet: 1,
                        },
                        width: '100%', 
                    justifyContent:'start'}} 
                    startIcon={<Call />}>
                        <Typography variant="caption" fontWeight='bold' sx={{display: {mobile: 'flex', tablet: 'none', laptop: 'flex'}}}>calls</Typography>
                    </Button>
                </Stack>

                <Stack direction='column' alignItems='center' width='100%'>
                    <IconButton>
                        <Settings color='white' sx={{
                            fontSize: {
                                mobile: '35px',
                                tablet: '25px',}
                            }}/>
                    </IconButton>
                    <IconButton>
                        <Logout color='white' sx={{
                            fontSize: {
                                mobile: '35px',
                                tablet: '25px',}
                            }}/>
                    </IconButton>
                </Stack>
            </Stack>
        </Box>
    )
}