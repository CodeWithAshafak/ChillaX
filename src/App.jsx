import React from 'react'
import { BrowserRouter, Route,Routes } from 'react-router-dom'
import Layout from './Layout'

import About from './Pages/About'
import Contact from './Pages/Contact'
import Offers from './Pages/Offers'
import Home from './Pages/Home'
import Login from './Components/Login'
import Signup from './Components/Signup'
import Buyproduct from './Pages/Buyproduct'
import Thank from './Pages/Thank'
import Orders from './Pages/Orders'
import Search from './Pages/Search'
import Edit from './Pages/Edit'


const App = () => {


  return (
    <>
    <BrowserRouter>
   
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
    <Route path='/thank' element={<Thank/>}/>
    <Route path='/order' element={<Orders/>}/>
    <Route path='/search' element={<Search/>}/>
    <Route path='/edit/:id' element={<Edit/>}/>
    
    </Route>
    </Routes>
    
    </BrowserRouter>
    
    </>
  )
}

export default App