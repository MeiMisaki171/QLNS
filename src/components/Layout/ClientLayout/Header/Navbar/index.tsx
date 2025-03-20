import React from 'react'
import { Link } from 'react-router-dom'
import { FaAngleDown, FaEarthAmericas, FaGripLinesVertical, FaSquareFacebook } from 'react-icons/fa6'
import { FaInstagram, FaRegQuestionCircle } from 'react-icons/fa'
import { IoMdNotifications } from 'react-icons/io'
import shoesImg from '~/assets/img/shoes.png'

const Navbar = () => {
  return (
    <nav className='hidden md:flex gap-6 h-14 bg-orange-500 relative text-white'>
      <div className='fixed left-8 flex'>
        <Link to='/' className='hover:text-gray-300 text-black-500'>
          Trung tâm người bán
        </Link>
        <div className='w-[1px] bg-gray-300 m-2 mt-1 mb-1'></div>
        <span className='hover:text-gray-300 text-black-500 flex items-center'>
          Theo dõi trên
          <FaSquareFacebook className='hover:cursor-pointer me-2 ms-2' />
          <FaInstagram className='hover:cursor-pointer' />
        </span>
      </div>
      <div className='left-1/2 -translate-x-1/2 absolute bottom-2 flex items-center'>
        <img src={shoesImg} alt='shoes' className='h-[40px] me-4' />
        <span className='text-2xl font-semibold italic animate-blink'>
          Giảm giá lên đến 30% đối với các sản phẩm giày dép
        </span>
        <button className='bg-white text-orange-500 text-xl font-semibold px-4 py-1 pb-1.5 ms-2 rounded-xl hover:cursor-pointer'>
          Xem ngay
        </button>
      </div>
      <div className='fixed right-8 flex'>
        <Link to='/about' className='hover:text-gray-300 text-black-500 flex flex-row items-center'>
          <IoMdNotifications className='me-1' />
          Thông báo
        </Link>
        <div className='w-[1px] bg-gray-300 m-2 mt-1 mb-1'></div>
        <Link to='/contact' className='hover:text-gray-300 text-black-500 flex flex-row items-center'>
          <FaRegQuestionCircle className='me-1' /> Trợ giúp
        </Link>
        <div className='w-[1px] bg-gray-300 m-2 mt-1 mb-1'></div>
        <span className='hover:text-gray-300 text-black-500 flex flex-row items-center hover:cursor-pointer'>
          <FaEarthAmericas className='me-1' /> Ngôn ngữ <FaAngleDown className='ms-2' />
        </span>
      </div>
    </nav>
  )
}

export default Navbar
