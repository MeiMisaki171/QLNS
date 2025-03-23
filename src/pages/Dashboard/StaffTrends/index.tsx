import React from 'react'
import { Line } from 'react-chartjs-2'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js'

// Đăng ký các thành phần cần thiết của Chart.js
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend)

const StaffTrends = () => {
  // Dữ liệu biểu đồ
  const data = {
    labels: ['2018', '2019', '2020', '2021', '2022', '2023', '2024'],
    datasets: [
      {
        label: 'Tiếp nhận nhân sự',
        data: [65, 59, 80, 81, 56, 55, 40], // Số lượng nhân sự tiếp nhận
        borderColor: '#0000ff', // Màu xanh
        backgroundColor: 'rgba(59, 130, 246, 0.2)',
        borderWidth: 3,
        pointRadius: 3,
        pointBorderWidth: 1,
        tension: 0.4
      },
      {
        label: 'Nghỉ việc',
        data: [28, 48, 40, 19, 86, 27, 90], // Số lượng nhân sự nghỉ việc
        borderColor: '#ff0000', // Màu đỏ
        backgroundColor: 'rgba(244, 63, 94, 0.2)',
        borderWidth: 3,
        pointRadius: 3,
        pointBorderWidth: 1,
        tension: 0.4
      }
    ]
  }

  // Cấu hình biểu đồ
  const options = {
    responsive: true,
    maintainAspectRatio: false, // Đảm bảo chiếm toàn bộ diện tích cha
    plugins: {
      legend: { display: true },
      title: {
        display: true,
        text: 'Biến động nhân sự',
        align: 'start' as 'start',
        font: { size: 17 },
        color: '#000'
      }
    },
    scales: {
      y: {
        beginAtZero: true,
        min: 10,
        max: 90,
        ticks: { stepSize: 10 }
      }
    }
  }

  return (
    <div className='w-full h-full'>
      <Line data={data} options={options} className='w-full h-full' />
    </div>
  )
}

export default StaffTrends
