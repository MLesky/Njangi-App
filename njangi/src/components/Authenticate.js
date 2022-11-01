import { useState } from 'react';
import Logo from './Logo';
import Homepage from './HomePage';
import LogInPage from './LogInPage';
import Notification from './Notification';
import useFetch from './useFetch';

const Authenticate = () => {
    const {data: userData} = useFetch('http://localhost:8000/users');
    const [style, setStyle] = useState('');
    const [isFound, setIsFound] = useState(false);
    const [errors, setErrors] = useState({});

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

        setErrors(errors);
        return errors;
    }


    if(isFound){
        return (
            <Homepage data={userData} notif={Object.values(errors)} style={style}/>
        );
    }

    else {
        return ( 
            <LogInPage data={userData} notif={Object.values(errors)} style={style} handler={validate}/>
     );
    }
}
 
export default Authenticate;