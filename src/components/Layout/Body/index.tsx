import React from 'react'
import Sidebar from './Sidebar'
import Content from './Content'
import ContentWithNavbar from './ContentWithNavbar'

const Body = ({ content, hideNavbar }: { content: React.ReactNode; hideNavbar?: boolean }) => {
  return (
    <>
      <Sidebar />
      {hideNavbar ? <Content>{content}</Content> : <ContentWithNavbar>{content}</ContentWithNavbar>}
    </>
  )
}

export default Body
