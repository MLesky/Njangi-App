import {Sidebar, GroupSidebar} from "./SideBars";
import floating_action from './assets/images/floating_action.svg'
import { AppBar, Toolbar, Stack, Typography, TextField, ButtonGroup, Button, IconButton } from "@mui/material";
import { AddCircleOutline, Groups, MoreVert, VisibilityOff } from "@mui/icons-material";
import { SearchBox } from "./materials";
// import Notification from "./Notification";

const HomePage = ({data, notif, style}) => {
    const displayResponsive = {
        display: {
            mobile: 'none',
            tablet: 'flex'
        }
    }
    return (
        <div className="page">
            <AppBar position='sticky' sx={{height: '50px', bgcolor:'primary.main'}}>
                <Toolbar variant='dense' sx={{display: 'flex', justifyContent: 'space-between'}}>
                    <Stack direction='row' spacing={1} alignItems='center'>
                        <Groups size='large'/>
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
            <div className="side-bars">
            <Sidebar />
            <GroupSidebar />
            <button className="action-btn">
                <img src={floating_action} alt="" />
            </button>
            </div>
            </div>
    )
}
 
export default HomePage;