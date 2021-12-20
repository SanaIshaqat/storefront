import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteFromCart } from '../reducer/actions';
import { Button } from '@material-ui/core';

export default function SimpleCart() {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.cart.cartProducts);
  function deleteHandler(productName) {
    dispatch(deleteFromCart(productName));
  }
  return (
    <div id='simple-cart'>
      <h2>Your Cart Content:</h2>
      <ul>
        {state.map((product) => (
          <>
            <li id='li'>
              {product} <Button  id='Button'  variant="contained" style={{backgroundColor: "cadetblue", color:"white"}} onClick={() => deleteHandler(product)}>Delete</Button>
              
            </li>
          </>
        ))}
      </ul>
    </div>
  );
}