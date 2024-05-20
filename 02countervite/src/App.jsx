import { useState } from 'react' //this line import hooks methods/properties
import './App.css'

function App() {
  let [counter, setCounter] = useState(0) //counter = name of our variable, setCounter = method to make changes to counter, useState is method of hooks which propagate our changes to UI
  //setCounter method can be named any and it is called inside our function
  
  const incrementValue = ()=>{
    if(counter < 20){
      /*
      setCounter(counter+1);
      setCounter(counter+1);
      setCounter(counter+1);
      */
      //the above lines wont update the counter to +3 because the final value is just the same as the counter neverchanges through out the lines, the useState send data in a single junk and one click will send the data which will be counter+1.
      //to make these lines works, we can do it as,
      setCounter(prevCounter => prevCounter+1); // setCounter can accept callback method and hence everyline value is stored so the final value is passed
      setCounter(prevCounter => prevCounter+1);
      setCounter(prevCounter => prevCounter+1);
      // now the counter will go with +3 on every Click
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
