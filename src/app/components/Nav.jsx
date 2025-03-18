import React from 'react'
import Link from 'next/link'

const Nav = () => {
  return (
    <div className='w-full bg-gray-500 flex justify-between items-center p-4 text-white shadow-2xl'>
      <h1 className='font-bold text-3xl cursor-pointer'>Logo</h1>
      <ul className='flex items-center gap-5'>
        <Link href="/">Home</Link>
        <Link href="product">product</Link>
        <Link href="about">about</Link>
        <Link href="shop">shop</Link>
        <Link href="todo">todo</Link>
        <Link href="image">image</Link>
        <Link href="data">static page</Link>
        <Link href="ssr">ssr page</Link>
        <Link href="practical">practical</Link>
      </ul>
    </div>
  )
}

export default Nav
