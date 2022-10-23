import React, {useRef} from 'react';
import '@styles/Login.scss'

import logo from '@logos/logo_yard_sale.svg';

const Login = () => {

    const form = useRef(null);

    const handleSubmit = (event) => {
        event.preventDefault();
        const formData = new FormData(form.current);
        const data = {
            username: formData.get('email'),
            password: formData.get('password')
        }
    }

    return (
        <div className="Login">
            <div className="Login-container">
                <img src={logo} alt="logo" className="Login-logo" />

                <form action="/" className="form" ref={form}>
                    <label htmlFor="email" className="label">Email addres</label>
                    <input type="text" name="email" placeholder="platzi@example.com" className="input input-password" />
                    <label htmlFor="password" className="label">Password</label>
                    <input type="password" name="password" placeholder="********" className="input input-password" />
                    <button className="primary-button login-button" onClick={handleSubmit}>
                        Login
                    </button>
                    
                    <a href="/">Forgot my password</a>
                </form>
                    
                    <button className="secondary-button signup-button">
                        Sign Up
                    </button>
            </div>
        </div>
    );
}

export default Login;