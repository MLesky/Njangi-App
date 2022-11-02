import { useState } from 'react';
import CreateAccount from './CreateAccount';
import Homepage from './HomePage';
import LogInPage from './LogInPage';
import useFetch from './useFetch';

const Authenticate = () => {
    const {data: usersData} = useFetch('http://localhost:8000/users');
    const [style, setStyle] = useState('');
    const [isFound, setIsFound] = useState(false);
    const [isOK, setIsOk] = useState(false);
    const [errors, setErrors] = useState({});
    const [isCreateNew, setIsCreateNew] = useState(false);

    const validateForLogin = (email, password) => {
        const errors = {};
        setStyle('danger');

        usersData.forEach(user => {
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

        setErrors(errors);
        setTimeout(() => {
            setErrors({});
        }, 4000);
    }

    const validateForCreateAccount = (userData, confirmPassword) => {
        const errors = {};
        setStyle('danger');

        if (userData.password !== confirmPassword)
        errors.password = "Confirmation password doesn't match"

        if(userData.password.length <= 3 || userData.password.length > 15)
            errors.password = "Password should be between 3 to 15 characters in length"

        usersData.forEach(data => {
            if(userData.email === data.email && userData.name && userData.password && userData.password === confirmPassword){
                errors.email = "User with email already exist"
            }
        });
        setErrors(errors)

        if (Object.values(errors).length == 0){
            setIsOk(true);
            setStyle('success');
            console.log(userData);
            fetch('http://localhost:8000/users', {
                method: 'POST',
                body: JSON.stringify(userData),
                headers: {'Content-Type': 'application/json'}
            });
            errors.email = 'Account created'
            setErrors(errors)
        }

        setTimeout(() => {
            setErrors({});
        }, 4000);
    }

    const switchToCreate = () => {
        setIsCreateNew(true);
    }

    const switchToLogin = () => {
        setIsCreateNew(false);
    }

    if(isFound  || isOK){
        return (
            <Homepage data={usersData} notif={Object.values(errors)} style={style}/>
        );
    }

    else if(isCreateNew){
        return (
            <CreateAccount notif={Object.values(errors)} style={style} validate={validateForCreateAccount} switchHandle={switchToLogin}/>
        )
    }

    else {
        return ( 
            <LogInPage data={usersData} notif={Object.values(errors)} style={style} validate={validateForLogin} switchHandle={switchToCreate}/>
     );
    }
}
 
export default Authenticate;