import { useState } from 'react'

import './App.css'
import UserContextProvider from './context/UserContextProvider'
import Login from './component/Login'
import Profile from './component/Profile'

const App = () => {
  
  return (
    <UserContextProvider>
    <h1>Hello World!</h1>
    <Login/>
    <Profile/>
    </UserContextProvider>
  )
}

export default App