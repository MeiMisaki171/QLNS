import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <div className='flex flex-col items-center justify-center min-h-screen text-center'>
      <h1 className='text-4xl font-bold text-red-500 mb-4'>404 - Không tìm thấy trang</h1>
      <p className='text-lg text-gray-600 mb-6'>Trang bạn đang tìm kiếm không tồn tại hoặc đã bị di chuyển.</p>
      <Link to='/' className='px-4 py-2 bg-blue-500 text-white rounded-md'>
        Quay về Trang chủ
      </Link>
    </div>
  )
}

export default NotFound
