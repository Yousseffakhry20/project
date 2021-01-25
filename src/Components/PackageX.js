import React,{useState,useEffect} from 'react'
import {Link} from 'react-router-dom'
import { Modal, Button } from 'react-materialize';
import Select from "react-select";
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import M from 'materialize-css'





const PackageX=()=>{

    
    const options = [
        { value: 'Basic', label: 'Basic' },
        { value: 'Advanced', label: 'Advanced' },
        { value: 'Luxurious', label: 'Luxurious' },
      ];
      
      const defaultOption = options[0];

        
      const handleChange = (event) => {
        setFinishing(event.value);
      };



    const [personnel,setPersonnel]=useState("")
    const [companyType,setCompanyType]=useState("")
    const [departments,setDepartments]=useState("")
    const [personnelPerDep,setPersonnelPerDep]=useState("")
    const [futurePersonnel,setFuturePersonnel]=useState("")
    const [finishing, setFinishing] = useState("");
    
    const trigger = <Button>Open Modal</Button>;

    
    
    const CalcTotalArea=(personnel,finishing,futurePersonnel)=>{

           var meterPrice;     
        if(finishing== "Basic"){
            meterPrice=2500;
        }else if(finishing=="Advanced"){
            meterPrice=3500;
        }else if(finishing=="Luxurious"){
            meterPrice=4500;
        }
        var totalpersonnel=parseInt(personnel,10)+parseInt(futurePersonnel,10)
        var Area=totalpersonnel*3;

        var Budget=Area*meterPrice


        

        return{
            Area,
            Budget,
            
        }
    

    }


    

    if(personnel && finishing && futurePersonnel){
    var info=CalcTotalArea(personnel,finishing,futurePersonnel)

    
    var totalArea=info.Area
    var totalBudget=info.Budget

    }

    
    



    return(
       
        <div className="form animate__animated animate__fadeIn">
        <h4>Package X</h4>
        <label for="fname">Company Type: </label>
        <input type="text" id="Company Type" name="fname"
        value={companyType}
        onChange={(e)=>setCompanyType(e.target.value)}
        /><br></br>

        <label for="fname">No. of existing personnel: </label>
        <input type="number" id="ExistingPersonnel" name="fname"
        value={personnel}
        onChange={(e)=>setPersonnel(e.target.value)}
        /><br></br>
        
        {/* <label for="lname">No. of Departments: </label>
        <input type="number" id="Departments" name="lname"
        value={departments}
        onChange={(e)=>setDepartments(e.target.value)}
        /><br></br>
        
        <label for="lname">No. of existing personnel per Departments: </label>
        <input type="number" id="PersonnelPerDepartment" name="lname"
        value={personnelPerDep}
        onChange={(e)=>setPersonnelPerDep(e.target.value)}
        /><br></br> */}
        
        <label for="lname">No. of future personnel: </label>
        <input type="number" id="futurePersonnel" name="lname"
        value={futurePersonnel}
        onChange={(e)=>setFuturePersonnel(e.target.value)}
        trigger
        /><br></br>
        
        <label for="lname">Level of Finishing: </label> 
        
               
        
        
        {/* <Select
        placeholder="Level of Finishing"
        value={selectedOption}
        onChange={(e)=>setSelectedOption(selectedOption)}
        onInputChange
        
        options={options}
      /> */}

        {/* <label for="lname">Level of Finishing: </label>    
        <Dropdown options={options} value={selectedOption} onChange={handleChange} placeholder="Select an option" />            */}
       
        
       <Select
        placeholder="Level of Finishing"
        value={options.find(obj => obj.value === finishing)} // set selected value
        options={options} // set list of the data
        onChange={handleChange} // assign onChange function
      />
        
        <br></br>
                        
        
        <Modal
            actions={[
              <Button flat modal="close" node="button" >Close</Button>
            ]}
            bottomSheet={false}
            fixedFooter={false}
            header="Results"
            id="Modal-0"
            open={false}
            options={{
              dismissible: true,
              endingTop: '10%',
              inDuration: 250,
              onCloseEnd: null,
              onCloseStart: null,
              onOpenEnd: null,
              onOpenStart: null,
              opacity: 0.1,
              outDuration: 250,
              preventScrolling: true,
              startingTop: '4%'
            }}
            
            
            trigger={ personnel && companyType && futurePersonnel && finishing?( <Button node="button"   className="#212121 grey darken-4 btn "          
            >Submit</Button> ) : (<Button node="button"   className="#212121 grey darken-4 btn disabled "          
            >Submit</Button> )}
            
          >
            <table className="highlight">
                        <thead>
                        <tr>
                            <th>Data Attribute</th>
                            <th>Value</th>
                            
                        </tr>
                        </thead>

                        <tbody>
                        <tr>
                            <td>Company Type</td>
                            <td>{companyType}</td>
                            
                        </tr>
                        <tr>
                            <td>No. of existing personnel</td>
                            <td>{personnel}</td>
                            
                        </tr>
                        
                        <tr>
                            <td>No. of future personnel</td>
                            <td>{futurePersonnel}</td>
                            
                        </tr>
                        <tr>
                            <td>Level of Finishing</td>
                            <td>{finishing}</td>
                            
                        </tr>
                        </tbody>
            </table>            
            <p>Area :{totalArea} meter squared</p>
            <p>Budget : {totalBudget} LE</p>
          </Modal>
          
        

        
        


        <h6>Other Packages:</h6>
        
        <Link to="/packagey" class="waves-effect waves-light #212121 grey darken-4 btn" >Package Y</Link><br></br>




        

        
        




        </div>


        
    
    )
}

export default PackageX