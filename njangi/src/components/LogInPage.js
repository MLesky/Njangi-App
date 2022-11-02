import { useState } from 'react';
import Logo from './Logo';
import Notification from './Notification';

const LogInPage = ({notif, style, validate, switchHandle}) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
  
    const handleSubmit = event => {
        event.preventDefault();
        validate(email, password);
    }

    const gotoCreate = event => {
        event.preventDefault();
        switchHandle();
    }
        return ( 
        <div className="login-page">
            <Notification notif={notif} style={style}/>
            <div className="login">
                <Logo />
                <form onSubmit={handleSubmit}>
                    <input 
                        required
                        type="text" 
                        value={email}
                        name="email" 
                        placeholder='Enter Email' 
                        onChange={(event) => setEmail(event.target.value)}
                    />
                    <input 
                        required
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
                    <a href="#" className="btn" onClick={gotoCreate}>CREATE ACCOUNT</a>
                </div>
            </div>
        </div>
     );
}
 
export default LogInPage;