import React,{useState,useEffect} from 'react'
import {Link} from 'react-router-dom'
import { Modal, Button } from 'react-materialize';
import M from 'materialize-css'
import axios from 'axios';


const PriceRecommendation=()=>{


    const [TotalArea,setTotalArea]= useState("")
    const [Prediction,setPrediction]= useState("")

    const [currentTime, setCurrentTime] = useState(0);



    const FinishingPrice=(TotalArea)=>{

        var Price= 2350 * TotalArea;

        console.log(Price)


        return Price; 
    }

    // useEffect(() => {
    //     fetch('/predict',{
    //       method: 'GET',
    //       headers : { 
    //         'Content-Type': 'application/json',
    //         'Accept': 'application/json'
    //        }
    
    //     }).then(res => res.json()).then(data => {
          
    //       console.log(data.output);
    //       console.log("za3bola")
    //       setPrediction(data.output)
    //     })
        
    //   }, []);

      useEffect(() => {
        fetch('/time').then(res => res.json()).then(data => {
          setCurrentTime(data.time);
        });
      }, []);


    


    

    const getArea=()=>{
        axios({
          method: "GET",
          
          withCredentials:true,
          url: "http://localhost:3000/predict"
        }).then((res) => {
          
          console.log(res.body)
          
        
        }
    
    
        )



        // fetch('http://localhost:5000/predict?TotalArea=110',{
        //     credentials: true,
        //     method: "get"
        // }).then(function(body) {
        //     return body.text();
        // }).then(function(data){
        //     console.log(data)
        // })
      }




    // var Price=FinishingPrice(TotalArea)

    if(TotalArea){
        var Price= FinishingPrice(TotalArea).Price
    }

    return (

        <div>

        <h3>Price Predictor</h3>
        <form action="http://localhost:5000/predict" method="get" >

            <div className="form animate__animated animate__fadeIn">
            <h4>Enter Chalet's Area</h4>
            <label for="fname">Total Area: </label>
            <input type="number" id="Total Area" name="TotalArea"
            value={TotalArea}
            onChange={(e)=>setTotalArea(e.target.value)}
            /><br></br>

            {/* <label for="fname">No. of existing personnel: </label>
            <input type="number" id="ExistingPersonnel" name="fname"
            // value={personnel}
            // onChange={(e)=>setPersonnel(e.target.value)} */}
            {/* /> */}
            <br></br>




        <Button className="waves-effect #212121 grey darken-4 btn"   onClick= {    useEffect(() => {
        fetch('/predict',{
            method: 'GET',
            headers : { 
              'Content-Type': 'application/json',
              'Accept': 'application/json'
             }
        }).then(res => res.json()).then(data => {
            
            console.log(data.output);
            console.log("test");
            
          setPrediction(data.output);
        });
      }, [])
      
      }>Calculate Finishing Price</Button>



        
        
        <br></br>
        
        
        
        
        
        
        </div>
        </form>


        {Prediction? (<h6 name="Prediction">Finishing Price is {Prediction}</h6>): null}










        </div>

    )





}



export default PriceRecommendation;