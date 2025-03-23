import React from 'react'
import { Bar } from 'react-chartjs-2'
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js'

// Đăng ký các thành phần của Chart.js
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend)

const StaffCount = () => {
  // Dữ liệu mẫu: Số lượng nhân sự trong 12 tháng
  const data = {
    labels: [
      'Tháng 1',
      'Tháng 2',
      'Tháng 3',
      'Tháng 4',
      'Tháng 5',
      'Tháng 6',
      'Tháng 7',
      'Tháng 8',
      'Tháng 9',
      'Tháng 10',
      'Tháng 11',
      'Tháng 12'
    ],
    datasets: [
      {
        label: 'Số lượng nhân sự',
        data: [540, 325, 700, 0, 0, 0, 0, 0, 0, 0, 0, 0], // Dữ liệu số lượng nhân sự
        backgroundColor: '#f58d24', // Màu xanh
        // borderColor: 'rgba(59, 130, 246, 1)',
        borderWidth: 1
      }
    ]
  }

  // Cấu hình biểu đồ
  const options = {
    responsive: true,
    plugins: {
      legend: { display: true },
      title: {
        display: true,
        text: 'Số lượng nhân sự',
        align: 'start' as 'start',
        font: { size: 17 },
        color: '#000'
      }
    },
    scales: {
      y: {
        beginAtZero: true,
        min: 0, // Bắt đầu từ 0
        max: 800, // Kết thúc ở 800
        ticks: {
          stepSize: 100 // Hiển thị mỗi 100 đơn vị
        }
      }
    }
  }

  return <Bar data={data} options={options} className='w-full h-full' />
}

export default StaffCount
