/* eslint-disable prettier/prettier */
import axios from 'axios'

// duong dan den APIs
// export default axios.create({
//   // baseURL: 'http://localhost:8181',
//   baseURL: 'http://10.15.68.204:8181/Tcs4Api',
//   headers: {
//     'Content-type': 'application/json; charset=UTF-8'
//   }
// })

const http = axios.create({
  baseURL: '', // Để trống tại đây, sẽ thiết lập sau khi lấy config
  headers: {
    'Content-Type': 'application/json'
  }
})

// Hàm để lấy cấu hình từ file trong thư mục public
const fetchConfig = async () => {
  try {
    const response = await fetch('/config.json') // Đường dẫn đến file trong thư mục public
    if (!response.ok) {
      throw new Error('Network response was not ok')
    }
    const config = await response.json()
    return config
  } catch (error) {
    console.error('Error fetching config:', error)
    return null // Trả về null nếu có lỗi
  }
}

// Khởi tạo instance Axios với baseURL từ config
const initializeHttp = async () => {
  const config = await fetchConfig()
  if (config && config.baseURL) {
    http.defaults.baseURL = config.baseURL // Thiết lập baseURL từ config
  } else {
    // Nếu không có config, bạn có thể đặt baseURL mặc định
    // http.defaults.baseURL = 'http://10.15.68.204:8181/Tcs4Api'
    http.defaults.baseURL = 'http://localhost:8080/tcs-api'; // BE domain
  }
}

// Gọi hàm khởi tạo
initializeHttp()

export default http
