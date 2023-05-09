import { Box, Button, Stack, Typography, Paper, IconButton, InputBase } from "@mui/material";
import { appName } from "../utils/constants";
import { logo } from "../assets";
import { Call, CallMissed, Chat, Group, History, Person, Schedule, Search, Wallet } from "@mui/icons-material";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <Paper square={true}>
      <Stack height='50px' direction="row" justifyContent="space-between">
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
        }}
      >
        <img src={logo} alt="Logo" className="logo-s3" />
        <Typography variant="h5" className="title-text">
          {appName}
        </Typography>
      </Box>

      <Stack direction="row" spacing='5px' alignItems='center'>
        <Link to="/groups">
        <Button size="small" startIcon={<Group />}>Groups</Button>
        </Link>
        <Link to="/chats">
        <Button size="small" startIcon={<Chat />}>Chats</Button>
        </Link>
        <Link to="/history">
        <Button size="small" startIcon={<History />}>History</Button>
        </Link>
        <Link to="/schedules">
        <Button size="small" startIcon={<Schedule />}>Schedules</Button>
        </Link>
        <Link to="/accounts">
        <Button startIcon={<Wallet />}>Accounts</Button>
        </Link>
      

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
  );
};

export default NavBar;
