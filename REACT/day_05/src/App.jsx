import {useState} from 'react';
import Form from './Form';
import './App.css';
import './index.css';

function App() {
  const [loading, setloading]= useState(true);
  
  return (
    
    <div className='App'>
      <div >
        <Form/>
        <Form/>
    {loading ?<> <h1>loading.......</h1> 
    <button onClick={()=> {setloading(false)}}>Click here</button></>:  <h1>loaded</h1>} 
      </div>
    </div>
    

  )
}

export default App;