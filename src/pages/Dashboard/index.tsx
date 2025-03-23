import React from 'react'
import StaffCount from './StaffCount'
import StaffTrends from './StaffTrends'
import ContractPieChart from './Contract'
import Calendar from './Calendar'

const Dashboard = () => {
  return (
    <div className='grid grid-cols-2 grid-rows-2 gap-4 h-[calc(100vh-7rem)]'>
      <div className='bg-white ps-5 pb-3 h-full'>
        <StaffCount></StaffCount>
      </div>
      <div className='bg-white p-4 h-full'>
        <StaffTrends></StaffTrends>
      </div>
      <div className='bg-white p-4 h-full'>
        <ContractPieChart></ContractPieChart>
      </div>
      <div className='bg-white p-4 h-full'>
        <Calendar />
      </div>
    </div>
  )
}

export default Dashboard
