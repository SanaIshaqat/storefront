import React from 'react';
import { connect } from 'react-redux';
import { selectCategory } from '../reducer/actions';
import { Button } from '@material-ui/core';

function Category(props) {
  function onClickHandler(categoryName) {
    props.selectCategory(categoryName);
  }
  return (
    <>
      <h2 id='Category' style={{fontFamily:"sans-serif"}}><b>Select Desired Category:</b></h2>
      {props.categories.map((cat) => (
        <>
          <Button id='Button'  variant="contained"style={{backgroundColor: "cadetblue", color:"white"}} onClick={() => onClickHandler(cat.normalizedName)}>
            {cat.normalizedName}
          </Button>
        </>
      ))}

      {props.activeCategory.normalizedName && <h2>Active Category : {props.activeCategory.normalizedName}</h2>}
    
      {props.activeCategory.normalizedName && <h4 id='desc'> {props.activeCategory.description}</h4>}
    </>
  );
}
const mapStateToProps = (state) => {
  return state.cat;
};
const mapDispatchToProps = { selectCategory };
export default connect(mapStateToProps, mapDispatchToProps)(Category);