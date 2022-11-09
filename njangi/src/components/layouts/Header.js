import { AppBar, Stack, Toolbar, Typography, Box } from "@mui/material";
import { AccountCircle, Logout } from '@mui/icons-material'
import { useState } from "react";
import { Link } from "react-router-dom";
import { Logo } from "../materials";


import { useAuth } from "../../contexts/AuthContext";
import LogOut from "../accounts/LogOut";
// import nodemon from "nodemon";
// import ThemeToggler from "./ThemeToggler";

export default function Header() {
  const [modal, setModal] = useState(false);

  const { currentUser } = useAuth();

  return (
    <AppBar sx={{height: '60px'}}>
      <Toolbar sx={{justifyContent: 'space-between'}}>
        <Link to='/'>
          <Logo />
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

//   return (
//     <>
//       <nav className="px- px-2 sm:px-4 py-2.5 bg-gray-50 border-gray-200 dark:bg-gray-800 dark:border-gray-700 text-gray-900 text-sm rounded border dark:text-white">
//         <div className="container mx-auto flex flex-wrap items-center justify-between">
//           <Link to="/" className="flex">
//             <Logo />
//             {/* <span className="self-center text-lg font-semibold whitespace-nowrap text-gray-900 dark:text-white">
//               NG-Aider
//             </span> */}
//           </Link>
//           <div className="flex md:order-2">
//             {/* <ThemeToggler /> */}

//             {currentUser && (
//               <>
//                 <button
//                   className="text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none rounded-lg text-sm p-2.5"
//                   onClick={() => setModal(true)}
//                 >
//                   <LogoutIcon className="h-8 w-8" aria-hidden="true" />
//                 </button>

//                 <Link
//                   to="/profile"
//                   className="text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none rounded-full text-sm p-2.5"
//                 >
//                   <img
//                     className="h-8 w-8 rounded-full"
//                     src={currentUser.photoURL}
//                     alt=""
//                   />
//                 </Link>
//               </>
//             )}
//           </div>
//         </div>
//       </nav>
//       {/* {modal && <Logout />} */}
//       {modal && <Logout modal={modal} setModal={setModal} />}
//     </>
//   );
// }