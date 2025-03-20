export const formatQuantity = (num: number): string => {
  if (num >= 1_000_000) {
    return (num / 1_000_000).toFixed(1) + 'M' // Chuyển thành triệu (1M)
  } else if (num >= 1_000) {
    return (num / 1_000).toFixed(1).replace('.0', '') + 'k' // Chuyển thành nghìn (1,2k)
  }
  return num.toString() // Nhỏ hơn 1000 thì giữ nguyên
}
