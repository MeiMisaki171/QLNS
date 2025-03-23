import { ReactElement } from 'react'
import { BiHome } from 'react-icons/bi'
import { FaBars } from 'react-icons/fa'
import { RiBankLine } from 'react-icons/ri'
import { HiOutlineBuildingOffice2 } from 'react-icons/hi2'
import { FaRegAddressBook } from 'react-icons/fa6'
import { LuBookText } from 'react-icons/lu'
import { FiBookOpen } from 'react-icons/fi'
import { GoPeople } from 'react-icons/go'
import { IoFlashOutline } from 'react-icons/io5'
import { FaRegUser } from 'react-icons/fa'
import { HiOutlineDocumentArrowDown } from 'react-icons/hi2'
export interface IMenuData {
  icon?: ReactElement
  title?: ReactElement | string
  url?: string
  children?: IMenuData[]
}

export const MenuData: IMenuData[] = [
  {
    icon: <BiHome className='me-[0.5rem]  text-[1.2rem]' />,
    title: 'Dashboard',
    url: '/'
  },
  {
    icon: <FaBars className='me-[0.5rem]  text-[1.2rem]' />,
    title: 'Danh mục',
    children: [
      {
        icon: <RiBankLine className='me-[0.5rem]  text-[1.2rem]' />,
        title: 'Ngân hàng',
        url: '/bank'
      },
      {
        icon: <HiOutlineBuildingOffice2 className='me-[0.5rem]  text-[1.2rem]' />,
        title: 'Công ty',
        url: '/company'
      },
      {
        icon: <FaRegAddressBook className='me-[0.5rem]  text-[1.2rem]' />,
        title: 'Địa bàn hành chính',
        url: '/dbhc'
      },
      {
        icon: <LuBookText className='me-[0.5rem]  text-[1.2rem]' />,
        title: 'Trình độ học vấn',
        url: '/degree'
      },
      {
        icon: <FiBookOpen className='me-[0.5rem]  text-[1.2rem]' />,
        title: 'Chuyên ngành',
        url: '/major'
      },
      {
        icon: <GoPeople className='me-[0.5rem]  text-[1.2rem]' />,
        title: 'Dân tộc',
        url: '/ethnicity'
      },
      {
        icon: <IoFlashOutline className='me-[0.5rem]  text-[1.2rem]' />,
        title: 'Trạng thái làm việc',
        url: '/status'
      }
    ]
  },
  {
    icon: <FaRegUser className='me-[0.5rem]  text-[1.2rem]' />,
    title: 'Nhân sự',
    url: '/personnel'
  },
  {
    icon: <HiOutlineDocumentArrowDown className='me-[0.5rem]  text-[1.2rem]' />,
    title: 'Báo cáo',
    url: '/export'
  }
]
