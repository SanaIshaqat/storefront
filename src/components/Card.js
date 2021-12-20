import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { useSelector, useDispatch } from 'react-redux';
import { addToCart } from '../reducer/actions';
import CardActions from '@material-ui/core/CardActions';

const useStyles = makeStyles({
  root: {
    maxWidth: 500,
  },
  media: {
    height: 250,
  },
});

export default function MediaCard(props) {
  const classes = useStyles();
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  function addToCartHandler(productName) {
    if (!state.cart.cartProducts.includes(productName)) {
      dispatch(addToCart(productName));
    }
  }
  return (
    <Card className={classes.root} className='card-ui'>
      <CardActionArea>
        <CardMedia className={classes.media} image={props.product.img} title='Contemplative Reptile' />
        <CardContent>
          <Typography gutterBottom variant='h5' component='h2'>
            {props.product.name}
          </Typography>
          <Typography variant='body2' color='textSecondary' component='p'>
            {props.product.description}
          </Typography>
          <Typography gutterBottom variant='h6' component='h6'>
            Price : {props.product.price}
          </Typography>
          <Typography gutterBottom variant='h6' component='h6'>
            Availability : {props.product.inventoryCount} pieces
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button  style={{backgroundColor: "cadetblue", color:"white"}} id='addButton'  variant="contained"color="primary" onClick={() => addToCartHandler(props.product.name)} size='small' color='primary'>
          Add To Cart
        </Button>
      </CardActions>
    </Card>
  );
}