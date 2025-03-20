import { ICategoriesRes } from '~/types/ICategories'
import {
  FaLaptop,
  FaMobileAlt,
  FaTshirt,
  FaShoppingBag,
  FaClock,
  FaHeartbeat,
  FaDumbbell,
  FaCouch,
  FaUtensils,
  FaBaby,
  FaCar,
  FaBook,
  FaGift
} from 'react-icons/fa'

export const categoriesData: ICategoriesRes[] = [
  {
    id: 1,
    name: 'Máy tính & Laptop',
    img: 'https://source.unsplash.com/300x200/?men-fashion',
    url: '/computer',
    icon: <FaLaptop />
  },
  {
    id: 2,
    name: 'Thiết bị điện tử',
    img: 'https://source.unsplash.com/300x200/?women-fashion',
    url: '/electronic',
    icon: <FaMobileAlt />
  },
  {
    id: 3,
    name: 'Thời trang',
    img: 'https://source.unsplash.com/300x200/?shoes',
    url: '/fashion',
    icon: <FaTshirt />
  },
  {
    id: 4,
    name: 'Túi Xách & Phụ Kiện',
    img: 'https://source.unsplash.com/300x200/?bags-accessories',
    url: '/bags',
    icon: <FaShoppingBag />
  },
  {
    id: 5,
    name: 'Đồng hồ & Trang sức',
    img: 'https://source.unsplash.com/300x200/?watch',
    url: '/watches',
    icon: <FaClock />
  },
  {
    id: 6,
    name: 'Mỹ phẩm & Làm đẹp',
    img: 'https://source.unsplash.com/300x200/?beauty',
    url: '/beauty',
    icon: <FaGift />
  },
  {
    id: 7,
    name: 'Sức khỏe & Thể thao',
    img: 'https://source.unsplash.com/300x200/?sports',
    url: '/sport',
    icon: <FaHeartbeat />
  },
  {
    id: 8,
    name: 'Nội thất',
    img: 'https://source.unsplash.com/300x200/?furniture',
    url: '/furniture',
    icon: <FaCouch />
  },
  {
    id: 9,
    name: 'Thực phẩm',
    img: 'https://source.unsplash.com/300x200/?food',
    url: '/foods',
    icon: <FaUtensils />
  },
  {
    id: 10,
    name: 'Mẹ & Bé',
    img: 'https://source.unsplash.com/300x200/?baby',
    url: '/mom&kid',
    icon: <FaBaby />
  },
  {
    id: 11,
    name: 'Ô tô & Xe máy',
    img: 'https://source.unsplash.com/300x200/?car-motorbike',
    url: '/automotive',
    icon: <FaCar />
  },
  {
    id: 12,
    name: 'Văn phòng phẩm',
    img: 'https://source.unsplash.com/300x200/?books',
    url: '/books',
    icon: <FaBook />
  }
]
