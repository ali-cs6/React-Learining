import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1 className = 'bg-green-400 text-black p-4 rounded-xl mb-5'>Tailwimnd Test</h1>
      <Card className = "First Card" btnText = "Click Me"/>
      <Card className = "2nd Card" btnText = "Click to Read More"/>
    </>
  )
}

export default App
