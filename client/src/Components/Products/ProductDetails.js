import { Button, Card, CardActionArea, CardActions, CardContent, Typography } from '@mui/material'
import React from 'react'
import { useSelector } from 'react-redux';


const ProductDetails = () => {
const prodDetails=useSelector(state=>state.productReducer.prodDetails)
  
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        {/* <CardMedia
          component="img"
          height="140"
          image="/static/images/cards/contemplative-reptile.jpg"
          alt="green iguana"
        /> */}
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
         {prodDetails.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Quantity: {prodDetails.qteS}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Price: {prodDetails.price} dt
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Description: {prodDetails.description} dt
          </Typography>
        </CardContent>
      </CardActionArea>

    </Card>
  )
}

export default ProductDetails