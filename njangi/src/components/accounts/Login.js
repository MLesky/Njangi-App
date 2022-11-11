import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Container, Typography } from '@mui/material';
import { FormTextField, FormBox, FormButton, Logo } from "../layouts/materials";

import { useAuth } from "../../contexts/AuthContext";
import auth from "../../config/firebase";
import { ClassNames } from "@emotion/react";


export default function Login() {
    
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const navigate = useNavigate()
    const [loading, setLoading] = useState("")
    const { currentUser, login, setError } = useAuth();

    // useEffect(() => {
    //     if (currentUser) {
    //       navigate("/");
    //     }
    // }, [currentUser, navigate]);

    async function handleFormSubmit(e) {
        e.preventDefault();

        try{
            setLoading(true)
            await login(email, password)
            navigate('/profile')
        }catch(e){
            setError("Failed to login")
        }

        setLoading(false)
    }

    return ( 
        <Container sx={{
            display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh'
        }}>
             <FormBox>
                <Logo choice='secondary' halignCenter/>

                <Typography variant='h4' mb={3} textAlign='center' color='primary.main'>Login into Njangi - Aide</Typography>

                <form onSubmit={handleFormSubmit}>
                    <FormTextField label="Enter Email" type="email" name="email" required onChange={e => setEmail(e.target.value)}/>

                    <FormTextField label="Enter Password" type="password" name="password" required onChange={e => setPassword(e.target.value)}/>

                    <FormButton variant="contained" type='submit' fullWidth bgcolor='primary.main'>SIGN IN</FormButton>
                </form>

                <Typography color='primary.main' variant='button' textAlign='center' display='block' mt={4}>DON'T HAVE AN ACCOUNT</Typography>

                <Link to={'/register'}>
                    <FormButton variant='text' display><Typography fontWeight='bold'><u>REGISTER HERE</u></Typography></FormButton>
                </Link>
             </FormBox>
        </Container>
     );
}