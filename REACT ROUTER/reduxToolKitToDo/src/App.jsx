import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AddToDo from './components/AddToDo'
import Todos from './components/Todos'

function App() {

  return (
    <>
      <AddToDo />
      <Todos />
    </>
  )
}

export default App
