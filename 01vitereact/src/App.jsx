
import Chai from "./chai"



function App() {
  // not only (return) we can do further coding too and inject there, like...
  const extra = "this is added from outside return syntax"; // only evaluated/final/result code can be injected via curly braces

  return (
    <>
    <h1>Hello vite lol || {extra}</h1> 
    <Chai/>
    </>
  )
}

export default App
