import React, { ReactNode } from 'react'

interface ContentProps {
  children: ReactNode
}

const Content: React.FC<ContentProps> = ({ children }) => {
  return <div className='bg-[#f1f5f9] ms-[16rem] mt-[5rem] p-[1rem] ps-0'>{children}</div>
}

export default Content
