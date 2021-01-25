import React from 'react'
import {Link} from 'react-router-dom'


const Login=()=>{
    return(
        <div className="myCard animate__animated animate__fadeIn">
        <div className="card authCard">
            <h3>Login</h3>
            

            <label for="fname">Email: </label>
            <input
            type="email"
            placeholder="Email"
            
            />
            

            <label for="fname">Password: </label>
            <input
            type="password"
            placeholder="Password"

            />

            <Link to="/freepackage" className="waves-effect #212121 grey darken-4 btn">Login</Link>            
           
        </div>
      </div>
    )

}


export default Login