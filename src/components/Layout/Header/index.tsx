import React, { useEffect, useState } from 'react'
import { PiBell, PiUser, PiSignOut } from 'react-icons/pi'
import { BiCog } from 'react-icons/bi'
import { useLocation } from 'react-router-dom'
import { MenuData } from '../Body/Sidebar/menu'
const Header = () => {
  const location = useLocation()
  const [activeTitle, setActiveTitle] = useState<string>('')

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
        <PiSignOut className='text-3xl cursor-pointer' />
      </div>
    </div>
  )
}

export default Header
