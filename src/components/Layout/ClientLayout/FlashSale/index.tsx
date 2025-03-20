import React, { useEffect } from 'react'
import { FaChevronLeft, FaChevronRight, FaFire } from 'react-icons/fa6'
import { Navigation, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import { useFlashSale } from '~/customHooks/useFlashSale'
import CountdownTimer from '../../Body/CountdownTimer'

const FlashSale: React.FC = () => {
  const { flashSale, loading, error, getFlashSale } = useFlashSale()

  useEffect(() => {
    getFlashSale() // Gọi API hoặc lấy dữ liệu khi component mount
  }, [getFlashSale])

  if (loading) return <p className='text-center'>Loading categories...</p>
  if (error) return <p className='text-center text-red-500'>Error: {error}</p>

  return (
    <div className='col-span-2 px-4 py-2 bg-[#f7f7f7] rounded-[12px] max-w-full overflow-hidden h-fit'>
      <div className='flex'>
        <h2 className='text-blue-800 text-lg font-bold me-2'>Flash Sale</h2>
        <CountdownTimer targetTime='2025-03-10 23:59:59' />
      </div>
      <div className='relative w-full h-[190px] bg-blue-100 group'>
        <Swiper
          spaceBetween={25}
          slidesPerView={5}
          loop={true}
          navigation={{ nextEl: '.custom-next--btn', prevEl: '.custom-prev--btn' }}
          modules={[Navigation, Pagination]}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
            1280: { slidesPerView: 5 }
          }}
          className='w-full h-full relative'
        >
          {flashSale.map((product) => (
            <SwiperSlide key={product.id}>
              <div className='bg-white p-2 shadow-md h-[190px] w-full flex flex-col justify-center items-center'>
                {(product.count / product.total) * 100 > 50 && (
                  <div className='absolute top-2 z-10 right-[-20px] from-red-600 to-orange-300 bg-gradient-to-r text-white text-xs font-bold px-2 py-1 rounded-full flex items-center gap-1 shadow-lg'>
                    <FaFire size={14} />
                    HOT
                  </div>
                )}
                <div className='absolute top-2 z-10 left-0 bg-red-500 text-white text-[14px] font-bold px-1 flex items-center gap-1 shadow-lg'>
                  {product.salePercent}%
                </div>
                <img src={product.imgUrl} alt='Product' className=' object-cover rounded-md h-[100px]' />
                <p className='text-red-500 text-lg font-semibold mt-2'>{product.price} VND</p>
                <div className='w-full h-3 bg-gray-300 rounded-full overflow-hidden mt-2'>
                  <div
                    className='h-full from-red-500 to-orange-400 bg-gradient-to-r'
                    style={{ width: `${(product.count / product.total) * 100}%` }}
                  ></div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <button className='z-[2] opacity-0 group-hover:opacity-100 hover:cursor-pointer bg-gray-300 rounded-full flex justify-center items-center h-[30px] w-[30px] custom-prev--btn absolute left-[-15px] top-1/2 transform -translate-y-1/2 '>
          <FaChevronLeft size={20} />
        </button>
        <button className='z-[2] opacity-0 group-hover:opacity-100 hover:cursor-pointer bg-gray-300 rounded-full flex justify-center items-center h-[30px] w-[30px] custom-next--btn absolute right-[-15px] top-1/2 transform -translate-y-1/2 '>
          <FaChevronRight size={20} />
        </button>
      </div>
    </div>
  )
}

export default FlashSale
