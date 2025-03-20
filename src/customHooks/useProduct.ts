import { useState, useEffect, useCallback, useRef } from 'react'
import { productsData } from '~/data/product'
import { IProduct } from '~/types/IProduct'

const PAGE_SIZE = 30 // Số lượng sản phẩm mỗi lần fetch

export const fetchProducts = async (page: number): Promise<IProduct[]> => {
  return new Promise((resolve) =>
    setTimeout(() => {
      const startIndex = page * PAGE_SIZE
      const endIndex = startIndex + PAGE_SIZE

      // Cắt danh sách sản phẩm theo trang
      const paginatedProducts = productsData.slice(startIndex, endIndex)

      resolve(paginatedProducts)
    }, 500)
  )
}

export const useProduct = () => {
  const [products, setProducts] = useState<IProduct[]>([])
  const [page, setPage] = useState(0)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const observer = useRef<IntersectionObserver | null>(null)
  const hasMore = useRef(true) // Thêm biến kiểm tra còn dữ liệu không

  const fetchData = useCallback(async (pageNum: number) => {
    if (!hasMore.current) return // Nếu hết data thì không fetch tiếp
    try {
      setLoading(true)
      const newProducts = await fetchProducts(pageNum)

      if (newProducts.length < PAGE_SIZE) {
        hasMore.current = false // Nếu số lượng trả về < PAGE_SIZE thì ngừng tải
      }

      setProducts((prev) => [...prev, ...newProducts])
      setError(null)
    } catch (e: any) {
      setError(e.message)
    } finally {
      setLoading(false)
    }
  }, [])

  useEffect(() => {
    fetchData(page) // Fetch dữ liệu khi page thay đổi
  }, [fetchData, page])

  const lastProductRef = useCallback(
    (node: HTMLDivElement | null) => {
      if (loading || !hasMore.current) return // Ngăn gọi lại khi đang load hoặc hết data

      if (observer.current) observer.current.disconnect()
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
          setPage((prevPage) => prevPage + 1)
        }
      })

      if (node) observer.current.observe(node)
    },
    [loading]
  )

  return { products, loading, error, lastProductRef }
}
