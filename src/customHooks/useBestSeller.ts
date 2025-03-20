import { useState, useCallback } from 'react'
import { bestSellerData } from '~/data/bestSeller'
import { IBestSeller } from '~/types/IBestSeller'

export const useBestSeller = () => {
  const [bestSeller, setBestSeller] = useState<IBestSeller[]>([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const getBestSeller = useCallback(async () => {
    try {
      setLoading(true)
      //Call Api lấy ra data ở đây
      // const fetchedCategories = await categoriesFetch();
      setBestSeller(bestSellerData)
      setError(null)
    } catch (e: any) {
      setError(e.message)
    } finally {
      setLoading(false)
    }
  }, [])

  return { bestSeller, loading, error, getBestSeller }
}
