import { useState } from 'react';
import Logo from './Logo';

const LoginPage = () => {
    const [accountnumber, setAccountNumber] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return ( 
        <div className="login-page">
            <div className="login">
                <Logo />
                <form>
                    <input type="text" value={accountnumber} name="accountnumber" placeholder='Enter Account Number'/>
                    <input type="password" value={password}name="password" placeholder='Enter Password'/>
                    <p className='email'><a href="#">Login with Email instead</a></p>
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