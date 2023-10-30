import React from 'react'
import './App.css'
import {Route,Routes} from 'react-router-dom'
import Home from '../Pages/Home'
import HouseDetails from '../Pages/HouseDetails'
function App() {

  return (
    <>
     <Routes>

      <Route path='/' element={<Home/>}/>
      <Route path='/warehouse/:id' element={<HouseDetails/>}/>
     </Routes>
    </>
  )
}

export default App
