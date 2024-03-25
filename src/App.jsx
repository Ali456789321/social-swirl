import { lazy, Suspense } from 'react'
import './index.css'
import { HashRouter, Route, Routes } from 'react-router-dom'
import Nav from './components/Nav'
import Footer from './components/Repeatedcomponets/Footer'
import Register from './components/Register'

const Home = lazy(() => import('./components/Home'))
const Elearning = lazy(() => import('./components/Elearning'))
const Course = lazy(() => import('./components/Course'))
const Lectures = lazy(() => import('./components/Lectures'))
const Buisness = lazy(() => import('./components/Buisness'))
const About = lazy(() => import('./components/About'))
const Remote = lazy(() => import('./components/Remote'))
const Details = lazy(() => import('./components/Remotecomponets/Details'))
const Apply = lazy(() => import('./components/Apply'))
const Admin = lazy(() => import('./components/Admin'))
const Admins = lazy(() => import('./components/Admin/Admins'))
const Adjobs = lazy(() => import('./components/Admin/Adjobs'))
const Adcourse = lazy(() => import('./components/Admin/Adcourse'))
const Joblist = lazy(() => import('./components/Admin/Joblist'))
const Courselist = lazy(() => import('./components/Admin/Courselist'))
const Jobtable = lazy(() => import('./components/Admin/Jobtable'))
const Intern = lazy(() => import('./components/Admin/Intern'))
const Contact = lazy(() => import('./components/Contact/Contact'))
const AllLectures = lazy(() => import('./components/Alllectures'))
const Alljobs = lazy(() => import('./components/Remotecomponets/Alljobs'))
const Courseupdate = lazy(() => import('./components/Admin/Courseupdate'))
const Jobupdate = lazy(() => import('./components/Admin/Jobupdate'))


function App() {


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
            <Route path='/all-lectures' element={
            <Suspense fallback={'<h1>loading</h1>'}>
                 <AllLectures/>
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
           <Route path='/all-jobs' element={
            <Suspense fallback={'<h1>loading</h1>'}>
                 <Alljobs/>
            </Suspense>
           }/>
           <Route path='/remote/:id' element={
            <Suspense fallback={'<h1>loading</h1>'}>
                 <Details/>
            </Suspense>
           }/>
           <Route path='/register/:course' element={
            <Suspense fallback={'<h1>loading</h1>'}>
                 <Register/>
            </Suspense>
           }/>
            <Route path='/admin' element={
            <Suspense fallback={'<h1>loading</h1>'}>
                 <Admin/>
            </Suspense>
           }/>
            <Route path='/user' element={
            <Suspense fallback={'<h1>loading</h1>'}>
                 <Admins/>
            </Suspense>
           }/>
           <Route path='/ad-jobs' element={
            <Suspense fallback={'<h1>loading</h1>'}>
                 <Adjobs/>
            </Suspense>
           }/>
           <Route path='/ad-course' element={
            <Suspense fallback={'<h1>loading</h1>'}>
                 <Adcourse/>
            </Suspense>
           }/>
            <Route path='/job-list' element={
            <Suspense fallback={'<h1>loading</h1>'}>
                 <Joblist/>
            </Suspense>
           }/>
           <Route path='/course-list' element={
            <Suspense fallback={'<h1>loading</h1>'}>
                 <Courselist/>
            </Suspense>
           }/>
            <Route path='/job-table' element={
            <Suspense fallback={'<h1>loading</h1>'}>
                 <Jobtable/>
            </Suspense>
           }/>
            <Route path='/intern-table' element={
            <Suspense fallback={'<h1>loading</h1>'}>
                 <Intern/>
            </Suspense>
           }/>
            <Route path='/intern-table' element={
            <Suspense fallback={'<h1>loading</h1>'}>
                 <Contact/>
            </Suspense>
           }/>
            <Route path='/courseupdate/:name' element={
            <Suspense fallback={'<h1>loading</h1>'}>
                 <Courseupdate/>
            </Suspense>
           }/>
           <Route path='/jobupdate/:name' element={
            <Suspense fallback={'<h1>loading</h1>'}>
                 <Jobupdate/>
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
