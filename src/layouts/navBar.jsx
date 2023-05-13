import { Box, Button, Stack, Typography, Paper, IconButton, InputBase } from "@mui/material";
import { appName } from "../utils/constants";
import { logo } from "../assets";
import { Call, Chat, Group, History, Home, Person, Schedule, Search, Wallet } from "@mui/icons-material";
import { NavLink, Outlet } from "react-router-dom";

const NavBar = () => {
  return (
    <>
      <Paper square={true}>
      <Stack height='50px' direction="row" justifyContent="space-between">
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
        }}
      >
        <img src={logo} alt="Logo" className="logo-s3" />
        <Typography variant="h5" className="title-text" noWrap={true}>
          {appName}
        </Typography>
      </Box>

      <Stack direction="row" spacing='5px' alignItems='center'>
        <NavLink to="/">
        <Button size="small" startIcon={<Home className="nav-btn-icon"/>}>Home</Button>
        </NavLink>
        <NavLink to="/groups">
        <Button size="small" startIcon={<Group className="nav-btn-icon"/>}>Groups</Button>
        </NavLink>
        <NavLink to="/chats">
        <Button size="small" startIcon={<Chat className="nav-btn-icon"/>}>Chats</Button>
        </NavLink>
        <NavLink to="/history">
        <Button size="small" startIcon={<History className="nav-btn-icon"/>}>History</Button>
        </NavLink>
        <NavLink to="/schedules">
        <Button size="small" startIcon={<Schedule className="nav-btn-icon"/>}>Schedules</Button>
        </NavLink>
        <NavLink to="/accounts">
        <Button size="small" startIcon={<Wallet className="nav-btn-icon"/>}>Accounts</Button>
        </NavLink>
      </Stack>

      <Stack direction='row' spacing={1} alignItems='center'>
      <Paper
        elevation={1}
        variant='outlined'
          component="form"
          sx={{
            mr: 5,
            p: "0 4px",
            display: "flex",
            alignItems: "center",
            width: 200,
            height: 'fit-content'
          }}
        >
          <InputBase
            className="body-text text-primary"
            sx={{ ml: 1, flex: 1}}
            placeholder="Search..."
          />
          <IconButton type="button" color='primary'>
            <Search />
          </IconButton>
        </Paper>
        <IconButton type='button' color="primary">
          <Call />
        </IconButton>
        <IconButton type="button" color="primary">
          <Person/>
        </IconButton>
      </Stack>
    </Stack>
    </Paper>
    
    <Paper sx={{
      maxWidth: '1080px',
      margin: '10px auto',
      height: 'calc(100vh - (50px + 20px))',
      maxHeight: '700px'
    }}>
      <Outlet />
    </Paper>
    </>
  );
};

export default NavBar;
