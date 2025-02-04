import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {

  let myObj = {
    name : "Akshu",
    age :21
  }

  let newArr = [9,9,9]
  
  return (
    <>
      <h1 className='bg-green-400 text-black p-4 rounded-xl mb-4'>Hello Tailwind</h1>
      <Card uname="Chai Aur Code" myArr={[1,2,3]} obj={myObj} arr={newArr}  />
      <Card uname="Akshu" btntext="View Profile"/>
      <Card uname="Chai Aur Code" btntext='show profile'/>
    </>
  )
}

export default App
