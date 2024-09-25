import { useState, useEffect } from 'react'
import './App.css'
import Signup from './pages/Signup'
import { Routes, Route } from 'react-router'
import Signin from './pages/Signin'
import Dashboard from './pages/Dashboard'
import SendMoney from './pages/SendMoney'
function App() {
  const [loggedIn, setLoggedIn] = useState(false)

  useEffect(() => {
    if(localStorage.accessToken){
      setLoggedIn(true)
    }
  }, [])

  return (
    <>
     <Routes>
        <Route path="/" element={ loggedIn? <Dashboard/>: <Signup/>} />
        <Route path="/signin" element={<Signin/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/sendmoney" element={loggedIn? <SendMoney/> : "Create a account"}/>
     </Routes>
    </>
  )
}

export default App
