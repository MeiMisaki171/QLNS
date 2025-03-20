import React, { useEffect } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Navigation, Pagination } from 'swiper/modules'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

// Import hình ảnh từ thư mục assets
import img1 from '~/assets/img/slider-img1.png'
import img2 from '~/assets/img/slider-img2.jpg'
import img3 from '~/assets/img/slider-img3.jpg'
import img4 from '~/assets/img/slider-img4.jpg'

const Slider = () => {
  const slides = [img1, img2, img3, img4]

  useEffect(() => {
    setTimeout(() => {
      document.querySelector('.custom-prev')?.classList.remove('hidden')
      document.querySelector('.custom-next')?.classList.remove('hidden')
    }, 500)
  }, [])

  return (
    <div className='relative w-full max-w-8xl mx-auto mt-1 group hover:cursor-pointer'>
      <Swiper
        modules={[Autoplay, Navigation, Pagination]}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        loop={true}
        pagination={{ clickable: true }}
        navigation={{ nextEl: '.custom-next', prevEl: '.custom-prev' }}
        keyboard={true}
        className='rounded-lg shadow-lg relative z-[1]'
      >
        {slides.map((image, index) => (
          <SwiperSlide key={index}>
            <div className='w-full h-[250px]'>
              <img src={image} alt={`Slide ${index + 1}`} className='w-full h-full object-cover rounded-lg' />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <button className='z-[2] opacity-0 group-hover:opacity-100 custom-prev hidden absolute left-0 top-1/2 transform -translate-y-1/2 bg-black/50 text-white px-1 py-5 hover:bg-black hover:opacity-75 transition active:scale-95 hover:cursor-pointer'>
        <FaChevronLeft size={20} />
      </button>
      <button className='z-[2] opacity-0 group-hover:opacity-100 custom-next hidden absolute right-0 top-1/2 transform -translate-y-1/2 bg-black/50 text-white px-1 py-5 hover:bg-black hover:opacity-75 transition active:scale-95 hover:cursor-pointer'>
        <FaChevronRight size={20} />
      </button>
    </div>
  )
}

export default Slider
