import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import Logo from "../Logo";
import { useAuth } from "../../contexts/AuthContext";
import auth from "../../config/firebase";

export default function Login() {
    
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const navigate = useNavigate()
    const [loading, setLoading] = useState("")
    const { currentUser, login } = useAuth();

    useEffect(() => {
        if (currentUser) {
          navigate("/");
        }
    }, [currentUser, navigate]);

    async function handleFormSubmit(e) {
        e.preventDefault();

        try{
            setLoading(true)
            await login(email, password)
            navigate('/profile')
        }catch(e){
            alert("Failed to login")
        }

        setLoading(false)
    }

    return ( 
        <div className="login-page">
            <div className="login">
                <Logo />
                <form onSubmit={handleFormSubmit}>
                    <input 
                        required
                        type="text" 
                        name="email" 
                        placeholder='Enter Email' 
                        onChange={e => setEmail(e.target.value)}
                    />
                    <input 
                        required
                        type="password" 
                        name="password" 
                        placeholder='Enter Password' 
                        onChange={e => setPassword(e.target.value)}
                    />

                    <button type="submit" className="btn color-white">LOGIN</button>
                </form>
                <hr color='#ddd'/>
                <Link to={'/register'} className="create-acc">
                    <p>Don't have an account</p>
                    <a href="#" className="btn">CREATE ACCOUNT</a>
                </Link>
            </div>
        </div>
     );
}