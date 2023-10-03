import React from 'react';
import { ThemeProvider, createTheme } from '@mui/material';
import { RouterProvider } from 'react-router-dom';
import './App.css';
// import { lightTheme } from './theme';
import router from "./routes"
import { UserAuthContextProvider } from "./context/UserAuthContext"; 
import { useSelector } from 'react-redux';

const lightTheme = createTheme({
  // light theme configuration
});

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

function App() {

  const darkMode = useSelector((state) => state.theme.darkMode);

  return (
    <div className="App">
      <UserAuthContextProvider>
        <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
          <RouterProvider router={router} />
        </ThemeProvider>
      </UserAuthContextProvider>
    </div>
  );
}

export default App;
