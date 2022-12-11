import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Register from './Pages/Register'
import Login from './Pages/Login'
import Chat from './Pages/Chat'
const App = () => {
  return (
    <BrowserRouter>
    <div className="flex h-screen justify-center items-center bg-blue-500">
    <Routes>
      <Route path='/register' element ={<Register/>}/>
      <Route path='/login' element ={<Login/>}/>
      <Route path='/chat' element ={<Chat/>}/>
    </Routes>
        
        </div>
    
    </BrowserRouter>
  )
}

export default App