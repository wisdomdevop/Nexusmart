import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'

const Layout = () => {
  return (
    <div>
        <section><Navbar/></section>
        <section className='pt-36'>
            <Outlet/>
            </section>
    </div>
  )
}

export default Layout