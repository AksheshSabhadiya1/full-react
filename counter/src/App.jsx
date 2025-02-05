import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [count, setcount] = useState(5)

  const addValue = () => {
    if (count < 20) {
      setcount(count + 1)  
    }
    else {
      alert("You Reached at Increment Limit")
    }
  }

  const removeValue = () => {
    if (count > 0) {
      setcount(count - 1)
    } else {
      alert("You Reached at Decrement Limit")
    }
  }

  const addFive = () => {
    if (count < 20) {
      setcount(count => count + 5)    // This method is use when multiple count called, it keeps track of previous counter
    } else {
      alert("You Reached at Increment Limit")
    }
  }

  return (
    <>
      <h1>Akshuuu Sabhadiya</h1>
      <h2>Counter Value : {count}</h2>

      <button onClick={addValue}>Increase Value</button> <button onClick={removeValue}>Decrease Value</button> <button onClick={addFive}>add +5</button>
    </>
  )
}

export default App
