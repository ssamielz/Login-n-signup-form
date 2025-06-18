import React from "react";

function Register(){
    return <>
         <div className="login-form">
            <h1>Register Page</h1>
            <form action="">
            <input type="text" placeholder="First Name" /> <br /> <br />

            <input type="text" placeholder="Last Name" /> <br /> <br />

            <input type="email" placeholder="Email" /> <br /> <br />
            
            <input type="password" placeholder="Password" /> <br /> <br />

            <input type="password" placeholder="Confirm password" /> <br /> <br />

            < select >
                Select your key role
                <option value="user">User</option>
                <option value="admin">Admin</option> 
                
                </select>

            <p>Already have an account? Log in</p>
            

            <button>Register</button>
        </form>
        </div>
    </>
}

export default Register;