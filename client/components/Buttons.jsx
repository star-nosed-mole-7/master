import React from 'react';

const Buttons = (props) =>{

  const buttons = [];
  if(props.button1) buttons.push(<button type="button" onClick = {console.log('')} >{props.button1}</button>)
  if(props.button2) buttons.push(<button type="button" onClick = {console.log('')}> {props.button2}</button>)
  if(props.button3) buttons.push(<button type="button" onClick = {console.log('')}> {props.button3}</button>)

  return(
    <div >
      {buttons}
    </div>
  );
}

Buttons.defaultProps = {
  button1: 'Add to Watchlist',
  button2: 'Add to Favorites',
  button3: 'Mark as Watched',
}


export default Buttons; 