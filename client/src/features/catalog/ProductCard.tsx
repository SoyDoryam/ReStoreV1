import { Avatar, ListItem, ListItemAvatar, ListItemText } from '@mui/material'
import React from 'react'
import { Product } from '../../app/models/product.ts';

interface Props {
    product: Product;
}

const ProductCard = ({product}: Props) => {
  return (
    <ListItem key={product.name}> 
        <ListItemAvatar>
            <Avatar src={product.pictureUrl}/>
        </ListItemAvatar>
        <ListItemText>
            {product.name} - {product.price}
        </ListItemText>
      </ListItem>
  )
}

export default ProductCard