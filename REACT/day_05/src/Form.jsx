import {useState} from 'react';
import './index.css'

function Form (){
    const [fName, setfName] = useState("");
    return(

        <div> 
            <h1>Form For collecting information </h1>
        <form action="">
            <input type="text" onChange={(e)=>setfName(e.target.value) }/>
        </form>
        
        <h2>{fName}</h2>
        </div>
        
    
    )
}

export default Form;