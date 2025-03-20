import { useState, useCallback } from 'react'
import { bestSellerData } from '~/data/bestSeller'
import { liveStreamData } from '~/data/liveStream'
import { ILiveStream } from '~/types/ILiveStream'

export const useLiveStream = () => {
  const [liveStream, setLiveStream] = useState<ILiveStream[]>([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const getLiveStream = useCallback(async () => {
    try {
      setLoading(true)
      //Call Api lấy ra data ở đây
      // const fetchedCategories = await categoriesFetch();
      setLiveStream(liveStreamData)
      setError(null)
    } catch (e: any) {
      setError(e.message)
    } finally {
      setLoading(false)
    }
  }, [])

  return { liveStream, loading, error, getLiveStream }
}
