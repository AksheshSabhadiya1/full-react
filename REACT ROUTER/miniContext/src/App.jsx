import './App.css'
import UsercontextProvider from './context/UsercontextProvider'
import Login from './components/Login'
import Profile from './components/Profile'

function App() {

  return (
    <>
      <h1>Akshu with chai</h1>
      <UsercontextProvider>
          <Login />
          <Profile />
      </UsercontextProvider>
    </>
  )
}

export default App
