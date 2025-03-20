import { useState, useEffect } from 'react'

const useTimeOfDay = (): string => {
  const [timeOfDay, setTimeOfDay] = useState('')

  useEffect(() => {
    const hour = new Date().getHours()
    if (hour >= 5 && hour < 12) setTimeOfDay('buổi sáng')
    else if (hour >= 12 && hour < 18) setTimeOfDay('buổi chiều')
    else if (hour >= 18 && hour < 21) setTimeOfDay('buổi tối')
    else setTimeOfDay('Buổi đêm')
  }, [])

  return timeOfDay
}

export default useTimeOfDay
