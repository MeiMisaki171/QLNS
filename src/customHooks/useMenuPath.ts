import { useState, useEffect } from 'react'
import { IMenuData } from '~/components/Layout/Body/Sidebar/menu'

// Hàm tìm kiếm đệ quy để lấy đường dẫn menu
const findMenuPath = (path: string, menuItems: IMenuData[], breadcrumb: string[] = []): string | null => {
  for (const item of menuItems) {
    if (item.url === path) {
      return [...breadcrumb, item.title].join(' > ') // Ghép chuỗi breadcrumb
    }
    if (item.children) {
      const result = findMenuPath(path, item.children, [...breadcrumb, item.title as string])
      if (result) return result
    }
  }
  return null
}

// Custom Hook
const useMenuPath = (currentPath: string, menuStructure: IMenuData[]): string => {
  const [menuPath, setMenuPath] = useState('')

  useEffect(() => {
    if (!currentPath || !Array.isArray(menuStructure)) return

    const result = findMenuPath(currentPath, menuStructure)
    setMenuPath(result || '') // Nếu không tìm thấy, đặt chuỗi rỗng
  }, [currentPath, JSON.stringify(menuStructure)]) // Giảm render không cần thiết

  return menuPath
}

export default useMenuPath
