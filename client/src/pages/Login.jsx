import React from "react";
import { useState, useEffect } from "react";

function Login(){
    return <>
        
        <div className="login-form">
            <h1>Login Page</h1>
            <form action="">
            <input type="email" placeholder="Email" /> <br /> <br />
            
            <input type="password" placeholder="Password" /> <br /> <br />

            <p>Don't have an account? Create account</p>
            <p>Forgot password? </p>

            <button>Login</button>
        </form>
        </div>
    </>
}

export default Login;