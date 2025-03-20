import React from 'react'
import { Link } from 'react-router-dom'
import { useAuth } from '~/context/AuthContext'
import Logo from './Logo'
import Navbar from './Navbar'
import { FiUser, FiShoppingCart, FiSettings, FiGlobe } from 'react-icons/fi'
import SearchBar from './Search'
import { FaCamera } from 'react-icons/fa6'

const Header = () => {
  const { user, logout } = useAuth()

  return (
    <header className='bg-[#ffffff] text-black w-full sticky top-0 left-0 shadow-md z-[100]'>
      <div className='bg-[#ffffff]'>
        <div className='container mx-auto flex items-center justify-between p-1 max-w-8xl pb-0'>
          <Logo />
          {/* Thanh tìm kiếm */}
          <SearchBar></SearchBar>
          <div className='flex items-center gap-4 bg-orange-500 h-10 rounded-[10px] text-white p-4'>
            <FaCamera></FaCamera> Tìm kiếm bằng hình ảnh
          </div>
        </div>
        <ul className='container mx-auto flex items-center max-w-8xl text-red-600 text-[13px]'>
          <li className='ml-[115px] hover:cursor-pointer hover:underline'>Sony ZVE-10</li>
          <li className='ms-4 hover:cursor-pointer hover:underline'>Thời trang nữ</li>
          <li className='ms-4 hover:cursor-pointer hover:underline'>Truyện trinh thám</li>
          <li className='ms-4 hover:cursor-pointer hover:underline'>Thiết bị điện tử</li>
          <li className='ms-4 hover:cursor-pointer hover:underline'>Trang trí nội thất</li>
          <li className='ms-4 hover:cursor-pointer hover:underline'>Thực phẩm chức năng</li>
          <li className='ms-4 hover:cursor-pointer hover:underline'>Giày nam</li>
          <li className='ms-4 hover:cursor-pointer hover:underline'>Ô tô điện</li>
          <li className='ms-4 hover:cursor-pointer hover:underline'>Tủ lạnh, ti vi, máy giặt</li>
        </ul>
      </div>
    </header>
  )
}

export default Header
