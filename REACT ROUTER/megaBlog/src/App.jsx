import './App.css'
import React, { useEffect, useState } from 'react'
import {useDispatch} from 'react-redux'
import authservice from './appwrite/auth_service'
import {login, logout} from './store/authSlice'
import { Headers, Footers } from './components/index'
import {Outlet} from 'react-router-dom'

function App() {

  const [loading, setLoading] = useState(true)
  const dispatch = useDispatch()

  useEffect(()=>{
    authservice.getCurrentUser()
      .then((userData)=>{
          if(userData){
            dispatch(login({userData}))
          }else{
            dispatch(logout())
          }
      })
      .catch(error => { throw error })
      .finally(() => setLoading(false))
  },[])

  return  !loading ?(<div className='min-h-screen w-full flex flex-wrap content-between bg-gray-400'>
    <div className='w-full block'>
      <Headers />
      <main>
        <Outlet />
      </main>
      <Footers />
    </div>
  </div> ) : null

}

export default App
