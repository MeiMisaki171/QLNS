import React, { useEffect, useState } from 'react'
import { PiBell, PiUser, PiSignOut } from 'react-icons/pi'
import { BiCog } from 'react-icons/bi'
import { useLocation, useNavigate } from 'react-router-dom'
import { MenuData } from '../Body/Sidebar/menu'
import { useAuth } from '~/context/AuthContext'
const Header = () => {
  const location = useLocation()
  const [activeTitle, setActiveTitle] = useState<string>('')
  const navigate = useNavigate()

  const { logout } = useAuth()

  const handleLogut = (e: React.FormEvent) => {
    logout()
    navigate('/login')
  }

  useEffect(() => {
    let foundTitle = ''

    MenuData.forEach((item) => {
      if (item.url === location.pathname) {
        foundTitle = item.title as string
      }
      item.children?.forEach((child) => {
        if (child.url === location.pathname) {
          foundTitle = child.title as string
        }
      })
    })

    setActiveTitle(foundTitle)
  }, [location.pathname])

  return (
    <div className='w-[calc(100%-16rem)] bg-white h-[5rem] flex top-0 left-0 justify-between items-center ms-[16rem] p-[1rem] fixed'>
      <div className='flex text-xl font-bold'>{activeTitle}</div>
      <div className='flex flex-row'>
        <PiBell className='text-3xl mr-3 cursor-pointer' />
        <BiCog className='text-3xl mr-3 cursor-pointer' />
        <PiUser className='text-3xl mr-3 cursor-pointer' />
        <PiSignOut className='text-3xl cursor-pointer' onClick={handleLogut} />
      </div>
    </div>
  )
}

export default Header
