import { useState } from 'react';
import Logo from './Logo';
import Homepage from './HomePage';
import Notification from './Notification';
import useFetch from './useFetch';

const LogInPage = ({notif, style, handler}) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
  
    const handleSubmit = event => {
        event.preventDefault();
        const errors = handler(email, password);
    }
        return ( 
        <div className="login-page">
            <Notification notif={notif} style={style}/>
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
 
export default LogInPage;