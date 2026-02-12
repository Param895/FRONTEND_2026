import {useState} from 'react';
import './App.css';

function Quiz(){
  let randomNum1 = Math.floor(Math.random() * 10);
  let randomNum2 = Math.floor(Math.random() * 10);
  const operator= ['+','-','*','/'];
  let randomOp= operator[Math.floor(Math.random() * operator.length)];
  let result = eval(`${randomNum1} ${randomOp} ${randomNum2}`);
  const answer = result ;

  return(
    <>
    <h1>Random Math Quiz Generater !!!!!!!!</h1>
    <hr />
    <h2>{randomNum1}     {randomOp}     {randomNum2}    =   ???????</h2>
    <button onClick={()=>{
     window.location.reload(Quiz());
    }}>{result}</button>


    <br />
    <br />
    <button onClick={()=>{
      window.location.reload();
      <h2>Your Answer is {result}</h2>
    }}>Reload</button>
    </>
  )
}

export default Quiz;
