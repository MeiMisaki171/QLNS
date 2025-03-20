import { Routes, Route } from 'react-router-dom'
import React from 'react'
import Cart from '~/features/Client/Cart'
import ProductDetail from '~/features/Client/ProductDetail'
import ClientLayout from '~/components/Layout/ClientLayout'
import Home from '~/features/Client/Home'

const ClientRoutes = () => {
  return (
    <Routes>
      {/* Bọc tất cả routes trong ClientLayout */}
      <Route path='/' element={<ClientLayout />}>
        <Route index element={<Home />} />
        <Route path='product/:id' element={<ProductDetail />} />
        <Route path='cart' element={<Cart />} />
      </Route>
    </Routes>
  )
}

export default ClientRoutes
