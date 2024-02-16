import React, { useEffect, useState } from 'react'
import img1 from '../images/sa.png'
import { Link, NavLink } from 'react-router-dom'
import { IoMdMenu } from "react-icons/io";
import { ImCross } from "react-icons/im";



const Nav = () => {
  const [state, setState] = useState(false) 
  const [nav, setNav] = useState(false)

  const changeNav = () => {
    const Scrolly = window.scrollY
    if(Scrolly > 60) {
      setNav(true)
    } else {
      setNav(false)
    }
  }
  
  useEffect(() => {
     window.addEventListener('scroll', changeNav)
  }, [])

  useEffect(() => {
    window.addEventListener('scroll', changeNav)
 }, [nav])
  return (
      <>
      <nav className={`${nav ? "bg-white shadow-md" : "bg-transparent"} z-10 fixed w-full max-[640px]:border-red`}>
  <div className="mx-auto max-w-7xl sm:px-6 lg:px-0">
    <div className="relative flex h-16 items-center justify-between">
      <div className="flex flex-1 items-center sm:items-stretch sm:justify-start">
        <div className="flex flex-shrink-0 items-center">
          <img className="h-16 w-16" src={img1} alt="Your Company"/>
        </div>
        <div className="hidden sm:ml-6 sm:block">
          <div className="flex items-center justify-center space-x-4">
            <div className='home px-7 ms-8 py-5 ' >
            <NavLink to="/" className="rounded-md text-sm font-medium" aria-current="page">HOME</NavLink>
            <div className='hover-line active-line'></div>
            </div>
            <div className='home px-7 ms-8 py-5'>
            <NavLink to='remote' className="rounded-md text-sm font-medium" aria-current="page">REMOTE JOBS</NavLink>
            <div className='hover-line'></div>
            </div>
            <div className='home px-7 ms-8 py-5'>
            <NavLink to='buisness' className="rounded-md text-sm font-medium" aria-current="page">BUISNESS OUTSOURCING</NavLink>
            <div className='hover-line'></div>
            </div>  
            <div className='home px-7 ms-8 py-5'>
            <NavLink to="e-learning" className="rounded-md text-sm font-medium" aria-current="page">E-LEARNING</NavLink>
            <div className='hover-line'></div>
            </div> 
            <div className='home px-7 ms-8 py-5'>
            <NavLink to='about' className="rounded-md text-sm font-medium" aria-current="page">ABOUT US</NavLink>
     <div className='hover-line'></div>
            </div>
            <div className='home px-7 ms-8 py-5'>
            <a href='#' className="rounded-md text-sm font-medium" aria-current="page">ADMIN</a>
            <div className='hover-line'></div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
        {
          state ?  <button onClick={() => [setState(!state), setNav(false)]} type="button" className="sm:hidden lg:hidden max-[450px]:block relative rounded-full bg-gray-800 p-2 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
        <ImCross size={'15px'}/>
        </button> : <button onClick={() => [setState(!state), setNav(true)]} type="button" className="sm:hidden lg:hidden max-[450px]:block relative rounded-full bg-gray-800 p-2 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
          <IoMdMenu size={'15px'}/>
        </button>
        }
        

        {/* <!-- Profile dropdown --> */}
        <div className="relative ml-3">
          <div>
          <button type="button" class="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800" id="user-menu-button" aria-expanded="false" aria-haspopup="true">
              <span className="absolute -inset-1.5"></span>
              <span className="sr-only">Open user menu</span>
              <img className="h-8 w-8 rounded-full" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt=""/>
            </button>
          </div>
        </div>
      </div>
    </div>
    {/* MOBILE DISPLAY */}
    <div className={`mob-display transition-all ${state ? 'block' : 'hidden'}`}>
      <NavLink to='/' className='res'>
      <h5 className='ms-4 ps-3 rounded-md py-2 mt-4 me-5'>HOME</h5>
      </NavLink>
      <NavLink to='remote'>
      <h5 className='ms-4 ps-3 rounded-md py-2 mt-4 me-5'>REMOTE JOBS</h5>
      </NavLink>
      <NavLink to='buisness'>
      <h5 className='ms-4 ps-3 rounded-md py-2 mt-4 me-5'>BUISNESS OUTSOURCING</h5>
      </NavLink>
      <NavLink to="e-learning" className='res'>
      <h5 className='ms-4 ps-3 rounded-md py-2 mt-4 me-5'>E-LEARNING</h5>
      </NavLink>
      <NavLink to='about'>
      <h5 className='ms-4 ps-3 rounded-md py-2 mt-4 me-5'>ABOUT US</h5>
      </NavLink>
      <NavLink>
      <h5 className='ms-4 ps-3 rounded-md py-2 mt-4 me-5 mb-3'>ADMIN</h5>
      </NavLink>
    </div>
  </div>

  {/* <!-- Mobile menu, show/hide based on menu state. --> */}
    
</nav>
      </>
  
  )
}

export default Nav