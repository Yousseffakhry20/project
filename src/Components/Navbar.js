import React from 'react'
import {Link} from 'react-router-dom'
import M from 'materialize-css'




const Navbar=()=>{

    M.AutoInit()

    return(
        <div>
        <nav>
        <div className="nav-wrapper #212121 grey darken-4  ">
        <Link to="/" className="brand-logo">Project X</Link>
        <a href="#" data-target="mobile-demo" class="sidenav-trigger"><i class="material-icons">menu</i></a>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li className="active"><Link to="/packages">Packages</Link></li>
            <li className="active"><Link to="/roomform">Space Efficiency</Link></li>
            <li className="active"><Link to="/signup">Sign Up</Link></li>
            <li className="active"><Link to="/login">Login</Link></li>
            
        </ul>
        </div>
        </nav>

        <ul class="sidenav" id="mobile-demo">
            <li className="active"><Link to="/packages">Packages</Link></li>
            <li className="active"><Link to="/roomform">Space Efficiency</Link></li>
            <li className="active"><Link to="/signup">Sign Up</Link></li>
            <li className="active"><Link to="/login">Login</Link></li>
        </ul>
        </div>
    )



}


export default Navbar;

