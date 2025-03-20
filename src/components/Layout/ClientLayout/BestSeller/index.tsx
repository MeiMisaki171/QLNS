import React, { useEffect } from 'react'
import { FaChevronLeft, FaChevronRight, FaFire, FaStar } from 'react-icons/fa6'
import { Navigation, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import { useBestSeller } from '~/customHooks/useBestSeller'

const BestSeller: React.FC = () => {
  const { bestSeller, loading, error, getBestSeller } = useBestSeller()

  useEffect(() => {
    getBestSeller() // Gọi API hoặc lấy dữ liệu khi component mount
  }, [getBestSeller])

  if (loading) return <p className='text-center'>Loading categories...</p>
  if (error) return <p className='text-center text-red-500'>Error: {error}</p>

  return (
    <div className='col-span-6 row-span-2 bg-[#f7f7f7] rounded-[12px] px-4 py-2'>
      <div className='flex'>
        <h2 className='text-blue-800 text-lg font-bold me-2'>Best Seller</h2>
      </div>
      <div className='relative w-full h-[190px] bg-red-200 group'>
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
          {bestSeller.map((product) => (
            <SwiperSlide key={product.id}>
              <div className='bg-white p-2 shadow-md h-[190px] w-full flex flex-col justify-center items-center'>
                <img src={product.imgUrl} alt='Product' className=' object-cover rounded-md h-[100px]' />
                <p className='text-red-500 font-semibold mt-2'>{product.price} VND</p>
                <span className='text-gray-400 text-xs mb-1'>Đã bán: {product.sold}</span>
                <div className='flex'>
                  {[1, 2, 3, 4, 5].map((star) => {
                    // Xác định màu của sao dựa trên rating
                    // Nếu rating >= star, sao có màu vàng đầy đủ
                    // Nếu star-1 < rating < star, sao có màu vàng một phần
                    // Nếu rating <= star-1, sao có màu xám

                    // Tính phần trăm màu vàng cho mỗi ngôi sao
                    let percent = 0
                    if (product.rate >= star) {
                      percent = 100
                    } else if (product.rate > star - 1) {
                      percent = (product.rate - (star - 1)) * 100
                    }

                    return (
                      <div key={star} className='relative'>
                        {/* Sao xám nền */}
                        <FaStar className='text-gray-300' />

                        {/* Overlay sao vàng với chiều rộng phần trăm */}
                        {percent > 0 && (
                          <div
                            className='absolute top-0 left-0 overflow-hidden text-yellow-400'
                            style={{ width: `${percent}%` }}
                          >
                            <FaStar />
                          </div>
                        )}
                      </div>
                    )
                  })}
                </div>
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

export default BestSeller
