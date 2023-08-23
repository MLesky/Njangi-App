import { createBrowserRouter } from "react-router-dom"
import { ChatsPage, GroupsPage, ChatScreenForChat, ChatScreenForGroup } from './app/chat/index';
import { HistoryPage, AccountsPage, SchedulePage } from './app/transact/index'
import { FillInInfoForm, LoginPage, SignUpWrapper, ForgotPassword, SignUpWithPhoneNumber, ChangePassword } from './app/authentication';
import { HomePage, ErrorPage, UserProfile } from './pages/pages';
import VerifyPinForm from './app/authentication/pages/signupForms/verificationPin';
import { NavBar } from './layouts';
import { routeNames } from "./utils";

const router = createBrowserRouter([
  {
    path: "/",
    element: < NavBar />,
    children: [
      {
        path: routeNames.home,
        element: <HomePage />
      },

      {
        path: routeNames.groups,
        element: <GroupsPage />,
        children: [
          {
            path: ':ID',
            element: <ChatScreenForGroup />
          }
        ]
      },

      {
        path: routeNames.chats,
        element: <ChatsPage />,
        children: [
          {
            path: ':ID',
            element: <ChatScreenForChat />
          }
        ]
      },

      {
        path: routeNames.history,
        element: <HistoryPage />
      },

      {
        path: routeNames.accounts,
        element: <AccountsPage />
      },

      {
        path: routeNames.schedules,
        element: <SchedulePage />
        },

        {
          path: routeNames.profile,
          elements: <UserProfile />
      }
    ]
  },

  {
    path: routeNames.login,
    element: <LoginPage />
  },
  {
    path: routeNames.forgotPassword,
    element: <ForgotPassword />
  },
  {
    path: routeNames.changePassword,
    element: <ChangePassword />
  },
  {
    path: routeNames.signUp,
    element: <SignUpWrapper />,
    children: [
      {
        path: '',
        element: <SignUpWithPhoneNumber />
      },

      {
        path: routeNames.verifyCode,
        element: <VerifyPinForm />
      },

      {
        path: routeNames.fillInfo,
        element: <FillInInfoForm />
      }

    ]
  },
  {
    path: routeNames.errorPage,
    element: <ErrorPage />
  }
])

export default router;


