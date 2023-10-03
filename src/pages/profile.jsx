import { AccountBalance, AccountBox, Help, InsertInvitationRounded, Language, Palette, Password, Verified, Wallet } from "@mui/icons-material";
import {
  Avatar,
  Box,
  Card,
  Grid,
  Stack,
  Typography,
  Button,
  List,
  ListItem,
  ListItemText,
  ListItemButton,
  ListItemIcon,
  Divider,
} from "@mui/material";
import { mtnLogo } from "../assets";
import { useDispatch, useSelector } from 'react-redux';
import { logout, updateDisplayName, updateUsername, updatePhotoURL } from "../features/user";
import { useUserAuth } from "../context/UserAuthContext";
import { toggleDarkMode } from '../features/theme';
import Switch from '@mui/material/Switch';
import { useNavigate } from "react-router-dom";
import { routeNames } from "../utils";
import { Navigate } from "react-router-dom";

const UserProfile = () => {
  const user = useSelector ((state) => state.user.value );
  const dispatch = useDispatch();
  const darkMode = useSelector((state) => state.theme.darkMode);
  const { logOut } = useUserAuth();

  const navigate = useNavigate();

  const handleLogout = () => {
    logOut().then(() => {
      dispatch(logout());
      navigate(routeNames.login);
    }).catch((error) => {
      console.error("Logout error: ", error)
    });
  }

  const handleToggleTheme = () => {
    dispatch(toggleDarkMode());
  };

  return (
    <Box padding={2}>
      <Grid container spacing={2} rowSpacing={2} direction="row" justifyContent='center'>
        <Grid item xs={12} sm={6} md={4}>
          <Card variant="outlined" sx={{ padding: 2 }}>
            <Stack direction="column" alignItems="center" spacing={2}>
              <Avatar
                alt="photo"
                src={user.photoURL}
                sx={{
                  height: {
                    xs: 100,
                    md: 150,
                  },
                  width: {
                    xs: 100,
                    md: 150,
                  },
                }}
              />
              {console.log("User's photo URL:", user.photoURL)}
              <Stack alignItems="center">
                <Typography variant="h5" fontWeight="bold">
                  {/* Marco Marcelvin */}
                  { user.displayName }
                </Typography>
                <Typography variant="h6" fontWeight="bold">
                  {/* @mmacelvin */}
                  {user.username}
                </Typography>
                <Typography variant="body1" fontWeight="bold">
                  +237-679-348-983
                  {/* {user.phoneNumber} */}
                </Typography>
                <Typography fontWeight="bold">
                  {/* useremail@email.com */}
                  {user.email}
                </Typography>
              </Stack>
              <Stack
                direction="column-reverse"
                justifyContent="space-around"
                spacing={1}
              >
                <Button variant="outlined" onClick={handleLogout}>Log Out</Button>
                <Button variant="contained">Edit Info</Button>
              </Stack>
            </Stack>
          </Card>
        </Grid>

        <Grid item xs={12} md={8}>
          <Card variant="outlined" sx={{ padding: 2 }}>
            <List>
            <ListItem>
              <ListItemButton>
                <ListItemIcon>
                  <Palette />
                </ListItemIcon>
                <ListItemText primary="Appearance" />
                <Switch
                  checked={darkMode}
                  onChange={handleToggleTheme}
                  name="themeToggle"
                  color="primary"
                />
              </ListItemButton>
            </ListItem>
              <Divider />
              <ListItem secondaryAction={
                <Stack direction='row' alignItems='center'>
                  <Avatar src={mtnLogo} alt='account'/>
                  <Typography>Main Momo Account</Typography>
                </Stack>
              }>
                <ListItemButton>
                  <ListItemIcon>
                    <Wallet />
                  </ListItemIcon>
                  <ListItemText primary="Default Account" />
                </ListItemButton>
              </ListItem>
              <Divider />
              <ListItem>
                <ListItemButton>
                  <ListItemIcon>
                    <Verified />
                  </ListItemIcon>
                  <ListItemText primary="Verify Account" />
                </ListItemButton>
              </ListItem>
              <Divider />
              <ListItem>
                <ListItemButton>
                  <ListItemIcon>
                    <Password />
                  </ListItemIcon>
                  <ListItemText primary="Change Password" />
                </ListItemButton>
              </ListItem>
              <Divider />
              <ListItem secondaryAction={
                  <Typography>English</Typography>
              }>
                <ListItemButton>
                  <ListItemIcon>
                    <Language />
                  </ListItemIcon>
                  <ListItemText primary="Language" />
                </ListItemButton>
              </ListItem>
              <Divider />
              <ListItem>
                <ListItemButton>
                <ListItemIcon>
                    <Help />
                  </ListItemIcon>
                  <ListItemText primary="Help" />
                </ListItemButton>
              </ListItem>
              <Divider />
              <ListItem>
                <ListItemButton>
                  <ListItemText primary="Invite a Friend" />
                </ListItemButton>
              </ListItem>
            </List>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default UserProfile;
