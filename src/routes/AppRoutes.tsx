import { Routes, Route } from 'react-router-dom'
import React from 'react'
import Layout from '~/components/Layout'
import Dashboard from '~/pages/Dashboard'
import Login from '~/pages/Login'
import ProtectedRoute from './ProtectedRoutes'
import NotFound from '~/pages/Notfound'
import Bank from '~/pages/Bank'
import Company from '~/pages/Company'
import DBHC from '~/pages/DBHC'
import Degree from '~/pages/Degree'
import Major from '~/pages/Major'
import Ethnicity from '~/pages/Ethnicity'
import Status from '~/pages/Status'
import Personnel from '~/pages/Personnel'
import Export from '~/pages/Export'

const routes = [
  { path: '/', content: <Dashboard />, hideNavbar: true },
  { path: '/bank', content: <Bank /> },
  { path: '/company', content: <Company /> },
  { path: '/dbhc', content: <DBHC /> },
  { path: '/degree', content: <Degree /> },
  { path: '/major', content: <Major /> },
  { path: '/ethnicity', content: <Ethnicity /> },
  { path: '/status', content: <Status /> },
  { path: '/personnel', content: <Personnel /> },
  { path: '/export', content: <Export /> }
]

const AppRoutes = () => (
  <Routes>
    <Route path='/login' element={<Login />} />

    <Route element={<ProtectedRoute />}>
      {routes.map(({ path, content, hideNavbar }) => (
        <Route key={path} path={`/${path}`} element={<Layout content={content} hideNavbar={hideNavbar} />} />
      ))}
    </Route>

    <Route path='*' element={<NotFound />} />
  </Routes>
)

export default AppRoutes
