import React, { useEffect } from 'react'
import { FaChevronLeft, FaChevronRight, FaFire, FaStar } from 'react-icons/fa6'
import { Navigation, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import { useLiveStream } from '~/customHooks/useLiveStream'
import LiveStreamWave from './LiveStreamWave'

const LiveStream: React.FC = () => {
  const { liveStream, loading, error, getLiveStream } = useLiveStream()

  useEffect(() => {
    getLiveStream() // Gọi API hoặc lấy dữ liệu khi component mount
  }, [getLiveStream])

  if (loading) return <p className='text-center'>Loading categories...</p>
  if (error) return <p className='text-center text-red-500'>Error: {error}</p>

  return (
    <div className='col-span-6 row-span-2 bg-[#f7f7f7] rounded-[12px] px-4 py-2'>
      <div className='flex'>
        <h2 className='text-blue-800 text-lg font-bold me-2'>Live Now</h2>
      </div>
      <div className='relative w-full h-[190px] bg-green-400 group'>
        <Swiper
          spaceBetween={10}
          slidesPerView={3}
          loop={true}
          navigation={{ nextEl: '.cus-next--btn', prevEl: '.cus-prev--btn' }}
          modules={[Navigation, Pagination]}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 2 },
            1280: { slidesPerView: 3 }
          }}
          className='w-full h-full relative'
        >
          {liveStream.map((person) => (
            <SwiperSlide key={person.id}>
              <div className='bg-white p-2 shadow-md h-[190px] w-full flex flex-col justify-center items-center relative hover:cursor-pointer'>
                <div className='relative w-full h-full'>
                  <img src={person.imgUrl} alt='Live' className='object-cover rounded-md w-full h-full' />
                  <div className='absolute h-[20px] w-[30px] top-1 left-0 bg-red-600 text-white text-xs font-bold px-2 py-1 flex items-center gap-1 shadow-lg'>
                    <LiveStreamWave />
                  </div>
                </div>

                <span className='text-white absolute bottom-2 text-[14px] right-3'>{person.name}</span>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <button className='z-[2] opacity-0 group-hover:opacity-100 hover:cursor-pointer bg-gray-300 rounded-full flex justify-center items-center h-[30px] w-[30px] cus-prev--btn absolute left-[-15px] top-1/2 transform -translate-y-1/2 '>
          <FaChevronLeft size={20} />
        </button>
        <button className='z-[2] opacity-0 group-hover:opacity-100 hover:cursor-pointer bg-gray-300 rounded-full flex justify-center items-center h-[30px] w-[30px] cus-next--btn absolute right-[-15px] top-1/2 transform -translate-y-1/2 '>
          <FaChevronRight size={20} />
        </button>
      </div>
    </div>
  )
}

export default LiveStream
