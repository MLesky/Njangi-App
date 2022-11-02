import { useState } from 'react';
import Logo from './Logo';
import Notification from './Notification';

const CreateAccount = ({notif, style, validate, switchHandle}) => {
    const [confirmPassword, setConfirmPassword] = useState('');
    const [userData, setUserData] = useState({
        name: '',
        email: '',
        password: '',
    });

    const handleChange = event => {
        setUserData({...userData, [event.target.name]: event.target.value});
    }

    const handleSubmit = event => {
        event.preventDefault();
        validate(userData, confirmPassword);
    }

    const gotoLogin = event => {
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
                        name="name"
                        value={userData.name}
                        placeholder='Enter name'
                        onChange={handleChange}
                    />
                    <input 
                        required
                        type="email"
                        name="email"
                        value={userData.email}
                        placeholder='Enter email'
                        onChange={handleChange}
                    />
                    <input 
                        required
                        type="password"
                        name="password"
                        value={userData.password}
                        placeholder='Create password'
                        onChange={handleChange}
                    />
                    <input 
                        required
                        type="Password"
                        value={confirmPassword}
                        placeholder='Confirm Password'
                        onChange={(event) => setConfirmPassword(event.target.value)}
                    />
                    <button type="submit" className="btn color-white">CREATE</button>
                </form>
                <hr color='#ddd'/>
                <div className="create-acc">
                    <p>Already have an account</p>
                    <button className="btn" onClick={gotoLogin}>LOGIN</button>
                </div>
            </div>
        </div>
     );
}
 
export default CreateAccount;