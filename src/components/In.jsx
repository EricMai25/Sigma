import React from 'react'
import { Container, Button } from 'react-bootstrap';

const In = props => {
    return (
      <div style={{height: '100%'}}>
            <img src={props.log.Img} alt="Smiley face" height="100" width="100" />
            <h2>Welcome {props.log.First + ' ' + props.log.Last}</h2>
            <Button>Create Contract</Button>
      </div>
    );
  };
  
  export default In;
  