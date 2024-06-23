
import { Link, Route, Routes } from 'react-router-dom'
import './App.css'
// import Registration from './components/Registration'
import Login from './components/Login'
import AllUser from './components/AllUser'
import Reg from './components/Reg'

import Home from './components/Home'
import Error from './components/Error'

function App() {
 

  return (
    <>
    
      <Routes>
        <Route path='/' element={<Home/>}/>
      <Route path='*' element={<Error/>}/>
      <Route path='/reg' element={<Reg/>}/>
      <Route path='/loginuser' element={<Login/>}/>
      <Route path='/admin' element={<AllUser/>}/>
      </Routes>
    </>
  )
}

export default App
