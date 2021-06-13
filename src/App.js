import React,{useEffect} from 'react'
import'./App.css'
import {BrowserRouter,Route, Switch} from 'react-router-dom'
import Navbar from './Components/Navbar'
import Home from './Components/Home'
import Packages from './Components/Packages'
import FreePackage from './Components/FreePackage'
import PackageY from './Components/PackageY'
import PackageX from './Components/PackageX'
import SignUp from './Components/SignUp'
import Login from './Components/Login'
import Footer from './Components/Footer'
import M from 'materialize-css'
import RoomForm from './Components/RoomForm'
import PriceRecommendation from './Components/PriceRecommendation'
import Prediction from './Components/Prediction'





function App() {

  M.AutoInit()

  return(
    
    <BrowserRouter>
   

    <Navbar/>
    
    <Route exact path="/">
    <Home/>
    </Route>

    <Route path="/packages">
      <Packages/>

    </Route>
    <Route path="/packagex">
      <PackageX 
      
      />

    </Route>
    <Route path="/packagey">
      <PackageY/>

    </Route>
    <Route path="/freepackage">
      <FreePackage/>

    </Route>
    <Route path="/login">
      <Login/>

    </Route>
    <Route path="/signup">
      <SignUp/>

    
    </Route>
    <Route path="/roomform">
      <RoomForm/>

    
    </Route>
    <Route path="/pricepredictor">
      <PriceRecommendation/>

    
    
    </Route>

    
    <Route path="/predict">
      <Prediction/>
    </Route>

    
    </BrowserRouter>



  )
  
}

export default App;
