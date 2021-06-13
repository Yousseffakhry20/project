import React from 'react'
import {Link} from 'react-router-dom'

const Footer=()=>{


    return(



      <footer class="page-footer grey darken-4">
      <div class="container">
        <div class="row">
          <div class="col l6 s12">
            <h5 class="white-text">Company Bio</h5>
            <p class="grey-text text-lighten-4">We are a team of college students working on this project like it's our full time job. Any amount would help support and continue development on this project and is greatly appreciated.</p>
  
  
          </div>
          <div class="col l3 s12 ">
            <h5>Follow us </h5>
            
            <br></br>
  
            <div className="spaced">
            <i class="fab fa-facebook fa-3x"></i>
            <i class="fab fa-instagram fa-3x"></i>
            <i class="fab fa-linkedin fa-3x"></i>
            </div>
            
          </div>
          
        </div>
      </div>
      
    </footer>
    )
}

export default Footer
