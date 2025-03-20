import React from 'react'
import { Link } from 'react-router-dom'
import logo from '~/assets/img/FPT-IS-logo.svg'

const Logo = () => {
  return (
    <Link to='/' className='flex gap-2 text-xl font-semibold items-center'>
      <img src={logo} alt='Commerce Logo' className='w-24 h-auto max-w-[120px]' />
    </Link>
  )
}

export default Logo
