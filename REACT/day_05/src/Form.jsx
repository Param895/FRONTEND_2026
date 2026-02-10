import {useState} from 'react';

function Form (){
    const [fName, setfName] = useState("");
    return(
        <>
        <h1>Form For collecting information </h1>
        <form action="">
            <input type="text" onChange={(e)=>setfName(e.target.value) }/>
        </form>
        
        <h2>{fName}</h2>
        </>
    )
}

export default Form;