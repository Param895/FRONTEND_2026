import {useState} from 'react';
import MyButton from './components/MyButton';
import './App.css';

export default function App({incCount}){
  const [Count, setCount] = useState(0);

  function incCount(){
    setCount(Count + 1);
  }
  return(
    <>
    <h1>Counter app Using Props {Count}</h1>
    <MyButton count={Count} onClick={incCount}/>
    </>
  )
}