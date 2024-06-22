
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Registration from './components/Registration'
import Login from './components/Login'
import AllUser from './components/AllUser'

function App() {
 

  return (
    <>
      <Registration/>
      <Routes>
      <Route path='/loginuser' element={<Login/>}/>
      <Route path='/alluser' element={<AllUser/>}/>
      </Routes>
    </>
  )
}

export default App
