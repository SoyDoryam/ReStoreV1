import React, { useEffect, useState } from 'react'
import Catalog from '../../features/catalog/Catalog.tsx';
import { Product } from '../models/product.ts';
import Header from './Header.tsx';
import { Container, CssBaseline } from '@mui/material';

const App = () => {
  const [products, setProducts] = useState<Product[]>([])

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
        pictureUrl: 'http://picsum.photos/200',
        type: 'General',
        quantityInStock: 100,
      }
    ])
  }

  return (
    <div>
      <CssBaseline />
      <Header />
      <Container>
        <Catalog products={products} addProduct={addProduct}/>
      </Container>
    </div>
  )
}

export default App;