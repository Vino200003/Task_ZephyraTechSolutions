import React from "react";
import '../styles/LoginForm.css'

const LoginForm = () => {
    return(
        <div className="loginForm">
            <div className="formContent">
                <p className="startForFree">Start For Free</p>
                <h1 className="createAcc">Create New Account</h1>
                <p className="loginLink">Already have a Member?<a href="login">Log in</a></p>
                <div className="mainForm">
                    <div className="name">
                        <input type="text" placeholder="First name" value="Michel" readOnly></input>
                        <input type="text" placeholder="Last Name" value="Masiak" readOnly></input>
                    </div>
                    <div className="mailPw">
                        <input type="email" placeholder="Enter your mail address" value="michel.masiak@anywhere.co" readOnly></input>
                        <input type="password" placeholder="Enter your Password" value="admin123" readOnly></input>
                    </div>
                    <div className="buttons">
                        <button className="changeMd">Change Method</button>
                        <button className="createAcc">Create Account</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LoginForm;