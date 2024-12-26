import React, { useEffect, useState } from 'react'
import Catalog from '../../features/catalog/Catalog.tsx';
import { Product } from '../models/product.ts';

const App = () => {
  const [products, setProducts] = useState<Product>([])

  useEffect(() => { 
    fetch('http://localhost:5217/api/Products')
      .then(response => response.json())
      .then(data =>{
        setProducts(data)
      })
    }, []);

    console.log(products);
  function addProduct() {
    setProducts(prevState => [
      ...prevState,
      {
        id: prevState.length + 101,
        name: `Product ${prevState.length + 1}`,
        price: parseFloat((Math.random() * 500 + 100).toFixed(2)), // Precio aleatorio entre 100.00 y 600.00
        brand: 'Some brand',
        description: 'A new product',
        pictureUrl: 'http://example.com/product.jpg',
        type: 'General',
        quantityInStock: 100,
      }
    ])
  }

  return (
    <div>
      <h1>Re-Store</h1>
      <Catalog products={products} addProduct={addProduct}/>
    </div>
  )
}

export default App;