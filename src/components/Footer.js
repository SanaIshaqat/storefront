import React from 'react';
import AppBar from '@material-ui/core/AppBar';

export default function Footer() {
  return (
    <>
      <ButtonAppBar />
    </>
  );
}

function ButtonAppBar() {

  return (
    <div id='footer'>
      <AppBar style={{backgroundColor: "cadetblue"}} id='nav-bar' position='static'>
          <h4>All Rights reserved &copy; Sana Ishaqat 2021</h4>
      </AppBar>
    </div>
  );
}
