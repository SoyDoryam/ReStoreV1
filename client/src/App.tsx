import React, { useEffect, useState } from 'react'

const App = () => {
  const [products, setProducts] = useState([
    {name: 'Product 1', price: 100.00},
    {name: 'Product 2', price: 200.00},
    {name: 'Product 3', price: 300.00},
  ])

  useEffect(() => { 
    fetch('http://localhost:5217/api/Products')
      .then(response => response.json())
      .then(data => setProducts(data))
    }, []);

    console.log(products);
  function addProduct() {
    setProducts(prevState => [
      ...prevState,
      {
        name: `Product ${Math.floor(Math.random() *1000)}`, 
        price: parseFloat((Math.random() * 500 + 100).toFixed(2)) // Precio aleatorio entre 100.00 y 600.00
      }
    ])
  }

  return (
    <div>
      <h1>Re-Store</h1>
      <ul>
        {products.map((product, index) => (
          <li key={index}>
            {product.name} - ${product.price}
          </li>
        ))}
      </ul>
      <button onClick={addProduct}>Add product</button>
    </div>
  )
}

export default App;