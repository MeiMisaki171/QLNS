import React from 'react'
import Sidebar from './Sidebar'
import Content from './Content'

const Body = ({ content }: { content: React.ReactNode }) => {
  return (
    <div>
      <Sidebar />
      <Content>{content}</Content> {/* Correct way to pass children */}
    </div>
  )
}

export default Body
