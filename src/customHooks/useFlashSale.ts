import { useState, useCallback } from 'react'
import { flashSaleData } from '~/data/flashSale'
import { IFlashSaleData } from '~/types/IFlashSale'

export const useFlashSale = () => {
  const [flashSale, setFlashSale] = useState<IFlashSaleData[]>([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const getFlashSale = useCallback(async () => {
    try {
      setLoading(true)
      //Call Api lấy ra data ở đây
      // const fetchedCategories = await categoriesFetch();
      setFlashSale(flashSaleData)
      setError(null)
    } catch (e: any) {
      setError(e.message)
    } finally {
      setLoading(false)
    }
  }, [])

  return { flashSale, loading, error, getFlashSale }
}
