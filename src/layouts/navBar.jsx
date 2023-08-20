import React, { useState, useEffect } from "react";
import { Box, Button, Stack, Typography, Paper, IconButton, InputBase, Badge, Avatar } from "@mui/material";
import { appName, routeNames } from "../utils";
import { logo } from "../assets";
import { Call, Notifications, Chat, Group, History, Home, Schedule, Search, Wallet } from "@mui/icons-material";
import { Link, NavLink, Outlet } from "react-router-dom";
import { database } from "../firebase";
import { doc, getDoc } from "firebase/firestore";
import { useUserAuth } from "../context/UserAuthContext";


const NavBar = () => {
  const { user } = useUserAuth();
  const [userPhotoURL, setUserPhotoURL] = useState(""); 

  useEffect(() => {
    const fetchUserData = async () => {
      if (user) {
        try {
          const userDocRef = doc(database, "users", user.uid);
          const docSnapshot = await getDoc(userDocRef);
          
          if (docSnapshot.exists()) {
            const userData = docSnapshot.data();
            setUserPhotoURL(userData.photoURL || "");
            console.log("Fetched user data:", userData);
          } else {
            setUserPhotoURL(""); 
            console.log("No user data found.");
          }
        } catch (error) {
          console.error("Error fetching user data:", error);
        }
      }
    };

    fetchUserData();
  }, [user]);

  console.log("Rendering with userPhotoURL:", userPhotoURL);


  return (
    <Stack direction='column' height='100vh' width='100vw'>
      <Paper square={true} sx={{minHeight: '50px', overflowX: 'auto'}}>
        <Stack height='50px' direction="row" justifyContent="space-between" alignItems='center'>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              paddingX: 1,
            }}
          >
            <img src={logo} alt="Logo" className="logo-s3 navbar-logo"/>
            <Typography variant="h5" className="title-text" noWrap={true} sx={{
              display: {
                xs: 'none',
                md: 'block'
              }
            }}>
              {appName}
            </Typography>
          </Box>

          <Stack className='full-nav-links' direction="row" spacing='5px' alignItems='center' sx={{display: {xs: 'none !important', md: 'block !important'}}}>
            <NavLink to={routeNames.home}>
              <Button size="small" startIcon={<Home className="nav-btn-icon" />}>Home</Button>
            </NavLink>
            <NavLink to={'/' + routeNames.groups}>
              <Button size="small" startIcon={<Group className="nav-btn-icon" />}>Groups</Button>
            </NavLink>
            <NavLink to={'/' + routeNames.chats}>
              <Button size="small" startIcon={<Chat className="nav-btn-icon" />}>Chats</Button>
            </NavLink>
            <NavLink to={'/' + routeNames.history}>
              <Button size="small" startIcon={<History className="nav-btn-icon" />}>Transactions</Button>
            </NavLink>
            <NavLink to={'/' + routeNames.schedules}>
              <Button size="small" startIcon={<Schedule className="nav-btn-icon" />}>Schedules</Button>
            </NavLink>
            <NavLink to={'/' + routeNames.accounts}>
              <Button size="small" startIcon={<Wallet className="nav-btn-icon" />}>Accounts</Button>
            </NavLink>
          </Stack>

          <Stack className='icon-nav-links' direction="row" spacing={1} alignItems='center'sx={{display: {xs: 'block !important', md: 'none !important'}}}>
            <NavLink to={routeNames.home}>
              <IconButton size="small"><Home className="nav-icon" /></IconButton>
            </NavLink>
            <NavLink to={'/' + routeNames.groups}>
              <IconButton size="small"><Group className="nav-icon" /></IconButton>
            </NavLink>
            <NavLink to={'/' + routeNames.chats}>
              <IconButton size="small"><Chat className="nav-icon" /></IconButton>
            </NavLink>
            <NavLink to={'/' + routeNames.history}>
              <IconButton size="small"><History className="nav-icon" /></IconButton>
            </NavLink>
            <NavLink to={'/' + routeNames.schedules}>
              <IconButton size="small"><Schedule className="nav-icon" /></IconButton>
            </NavLink>
            <NavLink to={'/' + routeNames.accounts}>
              <IconButton size="small"><Wallet className="nav-icon" /></IconButton>
            </NavLink>
          </Stack>

          <Stack className='action-icons' direction='row' spacing={1} alignItems='center'>
            <IconButton>
              <Badge badgeContent={1} color='error'>
                <Call />
              </Badge>
            </IconButton>
            <IconButton>
              <Badge badgeContent={3} color='error'>
                <Notifications />
              </Badge>
            </IconButton>
            <Link to={'/' + routeNames.profile}>
              <IconButton type="button" color="primary">
                <Avatar src={userPhotoURL} sx={{ height: 30, width: 30 }} />
              </IconButton>
            </Link>
          </Stack>
        </Stack>
      </Paper>

      <Paper sx={{
        maxWidth: '1080px',
        margin: '10px auto',
        width: '100%',
        maxHeight: '700px',
        flexGrow: 1,
        overflow: 'auto',
      }}>
        <Outlet />
      </Paper>
    </Stack>
  );
};

export default NavBar;
