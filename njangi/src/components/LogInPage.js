import { useState } from 'react';
import Logo from './Logo';
import Notification from './Notification';
import { useEffect } from 'react';

const LoginPage = () => {
    const [userData, setUserData] = useState(null);
    const [accNo, setAccNo] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState({});

const validate = (accNo, password, userData) => {
    const errors = {};

    if(!accNo) errors.accNo = "Account number cannot be blank";
    if(!password) errors.password = "Password cannot be blank";
    return errors;
}

const handleSubmit = event => {
    event.preventDefault();
    const errors = validate(accNo, password);
    setErrors(errors);
    if(Object.keys(errors).length == 0){
        setAccNo('');
        setPassword('');
    }
}

useEffect(() => {
    fetch('http://localhost:8000/users').then(res => {
        return res.json();
    }).then(data => {
        setUserData(data)
        console.log(userData)
    })
}, []);

    return ( 
        <div className="login-page">
            <Notification notif={Object.values(errors)}/>
            <div className="login">
                <Logo />
                <form onSubmit={handleSubmit}>
                    <input 
                        type="text" 
                        value={accNo}
                        name="accNo" 
                        placeholder='Enter Account Number' 
                        onChange={(event) => setAccNo(event.target.value)}
                    />

                    <input 
                        type="password" 
                        value={password}
                        name="password" 
                        placeholder='Enter Password' 
                        onChange={(event) => setPassword(event.target.value)}
                    />

                    <p className='email'>
                        <a href="#">Login with Email instead</a>
                    </p>

                    <button type="submit" className="btn color-white ">LOGIN</button>
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
 
export default LoginPage;