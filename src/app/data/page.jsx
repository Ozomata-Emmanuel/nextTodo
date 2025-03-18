const page = async() => {
  const res = await fetch('https://api.escuelajs.co/api/v1/products?limit=10')
  const products = await res.json()

  return (
    <div>
      <h1 className="bg-blue-500 text-white p-3 font-semibold text-2xl">Data fetching</h1>
      <ul className="">
        {
          products.map((product)=>(
            <li key={product.id}>{product.title} - {product.price}</li>
          ))
        }
      </ul>
    </div>
  )
}

export default page
