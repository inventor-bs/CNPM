import React from 'react';
import { Link } from 'react-router-dom';
import './login.css';
import { useGoogleLogin } from '@react-oauth/google';
import axios from 'axios';


export default function Login() {
    const login = useGoogleLogin({
        onSuccess: async response => {
            try {
                const data = await axios.get("https://www.googleapis.com/oauth2/v3/userinfo",
                    {
                        headers: {
                            "Authorization": `Bearer ${response.access_token}`
                        }
                    });
                console.log(data);
            } catch (e) {
                console.log(e);
            }
        }
    });
    return (
        <div className="login">
            <div className="login-Wrapper">
                <span className="login_Title">
                    Login
                </span>
                <form action="submit" className="login_Form">
                    <label htmlFor="">Email</label>
                    <input type="email" placeholder="Enter Email" />
                    <label htmlFor="">Password</label>
                    <input type="password" placeholder="Enter Password" />
                    <button className="login_Form__Button" type="submit">Login</button>
                </form>
                <div className="other-method">
                    <label htmlFor="">Or sign in with:</label>
                    <div className="iconGroup">
                        <i className=" fa-brands fa-square-facebook"></i>

                        <i className=" fa-brands fa-google" onClick={login}></i>
                    </div>
                </div>
                <Link to="/register"> <button className="login_register__Button">Register</button></Link>

            </div>

        </div>
    )
}
