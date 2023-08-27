import React from 'react';
import { ThemeProvider } from '@emotion/react';
import { RouterProvider } from 'react-router-dom';
import './App.css';
import { lightTheme } from './theme';
import router from "./routes"
import { UserAuthContextProvider } from "./context/UserAuthContext"; 
// import { Provider } from 'react-redux'; 
// import store from './app/store'; 

function App() {
  return (
    <div className="App">
      <UserAuthContextProvider>
        <ThemeProvider theme={lightTheme}>
          <RouterProvider router={router} />
        </ThemeProvider>
      </UserAuthContextProvider>
    </div>
  );
}

export default App;
