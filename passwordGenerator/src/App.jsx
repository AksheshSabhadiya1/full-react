import { useState, useCallback } from 'react'
import './App.css'

function App() {
  const [length, setlength] = useState(8)
  const [numAllow, setnumAllow] = useState(false)
  const [charAllow, setcharAllow] = useState(false)
  const [Password, setPassword] = useState("")


  const passwordGenerator = useCallback(() => {

    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if (numAllow) str += "0123456789"
    if (charAllow) str += "~`!@#$%^&*()_-+={}[]:;<>,.?/|"

    for (let i = 0; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)
      pass = str.charAt(char)
    }

    setPassword(pass)

  }, [length, numAllow, charAllow, setPassword])


  return (
    <div>

      <div className='w-full max-w-md mx-auto shadow-md rounded-lg p-4 my-10 text-orange-400 bg-gray-600 text-center'>

        <h1 className='text-4xl text-center text-white p-0 mb-5'>Password Generator</h1>

        <div className='flex shadow rounded-lg overflow-hidden mb-4 bg-white text-gray-700'>
          <input
            type="text"
            value={Password}
            className='outline-none w-full py-1 px-3'
            placeholder='password'
            readOnly
          />
          <button className='outline-none bg-blue-700 text-white px-2.5 py-0.5 shrink-0 cursor-pointer'>Copy</button>
        </div>

        <div className='flex text-m gap-x-2'>
          <div className='flex items-center gap-x-1'>
            <input
              type="range"
              min={6}
              max={50}
              value={length}
              className='cursor-pointer'
              onChange={(e) => { setlength(e.target.value) }}
            />
            <label>Length : {length}</label>
          </div>

          <div className='flex items-center gap-x-1'>
            <input
              type="checkbox"
              defaultChecked={numAllow}
              id='numberInput'
              className='cursor-pointer'
              onChange={() => { setnumAllow((prev) => !prev) }}
            />
            <label htmlFor='numberInput'>Numbers</label>
          </div>

          <div className='flex items-center gap-x-1'>
            <input
              type="checkbox"
              defaultChecked={charAllow}
              id='charInput'
              className='cursor-pointer'
              onChange={() => { setcharAllow((prev) => !prev) }}
            />
            <label htmlFor='charInput'>Characters</label>
          </div>

        </div>

      </div>
    </div>
  )
}

export default App
