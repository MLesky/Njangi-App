import { useState } from 'react';
import Logo from './Logo';
import Homepage from './HomePage';
import Notification from './Notification';
import useFetch from './useFetch';

const LoginPage = () => {
    const {data: userData} = useFetch('http://localhost:8000/users');
    const [accNo, setAccNo] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState({});
    const [style, setStyle] = useState('');
    const [isFound, setIsFound] = useState(false);
    
    const validate = (accNo, password) => {
        const errors = {};
        setIsFound(false);
        setStyle('danger');

        userData.forEach(user => {
            if(accNo === user.accNo || accNo === user.zip_code + user.accNo){
                if(password === user.password){
                    setIsFound(true);
                    errors.accNo = "Welcome " + user.name;
                    setStyle('success');
                }
                else {
                    errors.password = "Wrong password";
                }
            }
            else errors.accNo = "Account not found"
        });

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
 
export default LoginPage;