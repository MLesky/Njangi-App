import React from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


// import Authenticate from "./components/Authenticate";
import Register from "./components/accounts/Register";
import Login from "./components/accounts/Login";
import { AuthProvider } from "./contexts/AuthContext";
import HomePage from "./components/HomePage";
import ErrorMessage from "./components/layouts/ErrorMessage";
import Profile from "./components/accounts/Profile";
import Header from "./components/layouts/Header";
import WithPrivateRoute from "./utils/WithPrivateRoute";
import lightTheme from "./components/theme";
import { ThemeProvider } from "@mui/material";

export default function App() {
  // return <Authenticate />
  return (
    <AuthProvider>
      <ThemeProvider theme={lightTheme}>
        <Router>
          <Header />
          <ErrorMessage />
          <Routes>
            <Route exact path="/register" element={<Register />} />
            <Route 
              exact 
              path="/" 
              element={
                <WithPrivateRoute>
                  <HomePage />
                </WithPrivateRoute>
              // <HomePage />
              } />
            <Route 
              exact 
              path="/profile" 
              element={
                // <WithPrivateRoute>
                //   <Profile />
                // </WithPrivateRoute>
                <Profile />
              } />
            <Route exact path="/login" element={<Login />} />
          </Routes>
        </Router>
      </ThemeProvider>
    </AuthProvider>
    
  )
}