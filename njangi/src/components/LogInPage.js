import { useState } from 'react';
import Logo from './Logo';

const LoginPage = () => {
    const [userData, setUserData] = useState(
        {
            "accNo": '',
            'email': '',
            'password': '',
        }
    )   

const handleChange = event => {
    setUserData({
        ...userData,
        [event.target.name]: event.target.value
    });
}

    return ( 
        <div className="login-page">
            <div className="login">
                <Logo />
                <form>
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