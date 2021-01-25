import React,{useEffect} from 'react'
import { Link } from 'react-router-dom'





const Home=()=>{

    return(

        
        <div className="flex-container animate__animated animate__fadeIn  ">

            <h3>We provide you with the ultimate plan for starting your business</h3>

            <h5>Based on Machine Learning, our services provide you with the optimal Area, Budget and Running Costs for your project</h5>

            <h5>For more information check our packages:</h5>

            <Link to="/packages" className="waves-effect #212121 grey darken-4 btn">Check Packages</Link>


        </div>


    )
}


export default Home;