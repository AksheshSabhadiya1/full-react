import React from 'react'
// import './App.css'
import Component_C from './components/Component_C'

export const UserContext = React.createContext()
export const channelContext = React.createContext()

function App() {

  return (
    <div className='App'>
      {/* <UserContext.Provider value={"Akshu"}>
        <Component_C />
      </UserContext.Provider> */}

      <UserContext.Provider value={"Akshu"}>
        <channelContext.Provider value={"Sabhadiya"}>
          <Component_C />
        </channelContext.Provider>
      </UserContext.Provider>

    </div>
  )
}

export default App
