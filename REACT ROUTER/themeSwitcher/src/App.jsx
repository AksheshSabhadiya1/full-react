import { useEffect, useState } from 'react'
import './App.css'
import { ThemeProvider } from './context/theme'
import ThemeBtn from './Components/ThemeBtn'
import Card from './Components/Card'

function App() {
  
  const [themeMode, setThemeMode] = useState("light")

  const darkTheme = () =>{
      setThemeMode('dark')
  }

  const lightTheme = () =>{
    setThemeMode('light')
  }

  const ele = document.querySelector('html').classList

  useEffect(()=>{
      ele.remove('light','dark')
      ele.add(themeMode)
  },[themeMode])

  return (
    <ThemeProvider value={{themeMode, darkTheme, lightTheme}}>
      <div className="flex flex-wrap min-h-screen items-center">
        <div className="w-full">
          <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
            <ThemeBtn />
          </div>

          <div className="w-full max-w-sm mx-auto">
            <Card />
          </div>
        </div>
      </div>
    </ThemeProvider>
  )
}

export default App
