import React from 'react'
import { Pie } from 'react-chartjs-2'
import { Chart as ChartJS, ArcElement, Tooltip, Legend, Title } from 'chart.js'

ChartJS.register(ArcElement, Tooltip, Legend, Title)

const ContractPieChart = () => {
  const data = {
    labels: ['Thử việc', 'HĐ Không xác định thời hạn', 'HĐ Xác định thời hạn', 'HĐ Mùa vụ'],
    datasets: [
      {
        data: [10, 40, 30, 20],
        backgroundColor: ['#f87171', '#60a5fa', '#34d399', '#fbbf24'],
        hoverOffset: 10
      }
    ]
  }

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'right' as 'right',
        labels: {
          padding: 10, // Reduced padding between legend items
          boxWidth: 50, // Optional: making the color boxes smaller
          font: {
            size: 14 // Optional: reducing font size
          }
        }
      },
      title: {
        display: true,
        text: 'Thống kê hợp đồng theo loại hợp đồng',
        align: 'start' as 'start',
        font: { size: 17 },
        color: '#000'
      }
    },
    layout: {
      padding: {
        right: 0 // Maintains some spacing between chart and legend
      }
    }
  }

  return (
    <div className='w-full h-full '>
      <div className='w-[100%] h-[100%] max-h-[600px]'>
        <Pie data={data} options={options} />
      </div>
    </div>
  )
}

export default ContractPieChart
