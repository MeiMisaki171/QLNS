export interface IProduct {
  id: number
  imgUrl: string
  discount: number
  describe: string
  price: number
  quantity: number
  voucher?: number
  tag?: string
}
