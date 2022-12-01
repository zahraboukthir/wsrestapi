import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { deletproduct, getoneproduct } from '../../JS/actions/productActions';
export default function ProductCard({el}) {
  const dispatch=useDispatch()
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
            {el.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Quantity: {el.qteS}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Price: {el.price} dt
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Link to={`/products/details`}>
        <Button size="small" color="primary" onClick={()=>dispatch(getoneproduct(el._id))}>
          See Details
        </Button>
        </Link>
        <Button size="small" color="primary" onClick={()=>dispatch(deletproduct(el._id))} >
        <DeleteIcon />
        </Button>
        <Link to={`/products/edit`}>
        <Button size="small" color="primary" onClick={()=>dispatch(getoneproduct(el._id))}>
          <EditIcon/>
        </Button>
        </Link>
      </CardActions>
    </Card>
  );
}

