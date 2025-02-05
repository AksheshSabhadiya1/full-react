import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Object from './counter-type/Object.jsx'
import Usestate_Array from './counter-type/Usestate_Array.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    {/* <Object /> */}
    <Usestate_Array />
  </StrictMode>,
)
