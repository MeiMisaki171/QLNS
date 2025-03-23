import React from 'react'
import dayjs from 'dayjs'
import 'dayjs/locale/vi'
import weekday from 'dayjs/plugin/weekday'
import localeData from 'dayjs/plugin/localeData'

dayjs.extend(weekday)
dayjs.extend(localeData)
dayjs.locale('vi')

const Calendar = () => {
  const today = dayjs()
  const startOfMonth = today.startOf('month')
  const daysInMonth = today.daysInMonth()
  const firstDayOfWeek = startOfMonth.weekday() // Ngày đầu tiên của tháng là thứ mấy (0 = Chủ Nhật)

  const highlightedDates = ['2025-03-05', '2025-03-10', '2025-03-15', '2025-03-20']

  // Tính toán số tuần trong tháng (dòng trong bảng)
  const numWeeks = Math.ceil((daysInMonth + firstDayOfWeek) / 7)

  // Tạo mảng 2 chiều để chứa các ngày theo tuần
  const calendarDays = []
  let dayCounter = 1 - firstDayOfWeek // Bắt đầu từ các ô trống trước ngày 1

  for (let week = 0; week < numWeeks; week++) {
    const weekDays = []
    for (let dayOfWeek = 0; dayOfWeek < 7; dayOfWeek++) {
      if (dayCounter > 0 && dayCounter <= daysInMonth) {
        // Ngày trong tháng hiện tại
        const currentDate = startOfMonth.add(dayCounter - 1, 'day')
        weekDays.push(currentDate)
      } else {
        // Ô trống (ngày không thuộc tháng hiện tại)
        weekDays.push(null)
      }
      dayCounter++
    }
    calendarDays.push(weekDays)
  }

  return (
    <div className='w-full h-full flex flex-col'>
      <div className='flex items-start w-full mb-1 md:mb-2'>
        <span className='text-xs md:text-sm lg:text-base font-bold'>Sinh nhật nhân viên</span>
      </div>

      {/* Tiêu đề tháng năm */}
      <h2 className='text-xs md:text-sm lg:text-base font-bold text-center mb-1 md:mb-2'>
        {today.format('MMMM YYYY').toUpperCase()}
      </h2>

      {/* Bảng lịch - sử dụng flex-grow để lấp đầy phần còn lại */}
      <div className='flex-grow w-full overflow-hidden flex flex-col'>
        <table className='w-full h-full border-collapse table-fixed'>
          <thead className='h-8'>
            <tr>
              {['CN', 'T2', 'T3', 'T4', 'T5', 'T6', 'T7'].map((day) => (
                <th key={day} className='text-xs md:text-sm lg:text-base font-bold text-gray-600'>
                  {day}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className='flex-grow text-center'>
            {calendarDays.map((week, weekIndex) => (
              <tr key={`week-${weekIndex}`} className='h-1/6'>
                {week.map((day, dayIndex) => {
                  if (!day) {
                    // Ô trống
                    return <td key={`empty-${weekIndex}-${dayIndex}`}></td>
                  }

                  const formattedDate = day.format('YYYY-MM-DD')
                  const isHighlighted = highlightedDates.includes(formattedDate)

                  return (
                    <td key={formattedDate} className='relative'>
                      <div className='absolute inset-1 md:inset-2 flex items-center justify-center text-gray-800 text-xs md:text-sm lg:text-base'>
                        <div
                          className={`${
                            isHighlighted ? 'border-2 border-amber-700' : ''
                          } flex items-center justify-center w-8 h-8 md:w-10 md:h-10 lg:w-8 lg:h-8 rounded-full`}
                        >
                          {day.date()}
                        </div>
                      </div>
                    </td>
                  )
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Calendar
