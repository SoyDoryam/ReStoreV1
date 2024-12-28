    import {List } from '@mui/material'
    import React from 'react'
    import { Product } from '../../app/models/product';
    import ProductCard from './ProductCard.tsx';

    interface Props{
        products: Product[];
    }

const ProductList = ({products}: Props) => {
  return (
    <List>
    {products.map((product) => (
      <ProductCard key={product.id} product={product} />
    ))}
  </List>  )
}

    export default ProductList