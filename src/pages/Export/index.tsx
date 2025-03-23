import React from 'react'
import { FaPlus } from 'react-icons/fa'
import { FaArrowRotateRight } from 'react-icons/fa6'
import { MdOutlineFileDownload } from 'react-icons/md'
import { GiBackwardTime } from 'react-icons/gi'

const Export = () => {
  return (
    <div className='flex justify-end items-center mb-4 p-[1rem] border-1 border-gray-300'>
      <button className='px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600  flex items-center cursor-pointer me-3'>
        <MdOutlineFileDownload className='me-1 text-xl' />
        Tải file mẫu
      </button>
      <button className='px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600  flex items-center cursor-pointer me-3'>
        <FaPlus className='me-1' /> Tạo mới import
      </button>
      <button className='px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600  flex items-center cursor-pointer me-3'>
        <FaArrowRotateRight className='me-1' />
        Quay lại
      </button>
      <button className='px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600  flex items-center cursor-pointer'>
        <GiBackwardTime className='me-1 text-xl' />
        Lịch sử
      </button>
    </div>
  )
}

export default Export
