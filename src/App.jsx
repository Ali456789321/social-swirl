import { useState } from 'react'
import './index.css'
import { BrowserRouter, Route, Routes, HashRouter } from 'react-router-dom'
import Nav from './components/Nav'
import Home from './components/Home'
import Elearning from './components/Elearning'
import Course from './components/Course'
import Footer from './components/Footer'
import Lectures from './components/Lectures'
import Buisness from './components/Buisness'
import About from './components/About'
import Remote from './components/Remote'
import Details from './components/Details'
import Apply from './components/Apply'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className='body'>
    <HashRouter>
         <Nav/>
         <Routes>
           <Route path='/' element={<Home/>}/>
           <Route path='/e-learning' element={<Elearning/>}/>
           <Route path='/selectedCourse/:id' element={<Course/>}/>
           <Route path='/lectures' element={<Lectures/>}/>
           <Route path='/buisness' element={<Buisness/>}/>
           <Route path='/about' element={<About/>}/>
           <Route path='/apply' element={<Apply/>}/>
           <Route path='/remote' element={<Remote/>}/>
           <Route path='/remote/:id' element={<Details/>}/>
         </Routes>
         <Footer/>
      </HashRouter>
    </div>
    </>
  )
}

export default App
