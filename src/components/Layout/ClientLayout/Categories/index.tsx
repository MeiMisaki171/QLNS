import React, { useEffect } from 'react'
import { useCategories } from '~/customHooks/useCategories'

const Categories: React.FC = () => {
  const { categories, loading, error, getCategories } = useCategories()

  useEffect(() => {
    getCategories() // Gọi API hoặc lấy dữ liệu khi component mount
  }, [getCategories])

  if (loading) return <p className='text-center'>Loading categories...</p>
  if (error) return <p className='text-center text-red-500'>Error: {error}</p>

  return (
    <div className='col-span-2 px-4 py-2 bg-[#f7f7f7] rounded-[12px]'>
      <h2 className='text-blue-800 text-lg font-bold mb-1'>Phân loại</h2>
      <ul className='space-y-1'>
        {categories.map((category, index) => (
          <li
            key={index}
            className='p-1 bg-[#f7f7f7] rounded hover:bg-blue-200 cursor-pointer text-black text-sm flex items-center'
          >
            {category.icon} <span className='ps-5'>{category.name}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Categories
