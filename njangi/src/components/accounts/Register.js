import React, { useState, useEffect } from "react";
import { Link, useNavigate } from 'react-router-dom'
import { FormBox, FormTextField, Logo, FormButton } from "../materials";
import { Container, Typography } from "@mui/material";

import { useAuth } from "../../contexts/AuthContext";

export default function Register() {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")

    const navigate = useNavigate();
    const { currentUser, register, setError } = useAuth();
    const [loading, setLoading] = useState(false);

    // useEffect(() => {
    //     if (currentUser) {
    //       navigate("/");
    //     }
    // }, [currentUser, navigate]);

    async function handleFormSubmit(e) {
        e.preventDefault();
    
        if (password !== confirmPassword) {
            return setError("Passwords do not match");
        }
      
        try {
            setLoading(true);
            await register(email, password);
            navigate("/profile");
          } catch (e) {
            setError("Failed to register");
        }
      
        setLoading(false);
    }

  return (
        <Container sx={{
            display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh'
        }}>
             <FormBox>
                <Logo choice='secondary' halignCenter/>

                <Typography variant='h4' mb={3} textAlign='center' color='primary.main'>Register into Njangi - Aide</Typography>

                <form onSubmit={handleFormSubmit}>
                    <FormTextField label="Enter Email" type="email" name="email" required onChange={e => setEmail(e.target.value)}/>

                    <FormTextField label="Enter a Password" type="password" name="password" autoComplete='current-password' required onChange={e => setPassword(e.target.value)}/>

                    <FormTextField label="Confirm Password" type="password" name="confirmpassword" autoComplete='current-password' required onChange={e => setConfirmPassword(e.target.value)}/>

                    <FormButton variant="contained" type='submit' fullWidth bgcolor='primary.main'>REGISTER</FormButton>
                </form>

                <Typography color='primary.main' variant='button' textAlign='center' display='block' mt={4}>ALREADY HAVE AN ACCOUNT</Typography>

                <Link to={'/login'}>
                    <FormButton variant='text' display><Typography fontWeight='bold'><u>LOGIN</u></Typography></FormButton>
                </Link>
             </FormBox>
        </Container>
     );
    }