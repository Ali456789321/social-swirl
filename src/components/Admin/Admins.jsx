import React from 'react'
import { HashRouter, Routes } from 'react-router-dom'
import Adminnav from './Adminnav'

const Admins = () => {
  return (
    <>
     <Adminnav/>
     <h1 className='text-center text-6xl max-sm:text-3xl font-semibold bg-gradient-to-r from-social_left to-social_right bg-clip-text text-transparent mt-20 mb-40'>Welcome Waleed</h1>
    </>
  )
}

export default Admins