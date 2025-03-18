import React from 'react'
import { notFound } from 'next/navigation'

let product = [
  { id: 5, name: 'Iphone 15', price: 25000, description: 'Latest Iphone Model'},
  { id: 2, name: 'Iphone 13', price: 15000, description: 'Latest Iphone Model'},
  { id: 1, name: 'Iphone 14', price: 12000, description: 'Latest Iphone Model'},
  { id: 3, name: 'Iphone 12', price: 8000, description: 'Latest Iphone Model'},
  { id: 6, name: 'Iphone 11', price: 6000, description: 'Latest Iphone Model'},
]

const page = ({ params }) => {
  const products = product.find((product) => product.id == params.productId)
  if (!products) {
    return notFound()
  }
  return (
    <div className='flex w-[100%] h-screen items-center justify-center'>
      <div className="p-5 border border-gray-500 border[0.25px] rounded-lg">
        <h1 className='text-3xl font-bold'>{products.name}</h1>
        <p className='text-lg'>{products.price}</p>
        <p className='text-lg'>{products.description}</p>
      </div>
    </div>
  )
}

export default page
