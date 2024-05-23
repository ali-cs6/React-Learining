import { useCallback, useEffect, useRef, useState } from 'react'

function App() {
  const [length, setlenth] = useState(8); //for lenth of pass
  const [numberAllowed, setNumberAllowed] = useState(false);  //number include or nottext
  const [charAllowed, setCharAllowed] = useState(false); //characters allowed or not
  const [password, setPassword] = useState(""); //to gen pass
  //useCallback function is a hook which accept a function and its dependencies
  //it let you cache a fn definition btwn re-renders
  // hold up the execution still, before re-rendring a method for other functions(dependencies)
  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"; //rand text for pass will be taken from here
    if (numberAllowed) str += "0123456789"; //for numbers we add this
    if (charAllowed) str += "!@#$%^&*()_+-='"; // for special character we add this

    for (let i = 1; i <= length; i++) { //runs loop on the final string(str) 
      let char = Math.floor(Math.random() * str.length + 1); //gen random num for index
      pass += str.charAt(char); //pick the char from str at that generated random index no
    }
    setPassword(pass); //generated password passed here and it will pass it to password of usestate("")

  }, [length, numberAllowed, charAllowed])

  const copyPasswordToClipboard = useCallback(()=>{
    window.navigator.clipboard.writeText(password);
  }, [password])

  //useEffect hook let u syncronyze with external system, sync changes
  useEffect(()=>{
    passwordGenerator();
  }, [length, numberAllowed, charAllowed, passwordGenerator ])

  //useRef, refer a value that not needed for rendering
  const passwordRef = useRef(null)


  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 text-orange-500  bg-gray-700">
        <h1 className='text-white text-center my-3'>Passwrod Generator</h1>

        <div className="flex shadow rounded-lg overflow-hidden mb-4">
          <input className='outline-none w-full py-1 px-3'
            type="text"
            value={password}
            placeholder='password'
            readOnly
            ref={passwordRef}
          />
          <button onClick={copyPasswordToClipboard}
          className='outline-none bg-blue-700 text-white px-3 py0.5 shrink-0'
          >Copy</button>
        </div>

        <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1'>
            <input
              type="range"
              id='rangeInput'
              min={6}
              max={100}
              value={length}
              className='cursor-pointer'
              onChange={(e) => { setlenth(e.target.value) }}
            />
            <label htmlFor='rangeInput'>Length: {length}</label>
          </div>

          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              id='numberInput'
              defaultChecked={numberAllowed}
              onChange={() => {
                setNumberAllowed((prev) => !prev)
              }}
            />
            <label htmlFor="numberInput">Number</label>
          </div>

          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              id='charInput'
              defaultChecked={numberAllowed}
              onChange={() => {
                setNumberAllowed((prev) => !prev)
              }}
            />
            <label htmlFor="charInput">Character</label>
          </div>

        </div>
      </div>
    </>
  )
}

export default App
