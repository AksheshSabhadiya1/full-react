import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ParentComponent from './components/ParentComponent'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="App">
        <ParentComponent />
      </div>
    </>
  )
}

export default App
