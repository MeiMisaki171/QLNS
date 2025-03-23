import { ReactElement } from 'react'
import { BiHome } from 'react-icons/bi'

interface IMenuData {
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
    icon: <BiHome className='me-[0.5rem]  text-[1.2rem]' />,
    title: 'Danh mục',
    children: [
      {
        icon: <BiHome className='me-[0.5rem]  text-[1.2rem]' />,
        title: 'Ngân hàng',
        url: '/bank'
      },
      {
        icon: <BiHome className='me-[0.5rem]  text-[1.2rem]' />,
        title: 'Công ty',
        url: '/company'
      },
      {
        icon: <BiHome className='me-[0.5rem]  text-[1.2rem]' />,
        title: 'Địa bàn hành chính',
        url: '/dbhc'
      },
      {
        icon: <BiHome className='me-[0.5rem]  text-[1.2rem]' />,
        title: 'Trình độ học vấn',
        url: '/degree'
      },
      {
        icon: <BiHome className='me-[0.5rem]  text-[1.2rem]' />,
        title: 'Chuyên ngành',
        url: '/major'
      },
      {
        icon: <BiHome className='me-[0.5rem]  text-[1.2rem]' />,
        title: 'Dân tộc',
        url: '/ethnicity'
      },
      {
        icon: <BiHome className='me-[0.5rem]  text-[1.2rem]' />,
        title: 'Trạng thái làm việc',
        url: '/status'
      }
    ]
  },
  {
    icon: <BiHome className='me-[0.5rem]  text-[1.2rem]' />,
    title: 'Nhân sự',
    url: '/personnel'
  },
  {
    icon: <BiHome className='me-[0.5rem]  text-[1.2rem]' />,
    title: 'Báo cáo',
    url: '/export'
  }
]
