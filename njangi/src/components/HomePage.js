import {GroupSidebar} from "./SideBars";
import floating_action from './assets/images/floating_action.svg'
import { AppBar, Toolbar, Stack, Typography, TextField, ButtonGroup, Button, IconButton, Box } from "@mui/material";
import { AddCircleOutline, Groups, MoreVert, VisibilityOff, Menu, Chat, ScheduleSend, Group, Send, Call, AttachMoney, AccountBalance } from "@mui/icons-material";
import { SearchBox } from "../components/layouts/materials";
// import Notification from "./Notification";

const HomePage = ({data, notif, style}) => {
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
                    <Stack direction='row' spacing={1} alignItems='center'>
                        
                        <Group size='large'/>
                        <Typography fontWeight='bold' fontSize={15}>NG-Groups</Typography>
                    </Stack>
                    <Stack direction='row' spacing={2} alignItems='center'>
                        <SearchBox placeholder='Search...' bgcolor='primary.light'/>
                        <IconButton sx={displayResponsive}><AddCircleOutline color='white'/></IconButton>
                        <IconButton sx={displayResponsive}><VisibilityOff color='white'/></IconButton>
                        <IconButton><MoreVert color='white'/></IconButton>
                    </Stack>
                </Toolbar>
            </AppBar>
            <Box id="boxpage" sx={{
                height: 'calc(100vh - 110px)',
                width: '100%',
                display: 'flex',
                alignItems: 'center'
            }}>
                <Box id='sidebar' sx={{
                    bgcolor: 'primary.main',
                    height: 650,
                    width: 'fit-content',
                    pt: 6,
                    boxShadow: 10
                }}>
                    <Stack direction='column' sx={{alignItems: 'start'}}>
                        <Button color='white' sx={{p: 2}} startIcon={<Group />}>groups</Button>
                        <Button color='white' sx={{p: 2}} startIcon={<Chat />}>chats</Button>
                        <Button color='white' sx={{p: 2}} startIcon={<AccountBalance />}>accounts</Button>
                        <Button color='white' sx={{p: 2}} startIcon={<ScheduleSend />}>schedules</Button>
                        <Button color='white' sx={{p: 2}} startIcon={<Send />}>transfers</Button>
                        <Button color='white' sx={{p: 2}} startIcon={<Call />}>calls</Button>
                    </Stack>
                </Box>
              {/*   <Box id="screen"
                    sx={{
                        width: '70%',
                        boxShadow: 10,
                        height: 700
                    }}> 
                    
                </Box> */ }
            </Box>
        </>
    )
}
 
export default HomePage;