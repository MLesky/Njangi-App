import { ThemeProvider } from '@emotion/react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import NavBar from './layouts/navBar';
import { lightTheme } from './theme/theme';
import { ChatsPage, GroupsPage } from './app/chat/index';
import { HistoryPage, AccountsPage, SchedulePage } from './app/transact/index'
import { FillInInfoForm, LoginPage, SignUpPage, SignUpWithEmailForm } from './app/authentication';
import { HomePage, ErrorPage } from './pages/pages'
import VerifyPinForm from './app/authentication/pages/signupForms/verifyEmail';

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
        path: 'home',
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
    path: '/signin',
    element: <LoginPage />
  },
  {
    path: '/signup',
    element: <SignUpPage />,
    children: [
      {
        path: '',
        element: <SignUpWithEmailForm />
      },

       {
        path: 'verify-email',
        element: <VerifyPinForm />
       },

       {
        path: 'fill-info',
        element: <FillInInfoForm />
       }

    ]
  },
  {
    path: '/*',
    element: <ErrorPage />
  }
])