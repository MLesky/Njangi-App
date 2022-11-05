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

export default function App() {
  // return <Authenticate />
  return (
    <AuthProvider>
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
            } />
          <Route 
            exact 
            path="/profile" 
            element={
              <WithPrivateRoute>
                <Profile />
              </WithPrivateRoute>
            } />
          <Route exact path="/login" element={<Login />} />
        </Routes>
      </Router>
    </AuthProvider>
  )
}