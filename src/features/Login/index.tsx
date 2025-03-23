import React, { useEffect, useState } from 'react'
import { FaRegEye } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '~/context/AuthContext'

const Login: React.FC = () => {
  const { login, user } = useAuth()
  const navigate = useNavigate()
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)

  useEffect(() => {
    if (user && user?.role === 'admin') {
      navigate('/admin')
    } else if (user && user?.role === 'user') {
      navigate('/')
    }
  }, [user, navigate])

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    login(username, password)

    if (user?.role === 'admin') {
      navigate('/admin')
    } else if (user?.role === 'user') {
      navigate('/')
    }
  }

  return (
    <div className='flex flex-col items-center justify-center min-h-screen'>
      <h2 className='text-2xl font-bold mb-4'>Đăng Nhập</h2>
      <form onSubmit={handleLogin} className='p-4 border rounded-lg shadow-md'>
        <input
          type='text'
          placeholder='Username'
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className='border p-2 mb-2 w-full'
        />
        <div className='relative'>
          <input
            type={showPassword ? 'password' : 'text'}
            placeholder='Password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className='border p-2 mb-2 w-full'
          />
          <FaRegEye className='flex absolute right-0 top-0' onClick={() => setShowPassword((prev) => !prev)} />
        </div>
        <button type='submit' className='bg-blue-500 text-white px-4 py-2 rounded w-full'>
          Đăng nhập
        </button>
      </form>
    </div>
  )
}

export default Login
