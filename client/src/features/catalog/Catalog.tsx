import React from 'react'
import { Product } from '../../app/models/product';
import { Button} from '@mui/material';
import ProductList from './ProductList.tsx';

interface Props{
    products: Product[];
    addProduct: () => void
}   

const Catalog = ({products, addProduct}: Props) => {
  return (
    <>
      <ProductList products={products}/>
      <Button variant='contained' onClick={addProduct}>Add product</Button>
    </>
  )
}

export default Catalog
    