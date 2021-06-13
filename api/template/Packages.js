import React,{useEffect} from 'react'
import {Link} from 'react-router-dom'
import M from 'materialize-css'



const Packages=()=>{

    M.AutoInit()


    return(

        <div className="flex2 animate__animated animate__fadeIn">
            <main>
            <h3>Our Packages</h3>

            <div >
                <h3>Free Package</h3>
                <p>This package includes calculating your Area</p>
                <p>Price: Free</p>
                <Link to="/freepackage" className="waves-effect #212121 grey darken-4 btn">Check Free Package</Link>
            </div>
            <div>
                <h3>Package X</h3>
                <p>This package includes calculating your Area and Budget</p>
                <p>Price: 5$ per month</p>
                <Link to="/packagex" className="waves-effect #212121 grey darken-4 btn">Check Package X</Link>
            </div>
            <div>
                <h3>Package Y</h3>
                <p>This package includes calculating your Area, Budget and Running Costs</p>
                <p>Price: 10$ per month</p>
                <Link to="/packagey" className="waves-effect #212121 grey darken-4 btn">Check Package Y</Link>
            </div>

            </main>




            




        </div>


    )


}

export default Packages;