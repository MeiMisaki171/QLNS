import React, { useEffect } from 'react'
import userImg from '~/assets/img/userImg.jpg'
import { useAuth } from '~/context/AuthContext'
import { BsCart2 } from 'react-icons/bs'
import { FaRegStar } from 'react-icons/fa6'
import { CiSquareCheck } from 'react-icons/ci'
import coinImg from '~/assets/img/coinImg.png'
import useTimeOfDay from '~/customHooks/useTimeOfDay'
import { Link } from 'react-router-dom'

const UserComponent: React.FC = () => {
  const { user, logout } = useAuth()
  const timeOfDay = useTimeOfDay()
  return (
    <div className='col-span-2 px-4 py-2 bg-[#f7f7f7] rounded-[12px] text-black'>
      <div className='flex items-center gap-4'>
        <img src={userImg} alt='userImg' className='h-12 w-12 rounded-full' />
        <div className='flex flex-col'>
          <span className='font-bold text-[18px]'>Chào {timeOfDay}</span>
          {!user && (
            <div className='flex gap-2 text-sm text-gray-600'>
              <span className='text-[12px]'>Đăng ký</span>
              <div className='w-[1px] bg-gray-300 m-1'></div>
              <span className='text-[12px]'>Mở cửa hàng</span>
            </div>
          )}
        </div>
      </div>
      <span className='mt-5 mb-2 flex items-center justify-center font-semibold animate-blinkRedText'>
        Xem nhiều nội dung hơn
      </span>
      {!user && (
        <div className='flex justify-center items-center '>
          <button className='bg-orange-500 px-10 py-2.5 rounded-xl font-bold text-white hover:cursor-pointer active:bg-orange-400'>
            Đăng nhập ngay
          </button>
        </div>
      )}
      <div className='flex justify-center items-center mt-5'>
        {/* Đổi thành thẻ Link để dẫn đến trang đăng nhập nếu chưa đăng nhập, dẫn đến trang tương ứng nếu đã đăng nhập */}
        <div className='flex flex-col justify-center items-center me-5 hover:cursor-pointer'>
          <BsCart2 className='text-[24px]' />
          <span>Giỏ hàng</span>
        </div>
        <div className='flex flex-col justify-center items-center hover:cursor-pointer'>
          <FaRegStar className='text-[24px]' />
          <span>Yêu thích</span>
        </div>
      </div>
      <div className='flex justify-around items-center mt-5'>
        <div className='flex flex-col'>
          <span className='text-xl font-bold text-orange-700'>Điểm danh</span>
          <span className='text-[12px] text-gray-500'>Nhận ngay ưu đãi lớn</span>
          <Link
            to={'/checkin'}
            className='bg-red-500 w-[80px] text-white rounded-xs flex justify-center mt-2 text-[14px] py-1 active:bg-red-400'
          >
            Đến ngay
          </Link>
        </div>
        <div className='flex items-center justify-center'>
          <img src={coinImg} alt='coinImg' className='h-16 w-16 rounded-full' />
        </div>
      </div>
    </div>
  )
}

export default UserComponent
