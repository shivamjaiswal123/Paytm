import { useState } from 'react'
import './App.css'
import Signup from './pages/Signup'
import { Routes, Route } from 'react-router'
import Signin from './pages/Signin'
import Dashboard from './pages/Dashboard'
import SendMoney from './pages/SendMoney'
function App() {
  return (
    <>
     <Routes>
        <Route index path="/" element={<Dashboard/>}/>
        <Route path="/signin" element={<Signin/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/sendmoney" element={<SendMoney/>}/>
     </Routes>
    </>
  )
}

export default App
