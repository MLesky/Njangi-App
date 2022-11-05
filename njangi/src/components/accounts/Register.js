import React, { useState, useEffect } from "react";
import { Link, useNavigate } from 'react-router-dom'

import Logo from '../Logo'
import { useAuth } from "../../contexts/AuthContext";

export default function Register() {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")

    const navigate = useNavigate();
    const { currentUser, register } = useAuth();
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if (currentUser) {
          navigate("/");
        }
    }, [currentUser, navigate]);

    async function handleFormSubmit(e) {
        e.preventDefault();
    
        if (password !== confirmPassword) {
            return alert("Passwords do not match");
        }
      
        try {
            setLoading(true);
            await register(email, password);
            navigate("/profile");
          } catch (e) {
            alert("Failed to register");
        }
      
        setLoading(false);
    }

  return (
    <div className="login-page">
            <div className="login">
                <Logo />
                <form onSubmit={handleFormSubmit}>
                    <input 
                        id="email-address"
                        name="email"
                        type="email"
                        autoComplete="email"
                        required
                        placeholder='Enter email'
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <input 
                        id="password"
                        name="password"
                        type="password"
                        autoComplete="current-password"
                        required
                        placeholder='Create password'
                        onChange={e => setPassword(e.target.value)}
                    />
                    <input 
                        id="confirmPassword"
                        name="confirmPassword"
                        type="password"
                        autoComplete="current-password"
                        required
                        placeholder='Confirm Password'
                        onChange={e => setConfirmPassword(e.target.value)}
                    />
                    <button 
                        type="submit" 
                        className="btn color-white"
                        disabled={loading}
                    >CREATE</button>
                </form>
                <hr color='#ddd'/>
                <Link to="/login" className="create-acc">
                    <p>Already have an account</p>
                    <button className="btn">LOGIN</button>
                </Link>
            </div>
        </div>
  )
}