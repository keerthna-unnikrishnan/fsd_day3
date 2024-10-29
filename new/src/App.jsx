import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbark from './components/Navbark'
import { Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import Sigh from './components/State'
import State from './components/State'
import Counter from './components/Counter'
import Threebuttons from './components/Threebuttons'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Navbark/>
    
     {/* <State/> */}
     {/* <Counter/> */}
     {/* <Threebuttons/> */}
     <Routes>
     
     <Route path='/gro' element={<State/>} />
     <Route path='/' element={<Home/>}/>
     <Route path='/cro' element={<Counter/>} />
     <Route path='/fro' element={<Threebuttons/>} />
     



     </Routes>
    </>
  )
}

export default App
