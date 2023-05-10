import { ThemeProvider } from '@emotion/react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import NavBar from './layouts/navBar';
import { lightTheme } from './theme/theme';
import { ChatsPage, GroupsPage } from './app/chat/index';
import { HistoryPage, AccountsPage, SchedulePage } from './app/transact/index'
import { LoginPage } from './app/authentication';
import { HomePage } from './pages/pages'

function App() {
  return (
    <div className="App">
    <ThemeProvider theme={lightTheme}>
      <BrowserRouter>
        {/* <NavBar /> */}
        <Routes>
            <Route path="login" element={<LoginPage />}></Route>
            <Route path="/" element={<HomePage />}></Route>
            <Route path="groups" element={<GroupsPage />}></Route>
            <Route path="chats" element={<ChatsPage />}></Route>
            <Route path="history" element={<HistoryPage />}></Route>
            <Route path="accounts" element={<AccountsPage />}></Route>
            <Route path="schedules" element={<SchedulePage />}></Route>
        </Routes>
      </BrowserRouter>
      </ThemeProvider>
      </div>
  );
}

export default App;