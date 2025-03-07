import { useState } from 'react'
import Login from './pages/login/Login'
import Home from './pages/Home/Home'
import {BrowserRouter, Routes, Route} from 'react-router-dom'

function App() {
  
  return(
    <BrowserRouter>
      <Routes>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/studlogin' element={<Home/>}></Route>
        <Route path='/adminlogin' element={<Home/>}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
