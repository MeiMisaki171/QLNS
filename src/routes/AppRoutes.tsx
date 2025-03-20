import { Routes, Route } from 'react-router-dom'
import React from 'react'
import Layout from '~/components/Layout'
import Dashboard from '~/pages/Dashboard'
import Login from '~/pages/Login'
import ProtectedRoute from './ProtectedRoutes'

const routes = [{ path: '', content: <Dashboard /> }]

const AppRoutes = () => (
  <Routes>
    <Route path='/login' element={<Login />} />

    {/* Protected Routes */}
    <Route element={<ProtectedRoute />}>
      {routes.map(({ path, content }) => (
        <Route key={path} path={`/${path}`} element={<Layout content={content} />} />
      ))}
    </Route>
  </Routes>
)

export default AppRoutes
