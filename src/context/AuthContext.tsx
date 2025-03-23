import React, { createContext, useContext, useState, useEffect } from 'react'
import { toast } from 'react-toastify'
interface User {
  username: string
  role: 'admin' | 'user'
}

interface AuthContextType {
  user: User | null
  login: (username: string, password: string) => void
  logout: () => void
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(() => {
    const storedUser = sessionStorage.getItem('user')
    return storedUser ? JSON.parse(storedUser) : null
  })

  useEffect(() => {
    sessionStorage.setItem('user', JSON.stringify(user))
  }, [user])

  const login = (username: string, password: string) => {
    let loggedInUser: User | null = null

    //Call api và check authen tại đây
    if (username === 'admin' && password === 'admin123') {
      loggedInUser = { username, role: 'admin' }
    } else if (username === 'user' && password === '1') {
      loggedInUser = { username, role: 'user' }
    } else {
      loggedInUser = null
    }

    if (loggedInUser) {
      setUser(loggedInUser)
      toast.success('Đăng nhập thành công')
    } else {
      toast.error('Tài khoản hoặc mật khẩu không chính xác')
    }
  }

  const logout = () => {
    setUser(null)
    sessionStorage.removeItem('user')
  }

  return (
    <>
      <AuthContext.Provider value={{ user, login, logout }}>{children}</AuthContext.Provider>
    </>
  )
}

export const useAuth = () => {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}
