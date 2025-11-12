import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { use } from 'react'

function App() {

  let [counter,setcounter]=useState(10);
  const addValue=()=>{
    console.log("clicked",counter);
    counter=counter +1;
    setcounter(counter);
  }
  const subtractValue=()=>{
    console.log("clicked",counter);
    counter=counter -1;
    setcounter(counter);
  }
  return (
    <>
    <h1>Chai aur React</h1>
    <h2>Counter Value : {counter}</h2>
    <button onClick={addValue}>Add Value</button>
    <br/>
    <button onClick={subtractValue} >Subtract Value</button>
    </>
  )
}

export default App
