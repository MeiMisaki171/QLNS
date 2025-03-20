import { IProduct } from '~/types/IProduct'
import productImg1 from '~/assets/img/productImg1.jpg'
import productImg2 from '~/assets/img/productImg2.jpg'
import productImg3 from '~/assets/img/productImg3.jpg'
import productImg4 from '~/assets/img/productImg4.jpg'
import productImg5 from '~/assets/img/productImg5.jpg'
import productImg6 from '~/assets/img/productImg6.jpg'
import productImg7 from '~/assets/img/productImg7.jpg'
import productImg8 from '~/assets/img/productImg8.jpg'
import productImg9 from '~/assets/img/productImg9.jpg'
import productImg10 from '~/assets/img/productImg10.jpg'
import productImg11 from '~/assets/img/productImg11.jpg'
import productImg12 from '~/assets/img/productImg12.jpg'

export const productsData: IProduct[] = Array(30)
  .fill(null)
  .flatMap((_, index) => [
    {
      id: index * 12 + 1,
      imgUrl: productImg1,
      discount: 20,
      describe: 'Điện thoại thông minh màn hình OLED',
      price: 12000000,
      quantity: 123456,
      voucher: 15,
      tag: 'Hot'
    },
    {
      id: index * 12 + 2,
      imgUrl: productImg2,
      discount: 15,
      describe: 'Laptop gaming hiệu suất cao',
      price: 25000000,
      quantity: 423456,
      voucher: 20,
      tag: 'Best Seller'
    },
    {
      id: index * 12 + 3,
      imgUrl: productImg3,
      discount: 10,
      describe: 'Tai nghe không dây chống ồn',
      price: 10000,
      quantity: 12121
    },
    {
      id: index * 12 + 4,
      imgUrl: productImg4,
      discount: 25,
      describe: 'Máy ảnh chuyên nghiệp 4K',
      price: 18000000,
      quantity: 121213,
      voucher: 25
    },
    {
      id: index * 12 + 5,
      imgUrl: productImg5,
      discount: 5,
      describe: 'Đồng hồ thông minh đo nhịp tim',
      price: 5000000,
      quantity: 34222,
      tag: 'New'
    },
    {
      id: index * 12 + 6,
      imgUrl: productImg6,
      discount: 18,
      describe: 'Bàn phím cơ RGB dành cho game thủ',
      price: 2000000,
      quantity: 323245,
      voucher: 15
    },
    {
      id: index * 12 + 7,
      imgUrl: productImg7,
      discount: 12,
      describe: 'Ghế gaming ergonomic',
      price: 7000000,
      quantity: 25212
    },
    {
      id: index * 12 + 8,
      imgUrl: productImg8,
      discount: 30,
      describe: 'Smart TV 4K 55 inch',
      price: 12000000,
      quantity: 15,
      voucher: 23,
      tag: 'Hot'
    },
    {
      id: index * 12 + 9,
      imgUrl: productImg9,
      discount: 8,
      describe: 'Loa Bluetooth chống nước',
      price: 1500000,
      quantity: 12323
    },
    {
      id: index * 12 + 10,
      imgUrl: productImg10,
      discount: 20,
      describe: 'Ổ cứng SSD NVMe 1TB',
      price: 3500000,
      quantity: 43233,
      tag: 'Best Choice'
    },
    {
      id: index * 12 + 11,
      imgUrl: productImg11,
      discount: 10,
      describe: 'Máy giặt thông minh Inverter',
      price: 10000000,
      quantity: 35543
    },
    {
      id: index * 12 + 12,
      imgUrl: productImg12,
      discount: 22,
      describe: 'Quạt điều hòa không khí',
      price: 4500000,
      quantity: 45444
    }
  ])
