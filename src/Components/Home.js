import React,{useEffect} from 'react'
import { Link } from 'react-router-dom'
import M from 'materialize-css'





const Home=()=>{

    M.AutoInit()

    return(

        
        <div className="animate__animated animate__fadeIn  ">

            {/* <h3>We provide you with the ultimate plan for starting your business</h3>

            <h5>Based on Machine Learning, our services provide you with the optimal Area, Budget and Running Costs for your project</h5>

            <h5>For more information check our packages:</h5>

            <Link to="/packages" className="waves-effect #212121 grey darken-4 btn">Check Packages</Link> */}


        
            
            <div id="index-banner" class="parallax-container ">
                <div class="section no-pad-bot">
                     <div class="container">
                        <br></br>
                        <h1 class="header center white-text text-lighten-4">Welcome To Project X</h1>
                        <div class="row center">
                        <h5 class="header col s12 white-text">A modern responsive front-end framework based on Material Design</h5>
                        </div>
                        <div class="row center">
                        <a href="#" id="download-button" class="btn-large waves-effect waves-light black-text #fafafa grey lighten-5">Get Started</a>
                        </div>
                        <br></br>

                </div>
                </div>
                
            </div>


                    <div class="container">
                    <div class="section">

            
                <div class="row">
                    <div class="col s12 m4">
                    <div class="icon-block">
                        <h2 class="center brown-text"><i class="material-icons">flash_on</i></h2>
                        <h5 class="center">Speeds up development</h5>

                        <p class="light">We did most of the heavy lifting for you to provide a default stylings that incorporate our custom components. Additionally, we refined animations and transitions to provide a smoother experience for developers.</p>
                    </div>
                    </div>

                    <div class="col s12 m4">
                    <div class="icon-block">
                        <h2 class="center black-text"><i class="fas fa-crosshairs"></i></h2>
                        <h5 class="center">User Experience Focused</h5>

                        <p class="light">By utilizing elements and principles of Material Design, we were able to create a framework that incorporates components and animations that provide more feedback to users. Additionally, a single underlying responsive system across all platforms allow for a more unified user experience.</p>
                    </div>
                    </div>

                    <div class="col s12 m4">
                    <div class="icon-block">
                        <h2 class="center brown-text"><i class="material-icons">settings</i></h2>
                        <h5 class="center">Easy to work with</h5>

                        <p class="light">We have provided detailed documentation as well as specific code examples to help new users get started. We are also always open to feedback and can answer any questions a user may have about Materialize.</p>
                    </div>
                    </div>
                </div>

                </div>
        </div>

        






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






        
        </div>
        
        



    )
}


export default Home;