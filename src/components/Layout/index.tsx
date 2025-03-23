import React from 'react'
import Header from './Header'
import Body from './Body'

const Layout = ({ content, hideNavbar }: { content: React.ReactNode; hideNavbar?: boolean }) => {
  return (
    <div>
      <Header />
      <Body content={content} hideNavbar={hideNavbar} />
    </div>
  )
}

export default Layout
