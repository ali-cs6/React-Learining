import { useState } from 'react' //this line import hooks methods/properties
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter, setCounter] = useState(0) //counter = name of our variable, setCounter = method to make changes to ocounter, useState is method of hooks which propagate our changes to UI
  //setCounter method can be named any and it is called inside our function
  
  const incrementValue = ()=>{
    if(counter >= 0 && counter < 20){
      setCounter(counter+1);
    }
  }
  const decrimentValue = ()=> {
    if(counter>0){
      setCounter(counter-1);
    }
  }

  return (
    <>
      <h1>Its Ali here</h1>
      <h2>Counter Value: {counter} </h2>
      <button onClick={incrementValue}
      >Increase Value</button>
      <br />
      <button onClick={decrimentValue}
      >decrease Value</button>
    </>
  )
}

export default App
