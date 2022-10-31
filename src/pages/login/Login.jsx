import React from 'react';
import './login.css';

export default function Login() {
    return (
        <div className="login">
            <span className="login_Title">
                Login
            </span>
            <form action="" className="login_Form">
                <i className="login_Form__Icon fa-brands fa-square-facebook"></i>
                <i className="login_Form__Icon fa-regular fa-envelope"></i>
            </form>
        </div>
    )
}
