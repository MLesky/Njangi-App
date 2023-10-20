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
  Dialog, 
  TextField,
  Select,
  MenuItem
} from "@mui/material";
import { mtnLogo } from "../assets";
import { useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { logout, updateDisplayName, updateUsername, updatePhotoURL, updatePhoneNumber, updateEmail } from "../features/user";
import { useUserAuth } from "../context/UserAuthContext";
import { toggleDarkMode } from '../features/theme';
import Switch from '@mui/material/Switch';
import { useNavigate } from "react-router-dom";
import { routeNames } from "../utils";
import { useTranslation } from 'react-i18next';
import { Navigate } from "react-router-dom";
import { setLanguage } from '../features/language'; 
import { useTheme } from "@mui/material/styles";
import {
  FacebookShareButton,
  TwitterShareButton,
  FacebookIcon,
  TwitterIcon,
} from "react-share";



const UserProfile = () => {
  const { t, i18n } = useTranslation();
  const theme = useTheme();
  const user = useSelector ((state) => state.user.value );
  const dispatch = useDispatch();
  const darkMode = useSelector((state) => state.theme.darkMode);
  const selectedLanguage = useSelector((state) => state.language.language);
  const [editOpen, setEditOpen] = useState(false);

  // State to hold the edited user information
  const [editedUser, setEditedUser] = useState({
    displayName: user.displayName,
    username: user.username,
    phoneNumber: user.phoneNumber,
    email: user.email,
    photoURL: user.photoURL,
  });

  // State to hold the selected image file
  const [selectedImage, setSelectedImage] = useState(null);

  const handleEditOpen = () => {
    setEditOpen(true);
  };

  const handleEditClose = () => {
    setEditOpen(false);
  };

  const handleEditSave = () => {
    dispatch(updateDisplayName(editedUser.displayName));
    dispatch(updateUsername(editedUser.username));
    dispatch(updatePhoneNumber(editedUser.phoneNumber));
    dispatch(updateEmail(editedUser.email));
    dispatch(updatePhotoURL(editedUser.photoURL));
    setEditOpen(false);
  };

  // Function to handle image upload
  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        setSelectedImage(reader.result);
        setEditedUser({ ...editedUser, photoURL: reader.result });
      };
    }
  };

  const { logOut } = useUserAuth();

  const navigate = useNavigate();

  const changeLanguage = (lng) => {
    console.log("Changing language to:", lng);
    dispatch(setLanguage(lng));
    i18n.changeLanguage(lng);
  };

  
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

  
  const handleShare = () => {
    const shareUrl = 'https://extramilecleaner.com/version4';
    const title = 'Invite a Friend';
    const hashtags = ['yourHashtag1', 'yourHashtag2'];
  
    const facebookShareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}&quote=${encodeURIComponent(title)}`;
    const twitterShareUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(title)}&hashtags=${encodeURIComponent(hashtags.join(','))}`;
    const whatsappShareUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(title + ' ' + shareUrl)}`;
  
    const popup = window.open('', 'Share Dialog', 'width=600,height=400');
    popup.document.write('<h2>Share on Social Media</h2>');
    popup.document.write('<div>');
    popup.document.write(`<a href="${facebookShareUrl}" target="_blank">Share on Facebook</a><br/>`);
    popup.document.write(`<a href="${twitterShareUrl}" target="_blank">Share on Twitter</a><br/>`);
    popup.document.write(`<a href="${whatsappShareUrl}" target="_blank">Share on WhatsApp</a>`);
    popup.document.write('</div>');
  
    popup.onbeforeunload = () => {
      popup.close();
    };
  };
  

  return (
    <Box padding={2}>
      <Grid container spacing={2} rowSpacing={2} direction="row" justifyContent='center'>
        <Grid item xs={12} sm={6} md={4}>
          <Card variant="outlined" sx={{ padding: 2 }}>
            <Stack direction="column" alignItems="center" spacing={2}>
              <label htmlFor="image-upload" style={{ cursor: "pointer" }}>
                <Avatar
                  alt="photo"
                  src={selectedImage || editedUser.photoURL}
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
                <input
                  type="file"
                  accept="image/*"
                  id="image-upload"
                  style={{ display: "none" }}
                  onChange={handleImageUpload}
                />
              </label>
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
                <Button variant="outlined" onClick={handleLogout}>{t('Log Out')}</Button>
                <Button variant="contained" onClick={handleEditOpen}>{t('Edit Info')}</Button>
              </Stack>
            </Stack>
            <Dialog open={editOpen} onClose={handleEditClose}>
              <Box padding={2}>
                <Typography variant="h5" fontWeight="bold">
                  {t("Edit User Information")}
                </Typography>
                <TextField
                  label={t("Display Name")}
                  value={editedUser.displayName}
                  onChange={(e) =>
                    setEditedUser({ ...editedUser, displayName: e.target.value })
                  }
                  fullWidth
                  margin="normal"
                  sx={{
                    '& input': {
                      color: theme.palette.mode === 'dark' ? 'black' : 'white',
                    }
                  }}
                />
                <TextField
                  label={t("Username")}
                  value={editedUser.username}
                  onChange={(e) =>
                    setEditedUser({ ...editedUser, username: e.target.value })
                  }
                  fullWidth
                  margin="normal"
                  sx={{
                    '& input': {
                      color: theme.palette.mode === 'dark' ? 'black' : 'white',
                    }
                  }}
                />
                <TextField
                  label={t("Phone Number")}
                  value={editedUser.phoneNumber}
                  onChange={(e) =>
                    setEditedUser({ ...editedUser, phoneNumber: e.target.value })
                  }
                  fullWidth
                  margin="normal"
                  sx={{
                    '& input': {
                      color: theme.palette.mode === 'dark' ? 'black' : 'white',
                    }
                  }}
                />
                <TextField
                  label={t("Email")}
                  value={editedUser.email}
                  onChange={(e) =>
                    setEditedUser({ ...editedUser, email: e.target.value })
                  }
                  fullWidth
                  margin="normal"
                  sx={{
                    '& input': { color: 'white' } 
                  }}
                />
                <Button variant="outlined" onClick={handleEditClose}>
                  {t("Cancel")}
                </Button>
                <Button variant="contained" onClick={handleEditSave}>
                  {t("Save")}
                </Button>
              </Box>
            </Dialog>
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
                <ListItemText primary= {t("Appearance")} />
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
                  <Typography>{t('Main Momo Account')}</Typography>
                </Stack>
              }>
                <ListItemButton>
                  <ListItemIcon>
                    <Wallet />
                  </ListItemIcon>
                  <ListItemText primary={t("Default Account" )}/>
                </ListItemButton>
              </ListItem>
              <Divider />
              <ListItem>
                <ListItemButton>
                  <ListItemIcon>
                    <Verified />
                  </ListItemIcon>
                  <ListItemText primary={t("Verify Account" )}/>
                </ListItemButton>
              </ListItem>
              <Divider />
              <ListItem>
                <ListItemButton>
                  <ListItemIcon>
                    <Password />
                  </ListItemIcon>
                  <ListItemText primary={t("Change Password")} />
                </ListItemButton>
              </ListItem>
              <Divider />
              <ListItem>
                <ListItemButton>
                  <ListItemIcon>
                    <Language />
                  </ListItemIcon>
                  <ListItemText primary={t('Language')} />
                  <Select
                    value={selectedLanguage} 
                    onChange={(event) => changeLanguage(event.target.value)}
                  >
                    <MenuItem value="en">English</MenuItem>
                    <MenuItem value="fr">French</MenuItem>
                  </Select>
                </ListItemButton>
              </ListItem>
              <Divider />
              <ListItem>
                <ListItemButton>
                <ListItemIcon>
                    <Help />
                  </ListItemIcon>
                  <ListItemText primary= {t("Help")} />
                </ListItemButton>
              </ListItem>
              <Divider />
              <ListItem>
                <ListItemButton onClick={handleShare}>
                  <ListItemText primary={t("Invite a Friend")} />
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
