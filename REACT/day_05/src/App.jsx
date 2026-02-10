import {useState} from 'react';
import Form from './Form';

function App() {
  const [loading, setloading]= useState(true);
  
  return (
    <>
    <Form/>
    {loading ?<> <h1>loading.......</h1> 
    <button onClick={()=> {setloading(false)}}>Click here</button></>:  <h1>loaded</h1>}
    </>

  )
}

export default App;