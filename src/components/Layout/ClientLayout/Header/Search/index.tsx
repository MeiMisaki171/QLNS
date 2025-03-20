import React from 'react'
import { FiSearch } from 'react-icons/fi'

const SearchBar = () => {
  return (
    <div className='flex-grow mx-4'>
      <div className='relative w-full flex h-10'>
        {/* Input Tìm Kiếm */}
        <input
          type='text'
          placeholder='Sale off 50%'
          className='w-full p-2 pl-10 pr-14 rounded-[10px] border-2 border-green-400 text-black focus:outline-none focus:ring-2 focus:ring-red-500'
        />
        <FiSearch className='absolute left-3 top-1/2 transform -translate-y-1/2 text-green-500 text-xl' />

        {/* Nút Tìm Kiếm */}
        <button className='bg-green-500 p-1 rounded-[7px] absolute transition text-white right-1 top-1 whitespace-nowrap hover:cursor-pointer'>
          Tìm kiếm
        </button>
      </div>
    </div>
  )
}

export default SearchBar
