import React from 'react'
import Header from './Header'
import Body from './Body'

const Layout = ({ content }: { content: React.ReactNode }) => {
  return (
    <div>
      <Header />
      <Body content={content} />
    </div>
  )
}

export default Layout
