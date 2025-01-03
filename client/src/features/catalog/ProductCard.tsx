import { Avatar, Button, Card, CardActions, CardContent, CardHeader, CardMedia, Typography } from '@mui/material'
import React from 'react'
import { Product } from '../../app/models/product.ts';

interface Props {
    product: Product;
}

const ProductCard = ({product}: Props) => {
  return (
    <Card>
      <CardHeader
         avatar = {
          <Avatar sx={{ bgcolor: 'secondary.main' }}>
            {product.name.charAt(0).toLocaleUpperCase()}
          </Avatar>
         }
         title= {product.name}
         titleTypographyProps={{
          sx: {fontWeight: 'bold', color: 'primary.main'}
         }}
      />
    <CardMedia
      sx={{ height: 140, backgroundSize: 'contain' , bgcolor:'primary.main'}}
      image={product.pictureUrl}
      title={product.name}
    />
    <CardContent>
      <Typography gutterBottom color='secondary' variant="h5">
        ${(product.price / 100).toFixed(2)} 
      </Typography>
      <Typography variant="body2" sx={{ color: 'text.secondary' }}>
        {product.brand} / {product.type}
      </Typography>
    </CardContent>
    <CardActions>
      <Button size="small">Add to cart</Button>
      <Button size="small">View</Button>
    </CardActions>
  </Card>
  )
}

export default ProductCard