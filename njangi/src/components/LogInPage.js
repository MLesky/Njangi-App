import { useState } from 'react';
import Logo from './Logo';
import Homepage from './HomePage';
import Notification from './Notification';
import useFetch from './useFetch';

const LogInPage = () => {
    const {data: userData} = useFetch('http://localhost:8000/users');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState({});
    const [style, setStyle] = useState('');
    const [isFound, setIsFound] = useState(false);
    
    const validate = (email, password) => {
        const errors = {};
        setIsFound(false);
        setStyle('danger');

        userData.forEach(user => {
            if(email === user.email){
                if(password === user.password){
                    setIsFound(true);
                    errors.email = "Welcome " + user.name;
                    setStyle('success');
                }
                else {
                    errors.password = "Wrong password";
                }
            }
            else errors.email = "Account not found"
        });

        if(!email) errors.email= "Email cannot be blank";
        if(!password) errors.password = "Password cannot be blank";

        return errors;
    }

    const handleSubmit = event => {
        event.preventDefault();
        const errors = validate(email, password);
        setErrors(errors);
        if(Object.keys(errors).length == 0){
            setEmail('');
            setPassword('');
        }
    }

    if(isFound){
        return (
            <>
                <Notification notif={Object.values(errors)} style={style}/>
                <Homepage data={userData} />
            </>
        );
    }

    else {
        return ( 
        <div className="login-page">
            <Notification notif={Object.values(errors)} style={style}/>
            <div className="login">
                <Logo />
                <form onSubmit={handleSubmit}>
                    <input 
                        type="text" 
                        value={email}
                        name="email" 
                        placeholder='Enter Email' 
                        onChange={(event) => setEmail(event.target.value)}
                    />
                    <input 
                        type="password" 
                        value={password}
                        name="password" 
                        placeholder='Enter Password' 
                        onChange={(event) => setPassword(event.target.value)}
                    />

                    <button type="submit" className="btn color-white">LOGIN</button>
                </form>
                <hr color='#ddd'/>
                <div className="create-acc">
                    <p>Don't have an account</p>
                    <a href="#" className="btn">CREATE ACCOUNT</a>
                </div>
            </div>
        </div>
     );
    }
}
 
export default LogInPage;