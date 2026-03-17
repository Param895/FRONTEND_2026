import {useState} from 'react';

export default function MyButton({count, IncCount}){
    return(
        <>
        <button onClick={{IncCount}}>Click Count  {count}</button>
        </>
    )
}