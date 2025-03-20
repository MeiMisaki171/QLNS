import React, { ReactNode } from 'react'

interface ContentProps {
  children: ReactNode
}

const Content: React.FC<ContentProps> = ({ children }) => {
  return (
    <div>
      <div>Navigation</div>
      {children}
    </div>
  )
}

export default Content
