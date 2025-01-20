import React from 'react'
import { Route,Routes } from 'react-router-dom'
import Layout from './Components/Layout'

import About from './Pages/About'
import Contact from './Pages/Contact'
import Offers from './Pages/Offers'
import Home from './Pages/Home'
import Login from './Components/Login'
import Signup from './Components/Signup'
import Buyproduct from './Pages/Buyproduct'


const App = () => {


  return (
    <>
    <Routes>

   <Route path='/' element={<Layout/>}>
    <Route index element={<Home/>}/>
    <Route path='/home' element={<Home/>}/>
    <Route path='/about' element={<About/>}/>
    <Route path='/offers' element={<Offers/>}/>
    <Route path='/contact' element={<Contact/>}/>
    <Route path='/login' element={<Login/>}/>
    <Route path='/signup' element={<Signup/>}/>
    <Route path='/buynow' element={<Buyproduct/>}/>
    </Route>
    </Routes>
    
    
    </>
  )
}

export default App