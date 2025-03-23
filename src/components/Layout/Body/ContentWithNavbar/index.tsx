import React, { ReactNode } from 'react'
import { MenuData } from '../Sidebar/menu'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import useMenuPath from '~/customHooks/useMenuPath'
import { FaChevronRight } from 'react-icons/fa'

interface ContentProps {
  children: ReactNode
}

const ContentWithNavbar: React.FC<ContentProps> = ({ children }) => {
  const location = useLocation()
  const menuPath = useMenuPath(location.pathname, MenuData)
  const navigate = useNavigate()
  const handleNavigate = () => {
    navigate(0)
  }
  const breadcrumbs = menuPath.split(' > ')
  return (
    <div className='bg-[#f1f5f9] ms-[16rem] mt-[5rem] p-[1rem] ps-0 '>
      <div className='h-[calc(100vh-7rem)] bg-white'>
        <div className='h-[50px] flex items-center p-[1rem] border-1 border-gray-300'>
          <Link to={'/'} className='hover:underline'>
            Trang chủ
          </Link>
          <span className='mx-1'>
            <FaChevronRight />
          </span>
          {breadcrumbs.map((crumb, index) => (
            <span key={index} className='inline-flex items-center'>
              {/* Nếu là phần tử cuối cùng thì cho phép nhấn */}
              {index === breadcrumbs.length - 1 ? (
                <span className=' cursor-pointer hover:underline' onClick={handleNavigate}>
                  {crumb}
                </span>
              ) : (
                <span>{crumb}</span> // Chỉ là chữ tĩnh
              )}
              {/* Thêm dấu ">" nếu không phải phần cuối */}
              {index < breadcrumbs.length - 1 && (
                <span className='mx-1'>
                  <FaChevronRight />
                </span>
              )}
            </span>
          ))}
        </div>
        {children}
      </div>
    </div>
  )
}

export default ContentWithNavbar
