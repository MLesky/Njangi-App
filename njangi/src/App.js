import React from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


// import Authenticate from "./components/Authenticate";
import Register from "./components/accounts/Register";
import Login from "./components/accounts/Login";
import { AuthProvider } from "./contexts/AuthContext";
import HomePage from "./components/HomePage";

export default function App() {
  // return <Authenticate />
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route exact path="/profile" element={<HomePage />} />
          <Route exact path="/register" element={<Register />} />
          <Route exact path="/login" element={<Login />} />
        </Routes>
      </Router>
    </AuthProvider>
  )
}