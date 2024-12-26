import React, { useEffect, useState } from 'react'
import { Catalog } from '../../features/catalog/Catalog.tsx';

const App = () => {
  const [products, setProducts] = useState([])

  useEffect(() => { 
    fetch('http://localhost:5217/api/Products')
      .then(response => response.json())
      .then(data =>{
        setProducts(data)
        console.log(data)
      })
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
      <Catalog />
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