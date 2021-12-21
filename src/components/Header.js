import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import IconButton from '@material-ui/core/IconButton';
import Cart from '../components/SimpleCart';
export default function Header() {
    return (
      <>
        <ButtonAppBar />
      </>
    );
  }

  function ButtonAppBar() {
    return (
      <div >
        <AppBar style={{backgroundColor: "cadetblue", color:"white"}} color="inherit" id='nav-bar' position='static'>
            <IconButton edge='start' color='inherit' aria-label='menu'></IconButton>
            <h1 style={{marginLeft:"2%"}} >FRUITY-FLOWERS STORE</h1>
            <Cart />
        </AppBar>
      </div>
    );
    
  }
