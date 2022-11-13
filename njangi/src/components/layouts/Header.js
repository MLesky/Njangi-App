import { AppBar, Stack, Toolbar, Typography, Box } from "@mui/material";
import { Logout } from '@mui/icons-material'
import { useState } from "react";
import { Link } from "react-router-dom";
import { Logo } from "./materials";


import { useAuth } from "../../contexts/AuthContext";
import LogOut from "../accounts/LogOut";
// import nodemon from "nodemon";
// import ThemeToggler from "./ThemeToggler";

export default function Header() {
  const [modal, setModal] = useState(false);

  const { currentUser } = useAuth();

  return (
    <AppBar sx={{height: '60px', position: 'relative'}}>
      <Toolbar sx={{justifyContent: 'space-between'}}>
        <Link to='/'>
          <Logo size='100em'/>
        </Link>
        {currentUser && (
        <Stack direction='row' spacing={5} alignItems='center'>
          <Box sx={{
            display: {
              mobile: 'none',
              tablet: 'inline'
            }
          }}>
            <button onClick={() => setModal(true)}>
            <Logout color='white' sx={{fontSize: 40, mr: 3,}}/>
            </button>
          </Box>

          <Link to='/profile'>
            <Stack direction='row' spacing={1}>
            <Stack direction='column' spacing={-1}>
              <Typography variant='h6' fontWeight='bold' textAlign='right'>{currentUser.name}</Typography>
              <Typography variant='' textAlign='right'>{currentUser.email}</Typography>
            </Stack>
            <img src={currentUser.photoURL} style='width: 50px;'/>
            </Stack>
          </Link>
          
        </Stack>
      )}
      </Toolbar>
      {modal && <LogOut modal={modal} setModal={setModal} />}
    </AppBar>
  )
}