import { ThemeProvider } from '@emotion/react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import NavBar from './layouts/navBar';
import { lightTheme } from './theme/theme';
import { ChatsPage, GroupsPage } from './app/chat/index';
import { HistoryPage, AccountsPage, SchedulePage } from './app/transact/index'
import { LoginPage, SignUpPage } from './app/authentication';
import { HomePage, ErrorPage } from './pages/pages'

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

const router = createBrowserRouter([
  {
    path: "/",
    element: < NavBar/>,
    children: [
      {
        path: '',
        element: <HomePage />
      },

      {
        path: 'groups',
        element: <GroupsPage />
      },

      {
        path: 'chats',
        element: <ChatsPage />
      },

      {
        path: 'history',
        element: <HistoryPage />
      },

      {
        path: 'accounts',
        element: <AccountsPage />
      },

      {
        path: 'schedules',
        element: <SchedulePage />
      }
    ]
  },
  
  {
    path: '/login',
    element: <LoginPage></LoginPage>
  },
  {
    path: '/signup',
    element: <SignUpPage></SignUpPage>
  },
  {
    path: '/*',
    element: <ErrorPage></ErrorPage>
  }
])