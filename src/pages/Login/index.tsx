import React from 'react'
import { useForm } from 'react-hook-form'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '~/context/AuthContext'
import { ILoginForm } from '~/types/ILoginForm'
import bgLogin from '~/assets/img/bg-login.jpeg'
import { Bounce, toast, ToastContainer } from 'react-toastify'
import logoIcon from '~/assets/img/logoIcon.jpg'

const Login: React.FC = () => {
  const { login } = useAuth()
  const navigate = useNavigate()

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<ILoginForm>()

  // Xử lý đăng nhập
  const onSubmit = async (data: ILoginForm) => {
    try {
      await login(data.userName, data.password)
      navigate('/')
    } catch (error) {
      toast.error('Sai tài khoản hoặc mật khẩu!')
    }
  }

  return (
    <div className='grid grid-cols-12 gap-3 h-screen bg-white'>
      <form onSubmit={handleSubmit(onSubmit)} className='col-span-3 flex flex-col p-8 space-y-4 items-center mt-6'>
        <img src={logoIcon} alt='logo' className='mx-auto mb-4' />
        <label className='text-black text-2xl font-medium'>Đăng nhập</label>
        <label className='text-center'>Chào mừng trở lại. Đăng nhập để bắt đầu làm việc.</label>

        <div className='w-full border-t border-gray-300 my-4'></div>

        <div className='flex flex-col w-full'>
          <label htmlFor='username' className='pt-2 pb-1'>
            Tên đăng nhập
          </label>
          <input
            id='userName'
            {...register('userName', { required: 'Vui lòng nhập tên đăng nhập!' })}
            className='block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300 focus:border-blue-600'
          />
          {errors.userName && <p className='text-red-500 text-sm'>{errors.userName.message}</p>}
        </div>

        <div className='flex flex-col w-full pb-5'>
          <label htmlFor='password' className='pt-2 pb-1'>
            Mật khẩu
          </label>
          <input
            type='password'
            id='password'
            autoComplete='false'
            {...register('password', {
              required: 'Vui lòng nhập mật khẩu!'
              // minLength: { value: 6, message: 'Mật khẩu ít nhất 6 ký tự!' }
            })}
            className='block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300 focus:border-blue-600'
          />
          {errors.password && <p className='text-red-500 text-sm'>{errors.password.message}</p>}
        </div>

        <div className='flex flex-row justify-between items-center w-full'>
          <button type='submit' className='bg-blue-500 text-white p-2 rounded hover:bg-blue-700 cursor-pointer'>
            Đăng nhập
          </button>

          <Link to='/forgotPassword' className='text-blue-500 hover:text-blue-700 underline'>
            Quên mật khẩu
          </Link>
        </div>
      </form>
      <div className='col-span-9'>
        <img src={bgLogin} alt='background' className='w-full h-full object-cover' />
      </div>
    </div>
  )
}

export default Login
