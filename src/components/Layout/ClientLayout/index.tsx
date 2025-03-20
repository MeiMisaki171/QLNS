import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '~/components/Layout/ClientLayout/Header'
import Footer from './Footer'
import Navbar from './Header/Navbar'

const ClientLayout = () => {
  return (
    <div className='flex flex-col min-h-screen bg-gray-100'>
      <Navbar></Navbar>
      <Header />
      <main className='bg-white text-white w-full shadow-md'>
        <div className='container mx-auto flex flex-col items-center justify-between p-1 max-w-8xl'>
          <Outlet />
        </div>
      </main>
      <Footer></Footer>
    </div>
  )
}

export default ClientLayout
