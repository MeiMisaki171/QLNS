import { Routes, Route } from 'react-router-dom'
import React from 'react'
import AdminDashboard from '~/features/Admin'
import AdminRoute from './AdminRoute'

const AdminRoutes = () => {
  return (
    <AdminRoute>
      <Routes>
        <Route path='/' element={<AdminDashboard />} />
      </Routes>
    </AdminRoute>
  )
}

export default AdminRoutes
