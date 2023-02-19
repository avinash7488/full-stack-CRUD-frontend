import React from 'react'
import { Routes,Route } from 'react-router-dom'
import AddNotes from './AddNotes'
import Home from './Home'
import Login from './Login'
import Notes from './Notes'
import Register from './Register'


const AllRoutes = () => {
  return (
    <div>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/register' element={<Register/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/get_notes' element={<Notes/>}/>
            <Route path='/add_notes' element={<AddNotes/>}/>
        </Routes>
        
    </div>
  )
}

export default AllRoutes