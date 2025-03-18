import React from 'react'

const page = async() => {
  const res = await fetch('https://api.escuelajs.co/api/v1/products', {
    cache: "no-store"
  })
  const products = await res.json()
  return (
    <div>
      <h1>SSR / DYNAMIC PAGE RENDERING</h1>
      <ul className="">
        {
          products.map((product)=>(
            <li key={product.id} className='shadow-2xl shadow-blue-100 mb-4 p-5 border-4'>
              {product.title} - {product.price}
              <img src={product.images} className='h-30 w-30' alt="" />
            </li>
          ))
        }
      </ul>
    </div>
  )
}

export default page
