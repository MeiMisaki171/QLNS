import { useState, useCallback } from 'react'
import { categoriesData } from '~/data/categories'
import { ICategoriesRes } from '~/types/ICategories'

export const useCategories = () => {
  const [categories, setCategories] = useState<ICategoriesRes[]>([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const getCategories = useCallback(async () => {
    try {
      setLoading(true)
      //Call Api lấy ra data ở đây
      // const fetchedCategories = await categoriesFetch();
      setCategories(categoriesData)
      setError(null)
    } catch (e: any) {
      setError(e.message)
    } finally {
      setLoading(false)
    }
  }, [])

  return { categories, loading, error, getCategories }
}
