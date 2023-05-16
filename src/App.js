import { ThemeProvider } from '@emotion/react';
import { RouterProvider } from 'react-router-dom';
import './App.css';
import { lightTheme } from './theme/theme';
import { router } from "./routes"

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={lightTheme}>
        <RouterProvider router={router} />
      </ThemeProvider>
      </div>
  );
}

export default App;