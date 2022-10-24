import logo from './assets/images/logo.svg'
import { useState } from 'react';

const LoginPage = () => {
    const [accountnumber, setAccountNumber] = useState(null);
    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);

    const changeAccountNumber = (event) => {
        setAccountNumber(event.target.value)
        alert(event.target.value)
    }
    
    return ( 
        <div className="login-page">
            <div className="login">
                <img src={logo} className="App-logo" alt="logo"/>
                <h1>NJANGUI-APP</h1>
                <form>
                    <input type="text" value={accountnumber} name="accountnumber" placeholder='Enter Account Number'/>
                    <input type="password" value={password}name="password" placeholder='Enter Password'/>
                    <button type="submit" className="btn">Login</button>
                </form>
                <hr color='#eee'/>
                <p>OR</p>
                <a href="#" className="btn">Create Account</a>
            </div>
        </div>
     );
}
 
export default LoginPage;