import { useState } from 'react'
import Signup from './pages/signup/Signup'
import Login from './pages/login/Login'
import {BrowserRouter, Routes, Route} from 'react-router-dom'

function App() {
  
  return(
    <BrowserRouter>
      <Routes>
        <Route path='/register' element={<Signup/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
