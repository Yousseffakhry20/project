import React,{useState,useEffect} from 'react'
import {Link} from 'react-router-dom'
import { Modal, Button } from 'react-materialize';
import M from 'materialize-css'






const RoomForm=()=>{

  M.AutoInit()

    const [inputList, setInputList] = useState([{ RoomName: "",RoomArea:"", NumOfEmployees: "" }]);
    const [companyType,setCompanyType]=useState("")

    const CompanyAndStandardArea=[{type:"commercial",standardArea:"5"},{type:"Residential",standardArea:"6"},{type:"Architectural Firm",standardArea:"4"},{type:"Software solutions",standardArea:"5.5"}
    ,{type:"Call Center",standardArea:"3"}]


 
  // handle input change
  const handleInputChange = (e, index) => {
    const { name, value } = e.target;
    const list = [...inputList];
    list[index][name] = value;
    setInputList(list);

    
    console.log(list[0].RoomArea)

    return list;
  };
 


  var names=handleInputChange.list;



  // handle click event of the Remove button
  const handleRemoveClick = index => {
    const list = [...inputList];
    list.splice(index, 1);
    setInputList(list);
  };
 
  // handle click event of the Add button
  const handleAddClick = () => {
    setInputList([...inputList, { RoomName: "", NumOfEmployees: "" }]);
  };




  const spaceEffiency = (names,companyType,CompanyAndStandardArea,inputList) => {
        var i,j;
      


        for (i = 0; i < CompanyAndStandardArea.length; i++){

  
          if(companyType.toUpperCase() === CompanyAndStandardArea[i].type.toUpperCase()){

            var AreaStandard=parseFloat(CompanyAndStandardArea[i].standardArea)
            // console.log(AreaPerEmployee)
            j=i

          }
      }


        // console.log(inputList[0].NumOfEmployees)



          for(i=0; i<inputList.length; i++){
            var NumberOfEmployees=parseFloat(inputList[i].NumOfEmployees)
            var roomArea = parseFloat(inputList[i].RoomArea)

            var AreaPerEmployee=roomArea/NumberOfEmployees

            console.log(AreaPerEmployee)
            
            

            if(AreaPerEmployee<CompanyAndStandardArea[j].standardArea){
              console.log("Your space is not efficient")
            }
            else if(AreaPerEmployee>CompanyAndStandardArea[j].standardArea){
              console.log("You have extra area that should be utilised")
            }



          }




        

        
        
        // console.log(companyType.toUpperCase())

  };


  
 
  return (
    <div className="App">
      <h3>Room Form</h3>

    <div className="form">

      
      <input type="text"
      name="Company Type"
      placeholder="Company Type"
      value={companyType}
      onChange={(e)=>setCompanyType(e.target.value)}
      ></input>
    </div>

    <h5 className="form">Enter Room details:</h5>

      {inputList.map((x,i) => {
        return (
          <div className="form">
            <input
              type="text"
              name="RoomName"
              placeholder="Enter Room Name"
              value={x.RoomName}
              onChange={e => handleInputChange(e, i)}
            />
            <input
              className="form"
              type="number"
              name="RoomArea"
              placeholder="Room Area"
              value={x.RoomArea}
              onChange={e => handleInputChange(e, i)}
            />
            <input
              className="form"
              type="number"
              name="NumOfEmployees"
              placeholder="Number of Employees in the room"
              value={x.NumOfEmployees}
              onChange={e => handleInputChange(e, i)}
            />
            <div className="form">
            {inputList.length - 1 === i && <button onClick={handleAddClick}><i class="material-icons">add</i></button>}
              {/* {inputList.length - 1 === i && <button onClick={handleAddClick}>Add</button>} */}
              
              {inputList.length !== 1 && <button
                className="mr10"
                onClick={() => handleRemoveClick(i)}> <a ><i class="material-icons">clear</i></a></button>}
                {/* onClick={() => handleRemoveClick(i)}>Remove</button>} */}
              
            </div>
          </div>
        );
      })}
      <div style={{ marginTop: 20 }}>{JSON.stringify(inputList)}</div>

      {/* <button onclick={displayName(names,companyType,CompanyAndStandardArea,inputList)} className="#212121 grey darken-4 btn">Check</button>  */}
      <button  className="#212121 grey darken-4 btn"   onClick={() =>spaceEffiency(names,companyType,CompanyAndStandardArea,inputList)}>Check</button> 

      <br></br>
          {/* <!-- Modal Trigger --> */}
      <a class="waves-effect waves-light btn modal-trigger" href="#modal1">Modal</a>

      {/* <!-- Modal Structure --> */}
      <div id="modal1" class="modal">
        <div class="modal-content">
          <h4>Modal Header</h4>
          <p>A bunch of text</p>
        </div>
        <div class="modal-footer">
          <a href="#!" class="modal-close waves-effect waves-green btn-flat">Agree</a>
        </div>
      </div>
      
    </div>
  );





}
 




export default RoomForm;