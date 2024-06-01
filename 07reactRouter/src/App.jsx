import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  //actually we dont need this app.jsx file in react router
  // because the router has its own way of exporting with in the main.jsx

  return (
    <>
    <h1 className='bg-green-600 p-4'>React router</h1>
    </>
  )
}

export default App
