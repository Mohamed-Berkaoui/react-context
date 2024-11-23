import React, { useContext } from 'react'
import ProductBox from './ProductBox'
import { productsStore } from '../context/products'

function Home() {
    const {products}=useContext(productsStore)//{prod,set}
  return (
    <div className='d-flex flex-wrap justify-content-center gap-2 m-4 '>
         {products.map(function(product){
      return <ProductBox product={product}/>
    })}
    </div>
  )
}

export default Home