import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import React from 'react'
import ReactDOM from 'react-dom'
import App from './App.jsx'


function MyApp(){
  return (
    <h1>Hello Akshu</h1>
  )
}


const AnotherElement = (
  <a href="https://google.com" target='_blank'>Visit Google</a>
)

const user = "Akshu baka"
const reactElement = React.createElement(
    'a',
    {href : 'https://google.com', target : '_blank'},
    'Visit Google',
    user
)


createRoot(document.getElementById('root')).render(

    <App />

    //<MyApp />     // myApp()

    // AnotherElement

    // reactElement
)
