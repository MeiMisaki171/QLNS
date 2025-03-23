import React from 'react'
import Sidebar from './Sidebar'
import Content from './Content'

const Body = ({ content }: { content: React.ReactNode }) => {
  return (
    <>
      <Sidebar />
      <Content>{content}</Content>
    </>
  )
}

export default Body
