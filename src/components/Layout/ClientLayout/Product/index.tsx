import React from 'react'
import { FaArrowUp } from 'react-icons/fa6'
import { useProduct } from '~/customHooks/useProduct'
import { formatQuantity } from '~/utils/formatFunc'

const ProductList: React.FC = () => {
  const { products, loading, error, lastProductRef } = useProduct()
  const [showScrollTop, setShowScrollTop] = React.useState(false)

  React.useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className=''>
      <h2 className='text-xl text-black font-bold mb-4'>Danh sách sản phẩm</h2>

      {error && <p className='text-red-500 text-center'>{error}</p>}

      <div className='grid grid-cols-6 gap-4'>
        {products.map((product, index) => {
          const isLastItem = index === products.length - 1
          return (
            <div
              key={product.id}
              ref={isLastItem ? lastProductRef : null}
              className='bg-white shadow-md rounded-lg p-3 text-black relative h-full min-h-[250px] hover:cursor-pointer 
             transform transition duration-300 hover:scale-105 hover:shadow-lg'
            >
              <img src={product.imgUrl} alt={product.describe} className='w-full h-32 object-cover rounded-md' />
              <span className='absolute px-1 top-1 right-0 bg-gray-100 text-red-500'>-{product.discount}%</span>
              <h3 className='text-sm font-semibold mt-2 mb-10'>
                {product.tag ? <span className='bg-red-500 text-white me-1 px-1'>{product.tag}</span> : <></>}
                {product.describe}
              </h3>
              {product.voucher ? (
                <span className='absolute bottom-7 text-[13px] bg-orange-400 px-1 text-white'>
                  Giảm {product.voucher}k
                </span>
              ) : (
                <></>
              )}
              <span className='text-red-500 absolute font-bold text-[16px] left-3 bottom-1'>
                {product.price.toLocaleString()} VND
              </span>
              <span className='text-xs absolute right-2 bottom-2'>Đã bán {formatQuantity(product.quantity)}</span>
            </div>
          )
        })}
      </div>

      {loading && <p className='text-center mt-4'>Đang tải sản phẩm...</p>}

      {showScrollTop && (
        <button
          className='fixed bottom-5 right-5 bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-blue-700 transition-all'
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          <FaArrowUp size={20} />
        </button>
      )}
    </div>
  )
}

export default ProductList
