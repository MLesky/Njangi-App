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
        let i = 0;
        for (; i < usersData.length; i++) {
            if(email === usersData[i].email && password === usersData[i].password){
                setIsFound(true);
                errors.err = "Welcome " + usersData[i].name;
                setStyle('success');
                break;
            }
            else if (email === usersData[i].email && password !== usersData[i].password){
                errors.err = "Wrong password";
                break;
            }
            
            else errors.err = "Account not found";
        }

        setErrors(errors);
        setTimeout(() => {
            setErrors({});
        }, 4000);
    }

    const validateForCreateAccount = (userData, confirmPassword) => {
        const errors = {};
        setStyle('danger');

        if (userData.password !== confirmPassword)
        errors.err = "Confirmation password doesn't match"

        if(userData.password.length <= 3 || userData.password.length > 15)
            errors.err = "Password should be between 3 to 15 characters in length"

        usersData.forEach(data => {
            if(userData.email === data.email && userData.name && userData.password && userData.password === confirmPassword){
                errors.err = "User with email already exist"
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