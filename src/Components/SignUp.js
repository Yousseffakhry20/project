import React from 'react'
import {Link} from 'react-router-dom'


const SignUp=()=>{
    return (
        <div className="myCard animate__animated animate__fadeIn">
        <div className="card authCard">
            <h3>Sign Up</h3>
            <h5> Create New Account</h5>


            <label for="fname">Full Name: </label>
            <input
            type="text"
            placeholder="Full Name"
            
            />


            <label for="fname">Phone Number: </label>
            <input
            type="text"
            placeholder="Phone Number"

            />

        

            <label for="fname">Email: </label>
            <input
            type="text"
            placeholder="Email"
            
            />

            <label for="fname">Password: </label>
            <input
            type="password"
            placeholder="Password"

            />

            <label for="fname">Confirm Password: </label>
            <input
            type="password"
            placeholder="Confirm Password"

            />

            <Link to="/freepackage" className="waves-effect #212121 grey darken-4 btn">Sign Up</Link>
        </div>
      </div>
    )

}

export default SignUp;