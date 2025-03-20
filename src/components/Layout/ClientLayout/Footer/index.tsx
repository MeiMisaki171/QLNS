import React from 'react'
import { Link } from 'react-router-dom'
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className='bg-gray-800 text-white py-10'>
      <div className='container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8'>
        {/* Giới thiệu về doanh nghiệp */}
        <div>
          <h3 className='text-xl font-bold mb-4'>Về chúng tôi</h3>
          <p>
            Chúng tôi là công ty hàng đầu trong lĩnh vực thương mại điện tử, cung cấp sản phẩm chất lượng và dịch vụ uy
            tín.
          </p>
        </div>

        {/* Liên kết nhanh */}
        <div>
          <h3 className='text-xl font-bold mb-4'>Liên kết nhanh</h3>
          <ul>
            <li>
              <Link to='/' className='hover:underline'>
                Trang chủ
              </Link>
            </li>
            <li>
              <Link to='/products' className='hover:underline'>
                Sản phẩm
              </Link>
            </li>
            <li>
              <Link to='/about' className='hover:underline'>
                Giới thiệu
              </Link>
            </li>
            <li>
              <Link to='/contact' className='hover:underline'>
                Liên hệ
              </Link>
            </li>
          </ul>
        </div>

        {/* Chính sách và điều khoản */}
        <div>
          <h3 className='text-xl font-bold mb-4'>Chính sách</h3>
          <ul>
            <li>
              <Link to='/privacy-policy' className='hover:underline'>
                Chính sách bảo mật
              </Link>
            </li>
            <li>
              <Link to='/terms-of-service' className='hover:underline'>
                Điều khoản sử dụng
              </Link>
            </li>
            <li>
              <Link to='/return-policy' className='hover:underline'>
                Chính sách đổi trả
              </Link>
            </li>
            <li>
              <Link to='/warranty-policy' className='hover:underline'>
                Chính sách bảo hành
              </Link>
            </li>
          </ul>
        </div>

        {/* Mạng xã hội */}
        <div>
          <h3 className='text-xl font-bold mb-4'>Kết nối với chúng tôi</h3>
          <div className='flex space-x-4'>
            <a href='https://facebook.com' target='_blank' rel='noopener noreferrer' className='hover:text-gray-400'>
              <FaFacebookF />
            </a>
            <a href='https://instagram.com' target='_blank' rel='noopener noreferrer' className='hover:text-gray-400'>
              <FaInstagram />
            </a>
            <a href='https://twitter.com' target='_blank' rel='noopener noreferrer' className='hover:text-gray-400'>
              <FaTwitter />
            </a>
            <a href='https://youtube.com' target='_blank' rel='noopener noreferrer' className='hover:text-gray-400'>
              <FaYoutube />
            </a>
          </div>
        </div>
      </div>
      <div className='mt-8 text-center border-t border-gray-700 pt-4'>
        <p>&copy; 2025 Tên Công Ty. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer
