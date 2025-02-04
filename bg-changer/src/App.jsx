import { useState } from 'react'
import './App.css'

function App() {
  const [color, setColor] = useState("olive")

  
  const [count_r, setcount_r] = useState(0)
  const [count_g, setcount_g] = useState(0)
  const [count_y, setcount_y] = useState(0)
  const [count_b, setcount_b] = useState(0)
  const [count_o, setcount_o] = useState(0)
  const [count_w, setcount_w] = useState(0)
  const [count_blk, setcount_blk] = useState(0)
  
  let count = count_r+count_g+count_y+count_o+count_b+count_blk+count_w
  return (
    <div className='w-full h-screen' style={{backgroundColor:color}}>

      <div className='fixed flex flex-wrap justify-center align-middle top-10 inset-x-5 pt-5'>

        <div className='p-2 fixed flex justify-center align-middle top-2.5 inset-x-5'>
          <span className=' bg-white p-1.5 rounded-xl'>Counter Value : {count}</span>
        </div>

        <div className='flex flex-wrap justify-center gap-2 shadow-lg bg-white rounded-xl p-2'>
          {/* # onClick method require only function  */}

          <button className='outline-none px-4 py-1 rounded-full text-white shadow-lg bg-red-500'
          onClick={ () => { setColor("red"), setcount_r(count_r + 1) }}>Red {count_r}</button>

          <button className='outline-none px-4 py-1 rounded-full text-white shadow-lg bg-green-500'
          onClick={ () => { setColor("green"),setcount_g(count_g + 1)} }>Green {count_g}</button>

          <button className='outline-none px-4 py-1 rounded-full text-white shadow-lg bg-yellow-500'
          onClick={ () => { setColor("yellow"),setcount_y(count_y + 1) }}>Yellow {count_y}</button>

          <button className='outline-none px-4 py-1 rounded-full text-white shadow-lg bg-blue-500'
          onClick={ () => { setColor("blue"),setcount_b(count_b + 1)} }>Blue {count_b}</button>

          <button className='outline-none px-4 py-1 rounded-full text-white shadow-lg bg-orange-500'
          onClick={ () => { setColor("orange"),setcount_o(count_o + 1)} }>Orange {count_o}</button>

          <button className='outline-none px-4 py-1 rounded-full text-white shadow-lg bg-black'
          onClick={ () => { setColor("black"),setcount_blk(count_blk + 1)} }>Black {count_blk}</button>

          <button className='outline-none px-4 py-1 rounded-full text-black shadow-lg bg-white'
          onClick={ () => { setColor("white"),setcount_w(count_w + 1)} }>White {count_w}</button>

        </div>

      </div>

    </div>
  )
}

export default App
