import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import logoImg from '~/assets/img/logoIcon.jpg'
import { BiHome } from 'react-icons/bi'
import { MenuData } from './menu'
import { FaChevronDown } from 'react-icons/fa'

const Sidebar = () => {
  const location = useLocation()
  const activeMenu = location.pathname
  const [openMenus, setOpenMenus] = useState<{ [key: number]: boolean }>({})

  // Hàm toggle menu con
  const toggleMenu = (index: number) => {
    setOpenMenus((prev) => ({ ...prev, [index]: !prev[index] }))
  }

  return (
    <div className='fixed top-0 left-0 z-10 w-[16rem] h-[100vh] text-[1rem] p-[1rem] pt-0 bg-[#f1f5f9]'>
      <div className='h-[5rem] bg-[white] flex justify-center items-center mt-0 mx-[-1rem] mb-[1rem]'>
        <img src={logoImg} alt='logoImg' className='h-[80px] w-[80px]' />
      </div>
      <div className='h-[calc(100%-6rem)] overflow-y-auto scrollbar-thin scrollbar-colored'>
        <ul className='bg-white list-none p-[0.5rem] m-0 flex flex-col items-start cursor-pointer rounded-[0.5rem] min-h-[100%]'>
          {MenuData.map((item, index) => {
            const isOpen = openMenus[index]
            const isActive = activeMenu === item.url

            return (
              <li key={index} className='bg-white w-full'>
                <div
                  className={`flex items-center justify-between min-h-[3rem] p-[0.5rem] cursor-pointer 
                ${isActive ? 'text-[#3b82f6]' : 'text-[#4b5563]'}`}
                  onClick={() => item.children && toggleMenu(index)}
                >
                  <Link to={item.url || '#'} className='flex items-center w-full'>
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                  {item.children && (
                    <span className={`transition-transform ${isOpen ? 'rotate-180' : 'rotate-0'}`}>
                      <FaChevronDown />
                    </span>
                  )}
                </div>

                {/* Hiển thị menu con nếu được mở */}
                {item.children && isOpen && (
                  <ul className='pl-4'>
                    {item.children.map((child, childIndex) => {
                      const isChildActive = activeMenu === child.url // Kiểm tra xem menu con có được chọn không
                      return (
                        <li key={childIndex} className='bg-white w-full'>
                          <Link
                            to={child.url || '#'}
                            className={`flex items-center min-h-[3rem] p-[0.5rem] 
                          ${isChildActive ? 'text-[#3b82f6] font-bold' : 'text-[#4b5563]'}`}
                          >
                            {child.icon}
                            <span>{child.title}</span>
                          </Link>
                        </li>
                      )
                    })}
                  </ul>
                )}
              </li>
            )
          })}
        </ul>
      </div>
    </div>
  )
}

export default Sidebar
