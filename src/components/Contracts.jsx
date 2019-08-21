import React from 'react';
import { Card, Button } from 'react-bootstrap';
import PImage from '../logo.svg'
import './Contracts.css'


const Contracts = (props) => {
    return (
        <Card className='cont'>
            <Card.Img variant="top" src={PImage} />
            <Card.Body>
                <Card.Title>{props.fri.Cname}</Card.Title>
                <Card.Text>
                    {'From: '+ props.fri.Rname}
                </Card.Text>
                {props.who === 'Fin'
                    ? <p>Completed</p>
                    : <Button
                        onClick={e => { props.comp(props.fri.iSend, props.fri.iRec, props.fri) }}
                        variant="primary">Complete</Button>}
            </Card.Body>
        </Card>

    )
}

export default Contracts