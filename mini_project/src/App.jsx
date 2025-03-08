import { useState } from 'react'
import Login from './pages/login/Login'
import Home from './pages/Home/Home'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Upload from './pages/upload/Upload'

function App() {
  
  return(
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login/>}></Route>
        <Route path='/studlogin' element={<Home/>}></Route>
        <Route path='/adminlogin' element={<Home/>}></Route>
        <Route path="/admin/upload" element={<Upload />} /> {/* Add Upload route */}
      </Routes>
    </BrowserRouter>
  )
}

export default App
