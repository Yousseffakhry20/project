import React from 'react'
import {Link} from 'react-router-dom'



const Navbar=()=>{

    return(
        <nav>
        <div className="nav-wrapper #212121 grey darken-4 ">
        <Link to="/" className="brand-logo">Project X</Link>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li><Link to="/packages">Packages</Link></li>
            <li><Link to="/signup">Sign Up</Link></li>
            <li><Link to="/login">Login</Link></li>
            
        </ul>
        </div>
        </nav>
    )



}


export default Navbar;

