import React from 'react'
import Categories from '~/components/Layout/ClientLayout/Categories'
import FlashSale from '~/components/Layout/ClientLayout/FlashSale'
import Slider from '~/components/Layout/ClientLayout/Slider'
import LiveStream from '~/components/Layout/ClientLayout/Livestream'
import BestSeller from '~/components/Layout/ClientLayout/BestSeller'
import UserComponent from '~/components/Layout/ClientLayout/UserComponent'
import ProductList from '~/components/Layout/ClientLayout/Product'

const Home: React.FC = () => {
  return (
    <>
      <Slider />
      <div className='relative w-full min-w-[1200px] max-w-8xl mt-4 grid grid-cols-12 gap-4'>
        {/* Categories - 2 columns */}
        <div className='col-span-2 min-w-[200px]'>
          <Categories />
        </div>

        {/* FlashSale - 8 columns, half height */}
        <div className='col-span-8 min-w-[400px] grid gap-4 h-fit'>
          <FlashSale />
          <div className='col-span-2 bg-[#ffffff] rounded-[12px] grid grid-cols-12 gap-4 min-w-[400px] '>
            <BestSeller />
            <LiveStream />
          </div>
        </div>

        <div className='col-span-2 min-w-[210px]'>
          <UserComponent />
        </div>
      </div>
      <ProductList />
    </>
  )
}

export default Home
