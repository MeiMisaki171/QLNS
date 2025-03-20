import React, { useState, useEffect } from 'react'

interface CountdownTimerProps {
  targetTime: string // Thời gian kết thúc dưới dạng "YYYY-MM-DD HH:mm:ss"
}

const CountdownTimer: React.FC<CountdownTimerProps> = ({ targetTime }) => {
  const calculateTimeLeft = () => {
    const difference = new Date(targetTime).getTime() - new Date().getTime()
    if (difference > 0) {
      return {
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / (1000 * 60)) % 60),
        seconds: Math.floor((difference / 1000) % 60)
      }
    }
    return { hours: 0, minutes: 0, seconds: 0 }
  }

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft())

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft())
    }, 1000)

    return () => clearInterval(timer) // Dọn dẹp interval khi unmount
  }, [targetTime])

  return (
    <div className='text-red-500 font-bold text-lg flex space-x-2'>
      {timeLeft.hours > 0 || timeLeft.minutes > 0 || timeLeft.seconds > 0 ? (
        <>
          <span>{String(timeLeft.hours).padStart(2, '0')}</span>:
          <span>{String(timeLeft.minutes).padStart(2, '0')}</span>:
          <span>{String(timeLeft.seconds).padStart(2, '0')}</span>
        </>
      ) : (
        <span>Hết giờ</span>
      )}
    </div>
  )
}

export default CountdownTimer
