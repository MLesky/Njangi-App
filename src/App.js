import React from 'react';
import { ThemeProvider, createTheme } from '@mui/material';
import { RouterProvider } from 'react-router-dom';
import './App.css';
// import { lightTheme } from './theme';
import router from "./routes"
import { UserAuthContextProvider } from "./context/UserAuthContext"; 
import { useSelector } from 'react-redux';
import { I18nextProvider } from 'react-i18next';
import i18n from '../src/i18n'; 
// import NavBar from '../src/layouts/navBar'

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
      <I18nextProvider i18n={i18n}>
        <UserAuthContextProvider>
          <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
            <RouterProvider router={router} />
          </ThemeProvider>
        </UserAuthContextProvider>
      </I18nextProvider>
    </div>
  );
}

export default App;
