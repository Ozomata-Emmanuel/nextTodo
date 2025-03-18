import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export const metadata = {
  title: "Shop - ecommerce",
  description: "Buy thr best product at the best price",
  
}

export default async function page(){
  const res = await fetch('https://api.escuelajs.co/api/v1/products', {
    cache: "no-store"
  })
  const products = await res.json()
  console.log(products)
  return (
    <div className='container mx-auto p-6'>
      <h1 className="text-4xl font-bold text-center mb-8">Out products</h1>      
      <div className="grid grid-cols-1 sm:grid-cols-2:md:grid-cols-3 lg:grid-cols-4 gap-6">
        {
          products.map((product)=> (
            <div className="border rounded-lg shadow-lg p-4 hover:shadow-xl transition" key={product.id}>
              <Image 
                src={product.images}
                alt={product.title}
                width={200}
                height={200}
                className="w-full h-48 object-cover rounded-lg"
              />
              <h2 className='text-lg font-semibold mt-2'>{product.title}</h2>
              <p className="text-gray-500">${product.price}</p>
              <Link
                href={`/product/${product.id}`}
                className="block mt-4 bg-blue-600 text-white text-center py-2 rounded-md hover:bg-blue-700 transition"
              >
                View Details
              </Link>
            </div>
          ))
        }
      </div>
    </div>
  )
}

// export default page
