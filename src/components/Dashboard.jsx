import React from 'react'
import In from './In.jsx'
import { Container, Button } from 'react-bootstrap';

class Dash extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }

    render() {
        return (
         <Container>
             <h2>{this.props.log.First}</h2>
         </Container>
        )
    }
}

export default Dash

