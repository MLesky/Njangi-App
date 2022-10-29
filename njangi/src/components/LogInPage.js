import { useState } from 'react';
import Logo from './Logo';

const LoginPage = () => {
    const [userData, setUserData] = useState(
        {
            "accNo": '',
            'email': '',
            'password': '',
        }
    );  
    const [errors, setErrors] = useState({})

const handleChange = event => {
    setUserData({
        ...userData,
        [event.target.name]: event.target.value
    });
}

const validate = userData => {
    const {accNo, password} = userData;
    const errors = {};

    if(!accNo) errors.email = "Account number cannot be blanck";
    if(!password) errors.password = "Password cannot be blanck";
    return errors;
}

const handleSubmit = event => {
    event.preventDefault();
    const errors = validate(userData);
    setErrors(errors);
    if(Object.keys(errors).length == 0){

        setUserData({
            accNo: '',
            password: '',
        })
    }
}

    return ( 
        <div className="login-page">
            <div className="notif">
                {Object.values(errors).map(error => (
                <h4 key={errors}>{error}</h4>))}
            </div>
            
            <div className="login">
                <Logo />
                <form onSubmit={handleSubmit}>
                    <input 
                        type="text" 
                        value={userData.accNo} 
                        name="accNo" 
                        placeholder='Enter Account Number' 
                        onChange={handleChange}
                    />

                    <input 
                        type="password" 
                        value={userData.password} 
                        name="password" 
                        placeholder='Enter Password' 
                        onChange={handleChange}
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