import { useState } from 'react';

function App() {
    const [count, setcount] = useState(0);
    let Countwithoutstate = 0;

    if ( setcount === 10){
        alert("Count is 10");
    }
    return (
    <div className="App">
      <h1>Counter without state</h1>
      <h3>Value of the counter without state {Countwithoutstate} </h3>
      <button onClick = { ()=>{
        Countwithoutstate = Countwithoutstate + 1;
        console.log(`CountwithoutState before Click: ${Countwithoutstate}`);
      }}>Click here</button>
        <h1>Counter with state</h1>
        <h3>Value of the Count using State {count}</h3>
        <button onClick = { ()=>{
            setcount(count + 1);
            console.log(`Count using state for increment: ${count}`);
        }}>+</button>
        <button onClick = { ()=>{
            setcount(count - 1);
            console.log(`Count using state for increment: ${count}`);
        }}>-</button>

    </div>
  )

}

export default App;