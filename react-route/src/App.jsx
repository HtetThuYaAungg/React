import React from 'react'
import { Route,Routes} from 'react-router-dom'
import Meals from './Pages/Meals';
import Detail from './Pages/Detail';
import './App.css';

const App = () => {
  return (
    <>
    <Routes>
        <Route path='/' element={<Meals/>} />
        <Route path='/detail/:id' element={<Detail />} />
    </Routes>
    </>
    
  )
}

export default App