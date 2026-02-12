import { useState } from 'react';
import Quiz from './Quiz';
import './App.css';

function App(){
  const [StartQuiz, setStartQuiz] = useState(true);
  return(
    <>
    {StartQuiz?<><h1>Welcome to the Math Quiz</h1>
    <hr />
    <h3>Click the button below to start</h3>
    <button onClick={()=>{
      setStartQuiz(false);
    }}>Start Quiz</button></>: <Quiz/>}
    </>
  )
}
export default App
