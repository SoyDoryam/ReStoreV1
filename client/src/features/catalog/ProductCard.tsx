import { Button, Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material'
import React from 'react'
import { Product } from '../../app/models/product.ts';

interface Props {
    product: Product;
}

const ProductCard = ({product}: Props) => {
  return (
    <Card>
    <CardMedia
      sx={{ height: 140 }}
      image={product.pictureUrl}
      title={product.name}
    />
    <CardContent>
      <Typography gutterBottom variant="h5" component="div">
        {product.name}
      </Typography>
      <Typography variant="body2" sx={{ color: 'text.secondary' }}>
        {product.description}
      </Typography>
    </CardContent>
    <CardActions>
      <Button size="small">Share</Button>
      <Button size="small">Learn More</Button>
    </CardActions>
  </Card>
  )
}

export default ProductCard