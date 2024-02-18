import { useState, lazy, Suspense } from 'react'
import './index.css'
import { BrowserRouter, HashRouter, Route, Routes } from 'react-router-dom'
import Nav from './components/Nav'
import Footer from './components/Footer'


const Home = lazy(() => import('./components/Home'))
const Elearning = lazy(() => import('./components/Elearning'))
const Course = lazy(() => import('./components/Course'))
const Lectures = lazy(() => import('./components/Lectures'))
const Buisness = lazy(() => import('./components/Buisness'))
const About = lazy(() => import('./components/About'))
const Remote = lazy(() => import('./components/Remote'))
const Details = lazy(() => import('./components/Details'))
const Apply = lazy(() => import('./components/Apply'))





function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className='body'>
    <HashRouter>
         <Nav/>
         <Routes>
           <Route path='/' element={
            <Suspense fallback={'<h1>loading</h1>'}>
                 <Home/>
            </Suspense>
           }/>
           <Route path='/e-learning' element={
            <Suspense fallback={'<h1>loading</h1>'}>
                 <Elearning/>
            </Suspense>
           }/>
           <Route path='/selectedCourse/:id' element={
            <Suspense fallback={'<h1>loading</h1>'}>
                 <Course/>
            </Suspense>
           }/>
           <Route path='/lectures' element={
            <Suspense fallback={'<h1>loading</h1>'}>
                 <Lectures/>
            </Suspense>
           }/>
           <Route path='/buisness' element={
            <Suspense fallback={'<h1>loading</h1>'}>
                 <Buisness/>
            </Suspense>
           }/>
           <Route path='/about' element={
            <Suspense fallback={'<h1>loading</h1>'}>
                 <About/>
            </Suspense>
           }/>
           <Route path='/apply' element={
            <Suspense fallback={'<h1>loading</h1>'}>
                 <Apply/>
            </Suspense>
           }/>
           <Route path='/remote' element={
            <Suspense fallback={'<h1>loading</h1>'}>
                 <Remote/>
            </Suspense>
           }/>
           <Route path='/remote/:id' element={
            <Suspense fallback={'<h1>loading</h1>'}>
                 <Details/>
            </Suspense>
           }/>
         </Routes>
         <Footer/>
      </HashRouter>
    </div>
    </>
  )
}

export default App