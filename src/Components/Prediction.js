import React,{useState,useEffect} from 'react'
import {Link} from 'react-router-dom'
import { Modal, Button } from 'react-materialize';
import M from 'materialize-css'
import axios from 'axios';


const Prediction=()=>{

    const [Prediction,setPrediction]= useState("")
    const [currentTime, setCurrentTime] = useState('');


    useEffect(() => {
        fetch('/time',{
          method: 'GET',
          headers : { 
            'Content-Type': 'application/json',
            'Accept': 'application/json'
           }
    
        }).then(res => res.json()).then(data => {
            // console.log(data.output);
            setCurrentTime(data.time)
        })
        
      }, []);



    

    useEffect(() => {
        fetch('/predict',{
            method: 'GET',
            headers : { 
              'Content-Type': 'application/json',
              'Accept': 'application/json'
             }
        }).then(res => res.json()).then(data => {
            console.log(data.output);
          setPrediction(data.output);
        });
      }, []);






    return (



        <div>
            <h2>it's {Prediction}</h2>

            <p>The current time is {currentTime}.</p>
        </div>




    )
}


export default Prediction;